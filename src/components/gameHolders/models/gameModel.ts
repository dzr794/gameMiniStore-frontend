
import { Model } from 'backbone';

class GameModel extends Model {
    
    defaults() {
        return {
          id: null,
          title: "",
          price: null,
          publisher: "",
          ESRB: "",
          // genres: ""
        }
    }
}

export default GameModel;
