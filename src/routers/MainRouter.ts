import { createElement } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { HomePage, NotFoundPage, GamesPage, LoginPage, GameDetailsPage, FilteredGamesGrid } from '../pages';


export const router = createBrowserRouter([
  {
    path: "/",
    element: createElement(HomePage),
    errorElement: createElement(NotFoundPage)
  },
  {
    path: "/game/filters/",
    element: createElement(GamesPage),

    children: [
      {
        path: '/game/filters/',
        element: createElement(FilteredGamesGrid)
      },
      {
        path: '/game/filters/price/:price',
        element: createElement(FilteredGamesGrid)
      },
      {
        path: '/game/filters/publisher/:publisher',
        element: createElement(FilteredGamesGrid)
      }
    ]
  },
  {
    path: "/game/:gameId",
    element: createElement(GameDetailsPage)
  },
  {
    path: "/login",
    element: createElement(LoginPage)
  },
  
]);

