import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GTABaseLink from './GtaBaseLink';
import RockstarGamesLink from './RockstarGamesLink';
import './Styles.css';

function Home() {
  return (
    <div className='container-home'>
      <Header />
      <div className='content-home'>

        <main className='main-home'>


          <GTABaseLink/>
          <RockstarGamesLink />
        </main>

      </div>
      <Footer/>
    </div>
  );
}

export default Home;