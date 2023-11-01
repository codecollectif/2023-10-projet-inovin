import ColorWine from "../components/ColorWine";
import ShineWine from "../components/ShineWine";
import IntensityColor from "../components/IntensityColor";
import TearsFluidity from "../components/TearsFluidity";
import { Link, useParams } from "react-router-dom";
import "./tasting.css";
import Navbar from "../components/Navbar";

const Visual = () => {
  const params = useParams();

  return (
    <>
      <Navbar />
      <section className="tasting-box">
        <h1>Examen visuel</h1>
        <ColorWine />
        <ShineWine />
        <IntensityColor />
        <TearsFluidity />
        <div className="tasting-div-link">
          <Link className="link" to={`/${params.id}/olfactif`}>
            Suivant
          </Link>
        </div>
      </section>
    </>
  );
};

export default Visual;
