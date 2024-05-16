import _ from 'underscore';
import { Router } from 'backbone';


import { adminRouterFunction, homeRouterFunction, notFoundRouterFunction } from './functions';
import { loginRouterFunction } from './functions/loginRouterFunction';

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
    "*notfound":              "notFound"
  },

  home: homeRouterFunction,

  login: loginRouterFunction,

  adminPage: adminRouterFunction,

  notFound: notFoundRouterFunction,

  search: function(query:string, page:string) {
    console.log(query);
    console.log(page);
  }

});



export default AppRouter;