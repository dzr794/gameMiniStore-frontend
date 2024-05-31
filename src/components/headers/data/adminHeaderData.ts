import { HeaderData } from "../../../types";

export const adminHeaderData:HeaderData = {
  buttons: [
    {
      componentType: 'navDropdown',
      buttonData: {
        name: 'Games',
        links: [
          {
            name: 'New Game',
            url: 'newGame',
          },
          {
            name: 'Edit Game',
            url: 'editGame',
          }
        ]
      }
    }
    
  ],
};

