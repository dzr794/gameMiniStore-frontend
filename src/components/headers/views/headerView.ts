import { View } from 'backbone';
import _ from 'underscore';
import $ from 'jquery'

import { headerTplManager } from "../templates/headerTemplateManager";


export class HeaderView extends View {
  initialize() {
    this.$el = $('#header');
  }
  
  render( subData ) {


    // const headerTemplate = _.template(headerTplManager.templates.header);
    const navLinkTemplate = _.template(headerTplManager.templates.navLink);
    const navDropdownTemplate = _.template(headerTplManager.templates.navDropdown);
    

    const headerTemplate = _.template(headerTplManager.templates.header);


    this.$el.html(
      headerTemplate({
        navLink: navLinkTemplate, 
        navDropdown: navDropdownTemplate,
        
        subData: subData
      })
    );
    
    return this;
  }
}
