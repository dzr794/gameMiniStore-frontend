import $ from 'jquery';
import GameModel from './models/GameModel';
import MyView from './views/gameView';

$(document).ready(function() {
    const gameModel = new GameModel();
    const myView = new MyView({ el: '#app', model: gameModel });
});
