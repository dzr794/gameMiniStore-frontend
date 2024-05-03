import Backbone from 'backbone';
import $ from 'jquery';
import GameModel from '../models/GameModel';

class GameView extends Backbone.View<GameModel> {
    initialize() {
        this.render();
    }

    render() {
        const message: string = this.model.get('message');
        
        this.$el.html(`
        <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">Vapor</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <li class="nav-item">
            <a class="nav-link active" href="store">Store</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="library">Library</a>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Add new
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">New Game</a></li>
              <li><a class="dropdown-item" href="#">New Publisher</a></li>
            </ul>
          </li>

        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <main>
    
    <ul class="list-group" id="songs">
    </ul>
  </main>

  

  <script id="songTemplate" type="text/html">
    <li class="list-group-item"><%= title %> - <%= artist %> (<%= genre %>)</li>
  </script>
  
  
`);
        return this;
    }
}

export default GameView;