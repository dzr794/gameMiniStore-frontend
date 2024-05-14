
import { Collection, CollectionFetchOptions } from 'backbone';
import { GameModel } from "../models/gameModel";
import { baseUrl } from '../../../global/vars';


export class GamesCollection extends Collection {
  model = GameModel;

  url = `${baseUrl}/games/`;
  
  // create a fetch using async and await, handle the success and error with logs
  fetch(options?: CollectionFetchOptions|undefined): JQueryXHR {
    return jQuery.ajax({
      url: this.url,
      dataType: 'json',
      ...options,
      success: (data, textStatus, jqXHR) => {
        this.reset(data);
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.error(errorThrown);
      }
    }) as JQueryXHR;
  }

}



