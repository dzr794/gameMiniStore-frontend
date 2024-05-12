
import { Collection, CollectionFetchOptions } from 'backbone';
import GameModel from "../models/gameModel";


const baseUrl = "http://localhost:3001";
export class HighlightedGamesCollection extends Collection {
  model = GameModel;


  url = `${baseUrl}/games/highlighted`;
  
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


/*

const collection = new HighlightedGamesCollection();

const fetchOptions: CollectionFetchOptions = {

  data: {
    // Your data here
  },
  method: 'GET',
  headers: {
    // Your headers here
  },
};

collection.fetch(fetchOptions)
  .then((response: JQueryXHR) => {
    // Handle the successful response here
    console.log(response);
  })
  .catch((error: Error) => {
    // Handle the error here
    console.error(error);
  });

*/
  


