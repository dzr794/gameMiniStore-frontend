import { EventsHash, View } from "backbone";
import { baseUrl } from "../../global/vars";
import { loginTplManager } from "../../components/forms/templates";
import _ from "underscore";


export class LoginView extends View{

  initialize() {
    this.$el = $("#app");
    this.render();
  }

  render() {
    // const message: string|undefined = this.model.get('message');
    
    this.$el.html(`
      <main class="login-page">
        <section id="login-form"></section>
        <div class="absolut-center login-background bg-img" ></div>
      </main>
    `);

    return this;
  }

}
