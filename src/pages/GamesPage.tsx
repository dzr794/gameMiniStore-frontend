import { useEffect, useState } from "react";

import { GameFilters, Header, mainHeaderData, CardsGrid } from "../components"
import { gameFiltersData } from '../data';
import { CardTypes, GameData } from "../types";
import { baseUrl } from "../global/vars";
import { Outlet } from "react-router-dom";

export const GamesPage = () => {
  const {title, filters} = gameFiltersData;
  const [games, setGames] = useState<GameData[]>([]);

  // TODO: add redux and change filters with the buttons

  useEffect( () => {
    
    const url = `${baseUrl}/games`;
    fetch(url).then(
      (resp) => {
        resp.json().then( 
          (data:any) => {
            setGames(data);
            // console.log({games});
          }
        ).catch(
          (err) => console.log(err)
        );
      }
    ).catch(
      (err) => console.log(err)
    );
  
    // return () => {
    //   console.log('cleaning up');
    // }
  }, []);

  return (
    <>
      <Header buttons={mainHeaderData.buttons}/>

      <main>

        <section id="filter-games-section" className="section container">
          <div id="filters-panel">
            <GameFilters title={title} filters={filters} />
          </div>
          
          <Outlet/>
          
        </section>
        
      </main>
    </>
  )
}
