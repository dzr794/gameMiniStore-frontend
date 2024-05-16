import _ from "underscore";

export let formsTplManager = {
  templates: {
    loginForm: "",
    inputEmail: "",
    inputPassword: "",
    loginButton: ""
  }
};

formsTplManager.templates.loginForm = [
  '<h1><%= title %></h1>',
  '<div class="alert alert-error" style="display:none;">',
  '</div>',
  '<form class="form-horizontal">',

    '<%= inputEmail({ data: subData.inputEmailData }) %>',
    '<%= inputPassword({ data: subData.inputPasswordData }) %>',
    '<%= loginButton({ data: subData.loginButtonData }) %>',
    
  '</form>',
  '<a href="/" class="btn default">Back to home page</a>'
].join('\n');

formsTplManager.templates.inputEmail = [
  '<div class="control-group">',
    '<label class="control-label" for="<%= data.id %>"><%= data.name %></label>',
    '<div class="controls">',
      '<input type="text" id="<%= data.id %>" placeholder="<%= data.name %>">',
    '</div>',
  '</div>',
].join('\n');

formsTplManager.templates.inputPassword = [
  '<div class="control-group">',
    '<label class="control-label" for="<%= data.id %>"><%= data.name %></label>',
    '<div class="controls">',
      '<input type="password" id="<%= data.id %>" placeholder="<%= data.name %>">',
    '</div>',
  '</div>',
].join('\n');

formsTplManager.templates.loginButton = [
  '<div class="control-group">',
    '<div class="controls">',
      '<button type="submit" class="btn" id="<%= data.id %>"><%= data.name %></button>',
    '</div>',
  '</div>',
].join('\n');