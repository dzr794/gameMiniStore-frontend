import { CollectionFetchOptions, Router } from 'backbone';
import { 
         HomeModel, HomeView, 
         LoginView, AdminPageView, UserModel
} from '../pages';
import { HeaderView , HeaderModel } from '../components/headers/';
import { 
         HighlightedGamesView, HighlightedGamesCollection,
         GamesView, GamesCollection
       } from '../components/gameHolders/';
import { LoginFormView } from "../components/forms";

// Tell jQuery to watch for any 401 or 403 errors and handle them appropriately
$.ajaxSetup({
    statusCode: {
        401: function(){
            // Redirec the to the login page.
            window.location.replace('/login');
         
        },
        403: function() {
            // 403 -- Access denied
            window.location.replace('/home');
        }
    }
});

const AppRouter = Router.extend({

  routes: {
    "":                       "home",
    "home":                   "home",
    "login":                  "login",
    "dashboard":              "adminPage",
    "games":                  "listGames",
    "games/highlighted":      "highlightedGames",
    "publisher":              "listPublishers",
    "search/:query":          "search",
    "search/:query/p:page":   "search",
  },

  home: function() {
    new HomeView( {el: '#container', model: new HomeModel} );

    new HeaderView( {el: '#header', model: new HeaderModel} );
 
    const highlightedGamesCollection = new HighlightedGamesCollection();

    highlightedGamesCollection.fetch({ method: 'GET' })
      .then((response: JQueryXHR) => {
        // console.log({response});
        new HighlightedGamesView( {el: '#highlighted', collection: highlightedGamesCollection, games: response } );
      })
      .catch((error: Error) => {
        console.error(error);
      });


    const gamesCollection = new GamesCollection();

    gamesCollection.fetch({ method: 'GET' })
      .then((response: JQueryXHR) => {
        // console.log({response});
        new GamesView( {el: '#all-games', collection: gamesCollection, games: response } );
      })
      .catch((error: Error) => {
        console.error(error);
      });
  },

  login: function() {
    new LoginView();
    
    new LoginFormView();

  },

  adminPage: function() {
    
    // TODO: Check if user is authenticated as admin
    // TODO: revisar si existe el JWT

    new AdminPageView();
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