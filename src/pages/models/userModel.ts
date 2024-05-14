import { Model } from 'backbone';


export class UserModel extends Model {
  defaults() {
    return {
      username: '',
      password: '',
      role: 'normal' 
    };
  }
}

