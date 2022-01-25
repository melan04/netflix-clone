import './App.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './config/Requests';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Programmes originaux Netflix"
        fetchUrl={requests.fetchNetflixOriginals} isPoster= {true}/>
      <Row
        title="Tendances actuelles"
        fetchUrl={requests.fetchTrending}
      />
      <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} />
      <Row title="Films d'action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Films d'horreur" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comédies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentaires" fetchUrl={requests.fetchDocumentaries} />
      {/*video*/}
      {/*quick view*/}

      <Footer />
    </div>
  );
}

export default App;
