import _ from "underscore";
import { headerTplManager } from "../templates";

const navLinkTemplate = _.template(headerTplManager.templates.navLink);
const navDropdownTemplate = _.template(headerTplManager.templates.navDropdown);

export const adminHeaderData = {
  buttons: [
    {
      template: navDropdownTemplate,
      buttonData: {
        dropdownName: 'Games',
        links: [
          {
            url: 'newGame',
            title: 'New Game'
          },
          {
            url: 'editGame',
            title: 'Edit Game'
          }
        ]
      }
    },
    {
      template: navDropdownTemplate,
      buttonData: {
        dropdownName: 'Games',
        links: [
          {
            url: 'newPublisher',
            title: 'New Publisher'
          },
          {
            url: 'editPublisher',
            title: 'Edit Publisher'
          }
        ]
      }
    },
  ]
};