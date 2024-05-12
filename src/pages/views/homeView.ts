import { View } from 'backbone';
import $ from 'jquery';


import HomeModel from '../models/HomeModel';


class HomeView extends View<HomeModel> {
    initialize() {
      this.$el = $("#app");
      this.render();
    }


    render() {
        // const message: string|undefined = this.model.get('message');
        
        this.$el.html(`
              <header id="header"></header>
              
              <main>

                <section id="highlighted">
                </section>

                <div id="trending"></div>
              </main>
        `);

        return this;
    }
}

export default HomeView;