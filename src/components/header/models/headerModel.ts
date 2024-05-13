import { Model } from 'backbone';



export class HeaderModel extends Model {
    
    defaults() {
        return {
            message: "Hello Backbone with TypeScript!"
        }
    }
}
