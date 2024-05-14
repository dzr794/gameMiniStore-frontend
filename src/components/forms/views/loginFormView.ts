import { EventsHash, View } from 'backbone';
import _ from 'underscore';
import $ from 'jquery'

import { loginTplManager } from "../templates/loginTemplateManager";
import { baseUrl } from '../../../global/vars';


export class LoginFormView extends View {
  initialize() {
    this.$el = $('#login-form');
    this.render();
  }

  events(): EventsHash {
    return {
      "submit": "login"
    };
  }

  login( event: any ): void {
    event.preventDefault(); // Don't let this button submit the form
      $('.alert-error').hide(); // Hide any errors on a new submit
      var url = `${baseUrl}/games/`;
      console.log('Loggin in... ');
      var formValues = {
        email: $('#inputEmail').val(),
        password: $('#inputPassword').val()
      };

    $.ajax({
        url:url,
        type:'POST',
        dataType:"json",
        data: formValues,
        success:function (data) {
          console.log(["Login request details: ", data]);
          
          if(data.error) {  // If there is an error, show the error messages
              $('.alert-error').text(data.error.text).show();
          }
          else { // If not, send them back to the home page
              window.location.replace('#');
          }
        }
    });
  }
  
  render() {

    const subData = {
      formName: "Login",
      inputEmailData: {
        id: "inputEmail",
        name: "Email"
      },
      inputPasswordData: {
        id: "inputPassword",
        name: "Password"
      },
      loginButtonData: {
        id: "loginButton",
        name: "Button"
      },
    };

    const inputEmailTemplate = _.template(loginTplManager.templates.inputEmail);
    const inputPasswordTemplate = _.template(loginTplManager.templates.inputPassword);
    const loginButtonTemplate = _.template(loginTplManager.templates.loginButton);

    const loginFormTemplate = _.template(loginTplManager.templates.loginForm);


    this.$el.html(
      loginFormTemplate({
        inputEmail: inputEmailTemplate, 
        inputPassword: inputPasswordTemplate,
        loginButton: loginButtonTemplate,
        subData: subData
      })
    );
    
    return this;
  }
}
