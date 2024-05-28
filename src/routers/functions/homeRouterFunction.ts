import { template } from "underscore";
import { GamesCollection, GamesView, HighlightedGamesCollection, HighlightedGamesView, gameTplManager } from "../../components/gameHolders";
import { HeaderModel, HeaderView, mainHeaderData } from "../../components/headers";
import { HomeModel, HomePageView } from "../../pages";

export const homeRouterFunction = () => {
  
  const homePageView = new HomePageView( {el: '#container', model: new HomeModel} );
  homePageView.render();

  const headerView = new HeaderView( {el: '#header', model: new HeaderModel} );
  headerView.render( mainHeaderData );

  const highlightedGamesCollection = new HighlightedGamesCollection();
  const gamesCollection = new GamesCollection();


  highlightedGamesCollection.fetch({ method: 'GET' })
    .then((response: JQueryXHR) => {
      // console.log({response});
      const highlightedGamesView = new HighlightedGamesView( {el: '#highlighted', collection: highlightedGamesCollection } );
      highlightedGamesView.render();
    })
    .catch((error: Error) => {
      console.error(error);
    });

  gamesCollection.fetch({ method: 'GET' })
    .then((response: JQueryXHR) => {
      // console.log({response});
      
      const gamesView = new GamesView( {el: '#all-games', collection: gamesCollection, templateString: gameTplManager.templates.gameCardWide} );
      gamesView.render();
    })
    .catch((error: Error) => {
      console.error(error);
    });
  
}
