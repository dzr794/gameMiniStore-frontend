import _ from "underscore";

export let loginTplManager = {
  templates: {
    loginForm: "",
    inputEmail: "",
    inputPassword: "",
    loginButton: ""
  }
};

loginTplManager.templates.loginForm = [
  '<h1><%= subData.formName %></h1>',
  '<div class="alert alert-error" style="display:none;">',
  '</div>',
  '<form class="form-horizontal">',

    '<%= inputEmail({ data: subData.inputEmailData }) %>',
    '<%= inputPassword({ data: subData.inputPasswordData }) %>',
    '<%= loginButton({ data: subData.loginButtonData }) %>',
    
  '</form>',
  '<p><a href="/">Back to home page</a></p>'
].join('\n');

loginTplManager.templates.inputEmail = [
  '<% console.log("wenas?"); %>',
  '<div class="control-group">',
    '<label class="control-label" for="<%= data.id %>"><%= data.name %></label>',
    '<div class="controls">',
      '<input type="text" id="<%= data.id %>" placeholder="<%= data.name %>">',
    '</div>',
  '</div>',
].join('\n');

loginTplManager.templates.inputPassword = [
  '<div class="control-group">',
    '<label class="control-label" for="<%= data.id %>"><%= data.name %></label>',
    '<div class="controls">',
      '<input type="password" id="<%= data.id %>" placeholder="<%= data.name %>">',
    '</div>',
  '</div>',
].join('\n');

loginTplManager.templates.loginButton = [
  '<div class="control-group">',
    '<div class="controls">',
      '<button type="submit" class="btn" id="<%= data.id %>"><%= data.name %></button>',
    '</div>',
  '</div>',
].join('\n');