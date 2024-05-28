import { template } from "underscore";
import { formsTplManager } from "../templates";

const filterDropdownWrapperTemplate = template(formsTplManager.templates.filterDropdownWrapper);
const filterDropdownButtonTemplate = template(formsTplManager.templates.filterDropdownButton);

export const gameFiltersData = {
  title: "Game filters",
  filters: [
    {
      template: filterDropdownWrapperTemplate,
      data: {
        title: 'Price',
        filterId: 'price-filters',
        buttons:[
          {
            template: filterDropdownButtonTemplate,
            data: {
              filterName: 'Free to Play',
              url: '?price=0'
            }
          },
          {
            template: filterDropdownButtonTemplate,
            data: {
              filterName: 'Bellow $25',
              url: '?price=25'
            }
          },
          {
            template: filterDropdownButtonTemplate,
            data: {
              filterName: 'Bellow $60',
              url: '?price=60'
            }
          }
        ]
      }
    },
    
    // TODO: get all publisher from API
    {
      template: filterDropdownWrapperTemplate,
      data: {
        title: 'Publishers',
        buttons:[
          {
            template: filterDropdownButtonTemplate,
            data: {
              filterName: 'Annapurna Interactive',
              url: '?publisher=1'
            },
          },
          {
            template: filterDropdownButtonTemplate,
            data: {
              filterName: 'Psyonix',
              url: '?publisher=2'
            },
          },
          {
            template: filterDropdownButtonTemplate,
            data: {
              filterName: 'Sony Interactive Entertainment',
              url: '?publisher=3'
            },
          },
          {
            template: filterDropdownButtonTemplate,
            data: {
              filterName: 'Electronic Arts',
              url: '?publisher=4'
            },
          },
          {
            template: filterDropdownButtonTemplate,
            data: {
              filterName: 'Capcom',
              url: '?publisher=5'
            },
          },
          {
            template: filterDropdownButtonTemplate,
            data: {
              filterName: 'Bandai Namco Entertainment',
              url: '?publisher=6'
            },
          },
          {
            template: filterDropdownButtonTemplate,
            data: {
              filterName: 'Larian Studios',
              url: '?publisher=7'
            },
          },

        ]
      }
    }

  ]
}