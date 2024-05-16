import _ from "underscore";
import { headerTplManager } from "../templates";

const navLinkTemplate = _.template(headerTplManager.templates.navLink);
const navDropdownTemplate = _.template(headerTplManager.templates.navDropdown);

export const mainHeaderData = {
  buttons: [
    {
      template: navLinkTemplate,
      buttonData: {
        name: 'Store',
        url: 'store'
      }
    },
    {
      template: navLinkTemplate,
      buttonData: {
        name: 'Library',
        url: 'library'
      }
    },
    
  ]
};