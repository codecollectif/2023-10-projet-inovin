import WineList from "../components/WineList";
import Navbar from "../components/Navbar";
import "./home.css";

function Home() {
  return (
    <main className="home">
      <Navbar />
      <h1 className="home-title">Affinez vos goûts</h1>
      <div className="home-data">
        <WineList />
      </div>
      <div className="home-div-btn">
        <button type="button" className="home-btn">
          Passer à la page suivante
        </button>
      </div>
    </main>
  );
}

export default Home;
