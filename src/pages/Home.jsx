import DataCepage from "../components/DataCepage";
import Navbar from "../components/Navbar";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <h1 className="home-title">Affinez vos goûts</h1>
      <div className="home-data">
        <DataCepage />
      </div>
      <div className="home-div-btn">
        <button type="button" className="home-btn">
          Passer à la page suivante
        </button>
      </div>
    </div>
  );
}

export default Home;
