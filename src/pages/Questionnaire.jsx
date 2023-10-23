import { useParams } from "react-router-dom";
import ColorWine from "../components/ColorWine";

const Questionnaire = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <section>
        <h1>Examen visuel de {params.id}</h1>
        <div>
          <ColorWine />
        </div>
      </section>
    </>
  );
};

export default Questionnaire;
