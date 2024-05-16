
import { Model } from 'backbone';

export class LoginFormModel extends Model {
    
  defaults() {
    return {
      title: "Login",
      user: "",
      password: "",
    }
  }
}
