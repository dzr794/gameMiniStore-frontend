import { View } from 'backbone';
import _ from 'underscore';

import { GamesCollection } from "../collections/gamesCollection";
import { gameTplManager } from "../templates/gameTemplateManager";

export class GamesView extends View {
    
  initialize() {

    this.collection = new GamesCollection();
    this.listenTo(this.collection, "reset", this.render);
    this.collection.fetch();
  }

  render(): this {

    const gamesJSON = this.collection.toJSON();
    
    if (gamesJSON.length < 1) return this;
    
    const gameCardWideTemplate = _.template( gameTplManager.templates.gameCardWide );
    const allGamesTemplate = _.template( gameTplManager.templates.allGames );

    // console.log("All games:",this.collection.toJSON());

    this.$el.html(
      allGamesTemplate({
        gameCardTemplate: gameCardWideTemplate,
        games: gamesJSON
      })
    );

    return this;
  }

}



