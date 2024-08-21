import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GTABaseLink from './GtaBaseLink';
import RockstarGamesLink from './RockstarGamesLink';
import './Styles.css';

function Home() {
  return (
    <div className='container-home'>
      <Header />
      
      <main className='content-home'>
        <GTABaseLink/>
        <RockstarGamesLink />
      </main>

      <Footer/>
    </div>
  );
}

export default Home;