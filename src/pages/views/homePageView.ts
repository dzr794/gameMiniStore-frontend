import { View } from 'backbone';
import $ from 'jquery';

import { HomeModel } from '../models';

export class HomePageView extends View<HomeModel> {
    initialize() {
      this.$el = $("#app");
      // this.render();
    }


    render() {
        // const message: string|undefined = this.model.get('message');
        
        this.$el.html(`
              <header id="header"></header>
              
              <main>

                <section id="highlighted" class="section"></section>

                <section id="all-games" class="section"></section>

                <div id="trending"></div>
              </main>
        `);

        return this;
    }
}
