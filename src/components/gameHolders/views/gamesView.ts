import { View } from 'backbone';
import _ from 'underscore';

import { GamesCollection } from "../collections/gamesCollection";
import { gameTplManager } from "../templates/gameTemplateManager";

export class GamesView extends View {


  
  initialize() {
    this.$el = $("#");

    this.collection = new GamesCollection();
    this.listenTo(this.collection, "reset", this.render);
    this.collection.fetch();

    this.render();
  }

  render() {
    const gamesJSON = this.collection.toJSON();
    
    if (gamesJSON.length < 1) return;
    
    const gameCardTallTemplate = _.template( gameTplManager.templates.gameCardTall );
    

    const highlightsTemplate = _.template( gameTplManager.templates.highlights );

    console.log("THE GAMES:",this.collection.toJSON());

    this.$el.html(highlightsTemplate({ 
      gameCardTall: gameCardTallTemplate,
      games: this.collection.toJSON() 
    }));

    return this;
  }

}



