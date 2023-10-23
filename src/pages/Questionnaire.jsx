import { useParams } from "react-router-dom";
import ColorWine from "../components/ColorWine";
import ShineWine from "../components/ShineWine";
import IntensityColor from "../components/IntensityColor";

const Questionnaire = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <section>
        <h1>Examen visuel de {params.id}</h1>
        <div>
          <ColorWine />
          <ShineWine />
          <IntensityColor />
        </div>
      </section>
    </>
  );
};

export default Questionnaire;
