import { NotFoundPageView } from "../../pages";

export const notFoundRouterFunction = () => {
  const notFoundPageView = new NotFoundPageView();
  notFoundPageView.render();
}
