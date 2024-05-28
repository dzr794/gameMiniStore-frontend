
import { Collection, CollectionFetchOptions } from 'backbone';
import { GameModel } from "../models/gameModel";
import { baseUrl } from '../../../global/vars';


export class GamesCollection extends Collection {
  model = GameModel;
  gameFilter: string;
  filterTitle: string;
  url = `${baseUrl}/games`;

  constructor(models?: Backbone.Model[], options?: any) {
      super(models, options);
      // Initialize your custom attributes here
      this.gameFilter = '';
      this.filterTitle = 'All ';
      this.bindEvents();
  }

  bindEvents() {
      // Listen for changes to the custom attribute 'customAttribute'
      this.on('change:gameFilter', this.handleGameFilterChange, this);
  }

  handleGameFilterChange(model: GameModel, value: any) {
      // Handle the event when 'gameFilter' changes
      console.log('Custom attribute changed:', value);
      // Example: You can trigger other actions here
      this.fetch();
  }

  setGameFilter(value: string) {
      // Set the custom attribute and trigger the change event
      if (value != this.gameFilter) {
        this.gameFilter = value;
        this.trigger('change:gameFilter', this, value);
      }
  }


  // create a fetch using async and await, handle the success and error with logs
  fetch(options?: CollectionFetchOptions|undefined): JQueryXHR {
    return jQuery.ajax({
      url: this.url + this.gameFilter,
      dataType: 'json',
      ...options,
      success: (data, textStatus, jqXHR) => {
        console.log(data);
        this.reset(data);
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.error(errorThrown);
      }
    }) as JQueryXHR;
  }

}



