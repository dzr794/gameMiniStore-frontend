import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { Header, mainHeaderData } from '../components';

export const GameDetailsPage = () => {
  const {gameId} =  useParams<{gameId:string}>();
  let navigate = useNavigate();

  return (
    <>
      <Header buttons={mainHeaderData.buttons}/>
                
      <main>
        
        Game details of game with ID: {gameId}
        <button onClick={() => navigate(-1)} className="btn default">Go back</button>
      </main>
    </>
  )
}
