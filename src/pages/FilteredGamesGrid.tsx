import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { baseUrl } from '../global/vars';
import { CardTypes, GameData } from '../types';
import { CardsGrid } from '../components';

export const FilteredGamesGrid = () => {
  const params = useParams();
  console.log(params);

  const [games, setGames] = useState<GameData[]>([]);
  
  const abortController = new AbortController();
  const signal = abortController.signal;

  const fetchData = async () => {
    let url = `${baseUrl}/games`

    if (params.hasOwnProperty('price')) {
      url = `${baseUrl}/games?price=${params.price}`
    } else if (params.hasOwnProperty('publisher')) {
      url = `${baseUrl}/games?publisher=${params.publisher}`
    }

    try {
      const response = await fetch(url, { signal });
      const data = await response.json();
      setGames(data);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    
    fetchData();

    return () => {
      console.log('cleaning up');
      abortController.abort();
    };
  }, [params]);
  

  return (
    <div id="filtered-games">
       <CardsGrid title="All Games" cardType={CardTypes.WIDE} games={games} />
    </div>
  )
}
