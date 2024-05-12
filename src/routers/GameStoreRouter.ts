import { CollectionFetchOptions, Router } from 'backbone';
import HeaderView from '../components/header/views/headerView';
import HomeView from '../pages/views/homeView';
import HomeModel from '../pages/models/HomeModel';
import HeaderModel from '../components/header/models/headerModel';
import { HighlightedGamesView } from '../components/gameHolders/views/highlightedGamesView';
import { HighlightedGamesCollection } from "../components/gameHolders/collections/highlightedGamesCollection";

const AppRouter = Router.extend({

  routes: {
    "":                       "home",
    "games":                  "listGames",
    "games/highlighted":      "highlightedGames",
    "publisher":              "listPublishers",
    "search/:query":          "search",  
    "search/:query/p:page":   "search"   
  },

  home: function() {
    new HomeView( {el: '#container', model: new HomeModel} );

    new HeaderView( {el: '#header', model: new HeaderModel} );
 
    const highlightedGamesCollection = new HighlightedGamesCollection();

    const fetchOptions: CollectionFetchOptions = {
      data: {
        // Your data here
      },
      method: 'GET',
      headers: {
        // Your headers here
      },
    };

    highlightedGamesCollection.fetch(fetchOptions)
      .then((response: JQueryXHR) => {
        // Handle the successful response here
        console.log({response});
        new HighlightedGamesView( {el: '#highlighted', collection: highlightedGamesCollection, games: response } );
      })
      .catch((error: Error) => {
        // Handle the error here
        console.error(error);
      });

  },

  listGames: function() {
    console.log("listGames");
    
  },

  highlightedGames: function() {
    console.log("highlightedGames");
    
  },

  listPublishers: function() {
    console.log("listPublishers");
    
  },


  search: function(query:string, page:string) {
    console.log(query);
    console.log(page);
  }

});



export default AppRouter;