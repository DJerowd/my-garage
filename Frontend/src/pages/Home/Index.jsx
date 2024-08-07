import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Styles.css';


function Home() {
  return (
    <div className='container-home'>
      <Header />
      
      <main className='content-home'><h1>Página Home</h1></main>

      <Footer/>
    </div>
  );
}

export default Home;