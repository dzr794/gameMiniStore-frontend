import { View } from 'backbone';
import _ from 'underscore';

import { HighlightedGamesCollection } from "../collections/highlightedGamesCollection";
import { gameTplManager } from "../templates/gameTemplateManager";

export class HighlightedGamesView extends View {

  initialize() {
    this.$el = $("#highlighted");

    this.collection = new HighlightedGamesCollection();
    this.listenTo(this.collection, "reset", this.render);
    this.collection.fetch();

    this.render();
  }

  render(): this {
    const gamesJSON = this.collection.toJSON();
    
    if (gamesJSON.length < 1) return;
    
    const gameCardTallTemplate = _.template( gameTplManager.templates.gameCardTall );
    const highlightsTemplate = _.template( gameTplManager.templates.highlights );

    // console.log("Highlighted games:",this.collection.toJSON());

    this.$el.html(highlightsTemplate({ 
      gameCardTemplate: gameCardTallTemplate,
      games: this.collection.toJSON()
      
    }));

    return this;
  }

}



