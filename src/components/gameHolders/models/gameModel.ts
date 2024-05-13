
import { Model } from 'backbone';

export class GameModel extends Model {
    
    defaults() {
        return {
          id: null,
          title: "",
          price: null,
          publisher: "",
          ESRB: "",
          image: "",
          // genres: ""
        }
    }
}
