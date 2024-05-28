import _ from "underscore";
import { GameFiltersFormModel, GameFiltersView, gameFiltersData } from "../../components/forms";

import { GameModel, GamesCollection, GamesView, gameTplManager } from "../../components/gameHolders";
import { HeaderModel, HeaderView, mainHeaderData } from "../../components/headers";
import { GamesPageView } from "../../pages";


export const gamesRouterFunction = () => {
  
  const gamesCollection = new GamesCollection();
  const gameFiltersFormModel = new GameFiltersFormModel(); 
  
  const gamesPageView = new GamesPageView( {el: '#container' } );
  gamesPageView.render();

  const headerView = new HeaderView( {el: '#header', model: new HeaderModel} );
  headerView.render( mainHeaderData );

  const gameFiltersView =  new GameFiltersView( {el: '#filters-panel', model: gameFiltersFormModel, collection: gamesCollection} )
  gameFiltersView.render( gameFiltersData );


  gamesCollection.fetch({ method: 'GET' })
    .then((response: JQueryXHR) => {
      // console.log({response});
      const gamesView = new GamesView( {el: '#filtered-games', collection: gamesCollection, templateString: gameTplManager.templates.gameCardThin} );
      gamesView.render();
    })
    .catch((error: Error) => {
      console.error(error);
    });
  
}
