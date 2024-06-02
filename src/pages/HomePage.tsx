import { useEffect, useState } from 'react';
import { mainHeaderData } from "../data";
import { Header, CardsGrid } from '../components';
import { baseUrl } from '../global/vars';
import { GameData, CardTypes } from '../types';

export const HomePage = () => {

  const [games, setGames] = useState<GameData[]>([]);
  const [highlightedGames, setHighlightedGames] = useState<GameData[]>([]);

  
  useEffect( () => {
    const highlightedUrl = `${baseUrl}/games/highlighted`;
    fetch(highlightedUrl).then(
      (resp) => {
        resp.json().then( 
          (data:any) => {
            setHighlightedGames(data);
            // console.log({games});
          }
        ).catch(
          (err) => console.log(err)
        );
      }
    ).catch(
      (err) => console.log(err)
    );

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
        <section id="highlighted" className="section">
          <CardsGrid title="Highlighted" cardType={CardTypes.TALL} games={highlightedGames} />
        </section>

        <section id="all-games" className="section">
          <CardsGrid title="All Games" cardType={CardTypes.WIDE} games={games} />
        </section>

      </main>
    </>
  )
}
