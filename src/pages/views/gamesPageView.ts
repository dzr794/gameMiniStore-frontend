import { View } from 'backbone';
import $ from 'jquery';

export class GamesPageView extends View {
    initialize() {
      this.$el = $("#app");
      // this.render();
    }


    render() {
        // const message: string|undefined = this.model.get('message');
        
        this.$el.html(`
              <header id="header"></header>
              
              <main>

                <section id="filter-games-section" class="section container">
                  <div id="search-panel">SEARCH</div>
                  <div id="filtered-games">FILTERED GAMES</div>
                </section>
                
              </main>
        `);

        return this;
    }
}
