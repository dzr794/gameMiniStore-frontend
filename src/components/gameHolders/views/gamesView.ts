import { View } from 'backbone';
import _ from 'underscore';

import { GamesCollection } from "../collections/gamesCollection";
import { gameTplManager } from "../templates/gameTemplateManager";
import { GameModel } from '../models';

export class GamesView extends View {
  

  initialize( { templateString } ) {
    this.templateString = templateString;
    this.listenTo(this.collection, "reset", this.render);
  }

  events() {
      return {
          'click .filter-btn': 'handleFilterButtonClick'
      };
  }

  handleFilterButtonClick(event: JQuery.Event) {
    console.log("GamesView");
    
    const filterButton = $(event.currentTarget);
    console.log(filterButton);
    
  }

  render() {
    
    const gamesJSON = this.collection.toJSON();
    
    if (gamesJSON.length < 1) return this;
       

    const gameCardTemplate = _.template( this.templateString );
    const allGamesTemplate = _.template( gameTplManager.templates.allGames );

    // console.log("All games:",this.collection.toJSON());

    this.$el.html(
      allGamesTemplate({
        gameCard: gameCardTemplate,
        games: gamesJSON
      })
    );

    return this;
  }

}



