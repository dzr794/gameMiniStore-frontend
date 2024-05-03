import Backbone, { Router } from 'backbone';

const GameRouter = Backbone.Router.extend({

  routes: {
    "/":                 "listGames",    // #help
    "search/:query":        "search",  
    "search/:query/p:page": "search"   
  },

  listGames: function() {
    console.log("listing games");
  },

  search: function(query:string, page:string) {
    console.log(query);
    console.log(page);
  }

});

new GameRouter();

Backbone.history.start({pushState: true});


export default GameRouter;