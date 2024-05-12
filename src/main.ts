
import { history } from 'backbone';

import AppRouter from './routers/GameStoreRouter';

const appRouter = new AppRouter();
history.start({pushState: true});

