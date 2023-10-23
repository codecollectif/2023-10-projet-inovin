import { useParams } from "react-router-dom";
import ColorWine from "../components/ColorWine";
import ShineWine from "../components/ShineWine";

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
        </div>
      </section>
    </>
  );
};

export default Questionnaire;
