import IntensityAroma from "../components/IntensityAroma";
import Feeling from "../components/Feeling";
import AromaticFamily from "../components/AromaticFamily";
import { Link, useParams } from "react-router-dom";
import "./tasting.css";
import Navbar from "../components/Navbar";

const Olfactory = () => {
  const params = useParams();

  return (
    <>
      <Navbar />
      <section className="tasting-box">
        <h1>Examen olfactif</h1>
        <IntensityAroma />
        <Feeling />
        <AromaticFamily />
        <div className="tasting-div-link">
          <Link className="link" to={`/${params.id}/visuel`}>
            Précédent
          </Link>
          <Link className="link" to={`/${params.id}/gustatif`}>
            Suivant
          </Link>
        </div>
      </section>
    </>
  );
};

export default Olfactory;
