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
        <h1>404 PAGE NOT FOUND</h1>
        <a href="/" class="btn default">Back to home page</a>
      </main>
    `);

    return this;
  }

}