import { EventsHash, View } from "backbone";

export class NotFoundPageView extends View{

  initialize() {
    this.$el = $("#app");
    // this.render();
  }

  events(): EventsHash {
    return {
      
    };
  }


  render() {
      
    this.$el.html(`
      <header id="header"></header>
      <main class="not-found">
        404 PAGE NOT FOUND
      </main>
    `);

    return this;
  }

}