import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Article from './Article';

import '../../Styles/layout.css'
import '../../Styles/home.css'
import '../../Styles/responsive.css'

function Home() {
  return (
    <div className='container'>
      <Header />
      <div className='content content-home'>

        <main className='home'>
          <Article/>
        </main>

      </div>
      <Footer/>
    </div>
  );
}

export default Home;