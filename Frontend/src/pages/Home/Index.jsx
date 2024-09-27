import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Article from './Article';
import Slide from './Slide';
import './Styles.css';

function Home() {
  return (
    <div className='container-home'>
      <Header />
      <div className='content-home'>

        <main className='main-home'>
          <Article/>
          <Slide/>
        </main>

      </div>
      <Footer/>
    </div>
  );
}

export default Home;