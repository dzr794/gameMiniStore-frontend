import _ from "underscore";

export let headerTplManager = {
  templates: {
    header: "",
    navLink: "",
    searchForm: "",
    navDropdown: ""
  }
};

headerTplManager.templates.header = [
  '<nav class="navbar navbar-expand-lg">',
    '<div class="container-fluid">',

      '<a class="navbar-brand" href="/">Vapor</a>',

      '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"',
      '  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">',
      '  <span class="navbar-toggler-icon"></span>',
      '</button>',

      '<div class="collapse navbar-collapse" id="navbarSupportedContent">',
        '<ul class="navbar-nav me-auto mb-2 mb-lg-0">',
          
          '<%= navLink({linkData: subData.storeData}) %>',
          '<%= navLink({linkData: subData.libraryData}) %>',
          
          '<%= navDropdown({dropdownData: subData.addNewData}) %>',

        '</ul>',

        '<%= searchForm({searchFormData: subData.searchFormData}) %>',
        
      '</div>',
    '</div>',
  '</nav>'
].join('\n');

headerTplManager.templates.navDropdown = [
  '<li class="nav-item dropdown">',
    '<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">',
      '<%= dropdownData.dropdownName %>',
    '</a>',
    '<ul class="dropdown-menu">',
      '<% dropdownData.links.forEach(function (link) { %>',
        '<li><a class="dropdown-item" href="<%= link.url %>"><%= link.title %></a></li>',
      '<% }); %>',
    '</ul>',
  '</li>'
].join('\n');

headerTplManager.templates.navLink = [
  '<li class="nav-item">',
    '<a class="nav-link" href="<%= linkData.url %>">',
      '<%= linkData.name %>',
    '</a>',
  '</li>'
].join('\n');

headerTplManager.templates.searchForm = [
  '<form class="d-flex" role="search">',
    '<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">',
    '<button class="btn btn-outline-success" type="submit">Search</button>',
  '</form>'
].join('\n');