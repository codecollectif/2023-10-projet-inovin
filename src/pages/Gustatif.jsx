import Flavor from "../components/Flavor";
import Framework from "../components/Framework";
import AromaticPersistence from "../components/AromaticPersistence";
import { Link, useParams } from "react-router-dom";
import "./tasting.css";
import Navbar from "../components/Navbar";

const Gustatif = () => {
  const params = useParams();
  return (
    <>
      <Navbar />
      <section className="tasting-box" >
        <h1>Examen gustatif</h1>
        <Flavor />
        <Framework />
        <AromaticPersistence />
        <div className="tasting-div-link">
          <Link className="link" to={`/${params.id}/olfactif`}>
            Précédent
          </Link>
          <Link className="link" to={`/${params.id}/recapitulatif`}>
            Valider
          </Link>
        </div>
      </section>
    </>
  );
};

export default Gustatif;
