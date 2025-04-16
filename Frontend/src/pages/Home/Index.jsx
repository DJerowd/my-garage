import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Article from './Article';
import Slide from './Slide';

import '../../Styles/layout.css'
import '../../Styles/home.css'

function Home() {
  return (
    <div className='container'>
      <Header />
      <div className='content'>

        <main className='home'>
          <Article/>
          <Slide/>
        </main>

      </div>
      <Footer/>
    </div>
  );
}

export default Home;