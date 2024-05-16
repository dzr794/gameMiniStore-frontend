import { LoginFormModel, LoginFormView, loginFormData } from "../../components/forms";
import { LoginPageView } from "../../pages";


export const loginRouterFunction = () => {
  const loginPageView = new LoginPageView();
  loginPageView.render();

  const loginFormModel = new LoginFormModel({title: "Login"});
  const loginFormView = new LoginFormView( { model: loginFormModel } );
  loginFormView.render( loginFormData );
}
