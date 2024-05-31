import { mainHeaderData } from '../components/headers';
import { Header } from '../components/headers/Header';

export const Home = () => {
  return (
    <>
      <Header buttons={mainHeaderData.buttons}/>
                
      <main>
        <section id="highlighted" className="section">highlighted</section>
        <section id="all-games" className="section">all-games</section>
        <div id="trending">trending</div>
      </main>
    </>
  )
}
