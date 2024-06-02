
export const gameFiltersData = {
  title: "Game filters",
  filters: [
    {
      title: 'Price',
      filterId: 'price-filters',
      buttons:[
        {
          name: 'Free to Play',
          url: '/game/filters/price/0'
        },
        {
          name: 'Bellow $25',
          url: '/game/filters/price/25'
        },
        {
          name: 'Bellow $60',
          url: '/game/filters/price/60'
        }
      ]
      
    },
    
    // TODO: get all publisher from API
    {
      title: 'Publishers',
      filterId: 'publisher-filters',
      buttons:[
        {
          name: 'Annapurna Interactive',
          url: '/game/filters/publisher/1'
        },
        {
          name: 'Psyonix',
          url: '/game/filters/publisher/2'
        },
        {
          name: 'Sony Interactive Entertainment',
          url: '/game/filters/publisher/3'
        },
        {
          name: 'Electronic Arts',
          url: '/game/filters/publisher/4'
        },
        {
          name: 'Capcom',
          url: '/game/filters/publisher/5'
        },
        {
          name: 'Bandai Namco Entertainment',
          url: '/game/filters/publisher/6'
        },
        {
          name: 'Larian Studios',
          url: '/game/filters/publisher/7'
        },

      ]
      
    }

  ]
}