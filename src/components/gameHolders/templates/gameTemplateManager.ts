
export let gameTplManager = {
  templates: {
    highlights: "",
    gameCardTall: "",
    gameCardWide: "",
    gameCardThin: "",
    gameCardThinAdmin: "",
    allGames: "",
  }
};

gameTplManager.templates.highlights = [
  '<div class="container">',
    '<h1 class="section-title text-white" >Highlighted</h1>',
    '<div class="highlights-grid">',
      '<% games.forEach(function (game) { %>',
        // '<% console.log("single game", game); %>',
        '<%= gameCard({gameData: game}) %>',
      '<% }); %>',
    '</div>',
  '</div>',
].join('\n');

gameTplManager.templates.allGames = [
  '<div class="container">',
    '<h1 class="section-title text-white" >All Games</h1>',
    '<div class="highlights-grid">',
      '<% games.forEach(function (game) { %>',
        // '<% console.log("single game", game); %>',
        '<%= gameCard({gameData: game}) %>',
      '<% }); %>',
    '</div>',
  '</div>',
].join('\n');

gameTplManager.templates.gameCardTall = [
  '<a href="/game/<%= gameData.id %>" class="game gameCardTall text-decoration-none">',
    '<div class="banner" >',
      '<img src="<%= gameData.image %>"',
        'alt="<%= gameData.title %> banner">',
    '</div>',
    '<div class="info">',
      '<div class="title text-white">',
        '<span><%= gameData.title %></span>',
      '</div>',
      '<div class="deal">',
          '<span class="price">$<%= gameData.price %></span>',
      '</div>',
    '</div>',
  '</a>',
].join('\n');

gameTplManager.templates.gameCardWide = [
  '<a href="/game/<%= gameData.id %>" class="game gameCardWide text-decoration-none">',
    '<div class="banner" >',
      '<img src="<%= gameData.image %>"',
        'alt="<%= gameData.title %> banner">',
    '</div>',
    '<div class="info">',
      '<div class="title text-white">',
        '<span><%= gameData.title %></span>',
      '</div>',
      '<div class="deal">',
          '<span class="price">',
          '<% if(gameData.price > 0){ %>',
            '$<%= gameData.price %>',
          '<% }else{ %>',
            'Free to Play',
          '<% } %>',
          '</span>',
      '</div>',
    '</div>',
  '</a>',
].join('\n');



gameTplManager.templates.gameCardThin = [
  '<a href="/game/<%= gameData.id %>" class="game gameCardThin text-decoration-none">',
    '<div class="banner" >',
      '<img src="<%= gameData.image %>"',
        'alt="<%= gameData.title %> banner">',
    '</div>',

    '<div class="info">',
      '<div class="title text-white">',
        '<span><%= gameData.title %></span>',
      '</div>',
      '<div class="deal">',
          '<span class="price">$<%= gameData.price %></span>',
      '</div>',
    '</div>',

  '</a>',
].join('\n');

gameTplManager.templates.gameCardThinAdmin = [
  '<a href="/game/<%= gameData.id %>" class="game gameCardThinAdmin text-decoration-none">',
    '<div class="banner" >',
      '<img src="<%= gameData.image %>"',
        'alt="<%= gameData.title %> banner">',
    '</div>',

    '<div class="info">',
      '<div class="title text-white">',
        '<span><%= gameData.title %></span>',
      '</div>',
      '<div class="deal">',
          '<span class="price">$<%= gameData.price %></span>',
      '</div>',
    '</div>',
    
  '</a>',
].join('\n');