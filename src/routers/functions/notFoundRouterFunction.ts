import { HeaderModel, HeaderView, mainHeaderData } from "../../components/headers";
import { NotFoundPageView } from "../../pages";

export const notFoundRouterFunction = () => {
  const notFoundPageView = new NotFoundPageView();
  notFoundPageView.render();

  const headerView = new HeaderView( {el: '#header', model: new HeaderModel} );
  headerView.render( mainHeaderData );
}
