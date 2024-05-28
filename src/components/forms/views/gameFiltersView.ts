import { EventsHash, View } from 'backbone';
import _ from 'underscore';
import $ from 'jquery'

import { formsTplManager } from "../templates/";
import { GameFiltersFormModel } from '../models';


export class GameFiltersView extends View<GameFiltersFormModel> {
    
  initialize() {
    this.$el = $('#filters-panel');
  }

  events(): EventsHash {
    return {
      "click .filter-dropdown-btn": "handleToggleDropdown",
      'click .filter-btn': 'handleFilterButtonClick',
    };
  }

  handleToggleDropdown(event: JQuery.Event) {
    
    const dropdownButton = $(event.currentTarget);
    const chev = dropdownButton.find(".chev");
    const dropdownMenu = dropdownButton.siblings('.filters-btn-wrapper');
    
    
    chev.toggleClass("open");
    dropdownMenu.slideToggle( "0.2s" );
    
  }

  handleFilterButtonClick(event: JQuery.Event) {
        
    const filterButton = $(event.currentTarget);
    $('.filter-btn').removeClass("is-selected");
    filterButton.addClass("is-selected");
    const buttonUrl = filterButton.data("url");
    
    // console.log(this.collection.gameFilter);
    this.collection.setGameFilter(buttonUrl);
    // console.log(this.collection.gameFilter);
    
    
    
  }

  render( subData:any ) {

    const gameFiltersTemplate = _.template(formsTplManager.templates.gameFilters);
    
    this.$el.html(
      gameFiltersTemplate({
        subData: subData
      })
    );
    
    return this;
  }
}
