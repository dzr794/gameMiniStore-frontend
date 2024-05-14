import { EventsHash, View } from "backbone";

export class AdminPageView extends View{

  initialize() {
    this.$el = $("#app");
    this.render();
  }

  events(): EventsHash {
    return {
      
    };
  }


  render() {
      
    this.$el.html(`
      <header id="header"></header>
      <main>
        ADMIN VIEW
      </main>
    `);

    return this;
  }

}