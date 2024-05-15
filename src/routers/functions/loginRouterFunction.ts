import { LoginFormView, loginFormData } from "../../components/forms";
import { LoginPageView } from "../../pages";


export const loginRouterFunction = () => {
  const loginPageView = new LoginPageView();
  loginPageView.render();

  const loginFormView = new LoginFormView();
  loginFormView.render( loginFormData );
}
