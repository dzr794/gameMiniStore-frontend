import _ from "underscore";

export let formsTplManager = {
  templates: {
    loginForm: "",
    inputEmail: "",
    inputPassword: "",
    loginButton: "",
    gameFilters: "",
    filterDropdownWrapper: "",
    filterDropdownButton: "",
  }
};

formsTplManager.templates.loginForm = [
  '<h1><%= title %></h1>',
  '<div class="alert alert-error" style="display:none;">',
  '</div>',
  '<form class="form">',

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


formsTplManager.templates.gameFilters = [
  '<div class="game-filter-wrapper">',
    '<% console.log(this) %>',
    '<h3><%= subData.title %></h3>',
    '<% subData.filters.forEach(function (filter) { %>',
      '<%= filter.template({ data: filter.data }) %>',
    '<% }); %>',
  '</div>',
].join('\n');


formsTplManager.templates.filterDropdownWrapper = [
'<div class="filter-dropdown">',

  '<button class="filter-dropdown-btn show" data-activate-dropdown="<%= data.filterId %>">',
    '<span><%= data.title %></span>',
    '<img class="chev" src="/src/assets/img/chev-down.svg" alt="">',
  '</button>',

  '<div class="filters-btn-wrapper" data-filter-dropdown="<%= data.filterId %>">',

    '<% data.buttons.forEach(function (button) { %>',
        '<%= button.template({data: button.data}) %>',
    '<% }); %>',

  '</div>',
'</div>',
].join('\n');

formsTplManager.templates.filterDropdownButton = [
  '<button data-url="<%= data.url %>" type="button" class="filter-btn">',
    '<span><%= data.filterName %></span> ',
    '<img class="chev" src="/src/assets/img/check_mark_white.svg" alt="">',
  '</button data-url="">',
].join('\n');

