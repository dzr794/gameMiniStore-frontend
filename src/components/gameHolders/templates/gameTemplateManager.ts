
export let gameTplManager = {
  templates: {
    highlights: "",
    gameCardTall: "",
  }
};

gameTplManager.templates.highlights = [
  '<div class="container">',
    '<div class="highlights-grid">',

      '<% games.forEach(function (game) { %>',
        '<% console.log("single game", game); %>',
        '<%= gameCardTall({gameData: game}) %>',
      '<% }); %>',
    '</div>',
  '</div>',
].join('\n');


gameTplManager.templates.gameCardTall = [
  '<a href="/game/<%= gameData.id %>" class="game game--tall">',
    '<div class="banner" >',
      '<img src="<%= gameData.image %>"',
        'alt="<%= gameData.title %> banner">',
    '</div>',
    '<div class="main">',
      '<div class="title">',
        '<span><%= gameData.title %></span>',
      '</div>',
      '<div class="deal">',
          '<span class="price">$<%= gameData.price %></span>',
      '</div>',
    '</div>',
  '</a>',
].join('\n');

