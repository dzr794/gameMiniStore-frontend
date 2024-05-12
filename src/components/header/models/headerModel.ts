import { Model } from 'backbone';



class HeaderModel extends Model {
    
    defaults() {
        return {
            message: "Hello Backbone with TypeScript!"
        }
    }
}

export default HeaderModel;