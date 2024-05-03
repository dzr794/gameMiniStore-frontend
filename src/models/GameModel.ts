import Backbone from 'backbone';

interface MyModelAttributes {
    message: string;
}

class GameModel extends Backbone.Model<MyModelAttributes> {
    defaults() {
        return {
            message: "Hello Backbone with TypeScript!"
        }
    }
}

export default GameModel;