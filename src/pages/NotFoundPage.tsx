import { useNavigate } from 'react-router-dom';

import { Header } from '../components'
import { mainHeaderData } from '../data';

export const NotFoundPage = () => {
  let navigate = useNavigate();

  return (
    <>
      <Header buttons={mainHeaderData.buttons}/>
      
      <main className="not-found">
        <h1>404 PAGE NOT FOUND</h1>
        <button onClick={() => navigate(-1)} className="btn default">Go back</button>
        
      </main>
    </>
  )
}
