import { HeaderView, adminHeaderData } from "../../components/headers";
import { AdminPageView } from "../../pages";

export const adminRouterFunction = () => {
    // console.log("admin");
    
    // TODO: Check if user is authenticated as admin
    // TODO: revisar si existe el JWT

    const adminPageView = new AdminPageView();
    adminPageView.render();

    const adminHeaderView = new HeaderView();
    adminHeaderView.render( adminHeaderData );

}
