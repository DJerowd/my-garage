import Header from '../../components/Header';
import './Styles.css';


function Home() {
  return (
    <div className='container-home'>
      <Header />
      
      <div className='content-home'>
        <h1>Página Home</h1>
      </div>
    </div>
  );
}

export default Home;