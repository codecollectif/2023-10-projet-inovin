import IntensityAroma from "../components/IntensityAroma";
import Feeling from "../components/Feeling";
import AromaticFamily from "../components/AromaticFamily";
import { Link, useParams } from "react-router-dom";

const Olfactif = () => {
  const params = useParams();

  return (
    <section>
      <h1>Examen olfactif</h1>
      <IntensityAroma />
      <Feeling />
      <AromaticFamily />
      <Link to={`/${params.id}/visuel`}>Précédent</Link>
      <Link to={`/${params.id}/gustatif`}>Suivant</Link>
    </section>
  );
};

export default Olfactif;
