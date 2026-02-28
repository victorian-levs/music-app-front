import { createHistoryRouter, createRoute, createRouterControls } from 'atomic-router';
import { sample } from 'effector';
import { createBrowserHistory } from 'history';
import { appStarted } from '@/shared/config/init';

/* Обьявляем константу с роутами которые будем использовать во всем приложении */
export const routes = {
  home: createRoute(),
  notFound: createRoute()
};

/* Создаем элементы управления, историю роутера */
export const controls = createRouterControls();
export const router = createHistoryRouter({
  routes: [
    {
      path: '/',
      route: routes.home
    }
  ],
  notFoundRoute: routes.notFound,
  controls
});

/* Создаем объект history при инициализации приложения */
sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: router.setHistory
});
