import { GamesCollection, GamesView, HighlightedGamesCollection, HighlightedGamesView } from "../../components/gameHolders";
import { HeaderModel, HeaderView, mainHeaderData } from "../../components/headers";
import { GamesPageView } from "../../pages";

export const gamesRouterFunction = () => {
  
  const gamesPageView = new GamesPageView( {el: '#container' } );
  gamesPageView.render();

  const headerView = new HeaderView( {el: '#header', model: new HeaderModel} );
  headerView.render( mainHeaderData );

  const gamesCollection = new GamesCollection();

  gamesCollection.fetch({ method: 'GET' })
    .then((response: JQueryXHR) => {
      // console.log({response});
      const gamesView = new GamesView( {el: '#find-games', collection: gamesCollection} );
      gamesView.render();
    })
    .catch((error: Error) => {
      console.error(error);
    });
  
}
