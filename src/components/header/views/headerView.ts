import { View } from 'backbone';
import _ from 'underscore';
import $ from 'jquery'

import { headerTplManager } from "../templates/headerTemplateManager";


class HeaderView extends View {
  initialize() {
    this.$el = $('#header');
    this.render();
  }
  
  render() {

    const subData = {
      storeData: {
        name: 'Store',
        url: 'store'
      },
      libraryData: {
        name: 'Library',
        url: 'library'
      },
      addNewData: {
        dropdownName: 'Add game',
        links: [
          {
            url: 'newGame',
            title: 'New Game'
          },
          {
            url: 'newPublisher',
            title: 'New Publisher'
          }
        ]
      }
    };

    // const headerTemplate = _.template(headerTplManager.templates.header);
    const navLinkTemplate = _.template(headerTplManager.templates.navLink);
    const navDropdownTemplate = _.template(headerTplManager.templates.navDropdown);
    const searchFormTemplate = _.template(headerTplManager.templates.searchForm);

    const headerTemplate = _.template(headerTplManager.templates.header);


    this.$el.html(
      headerTemplate({
        navLink: navLinkTemplate, 
        navDropdown: navDropdownTemplate,
        searchForm: searchFormTemplate,
        subData: subData
      })
    );
    
    return this;
  }
}


export default HeaderView;