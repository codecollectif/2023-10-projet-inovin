import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Summary = () => {
  const params = useParams();

  return (
    <>
      <h1>Vin choisi: {params.id} </h1>
      <p>Couleur et nuance: {sessionStorage.getItem("Couleur et nuance")}</p>
      <p>Brillance: {sessionStorage.getItem("Brillance")}</p>
      <p>
        Intensité de la couleur:{" "}
        {sessionStorage.getItem("Intensité de la couleur")}
      </p>
      <p>
        Fluidité des larmes: {sessionStorage.getItem("Fluidité des larmes")}
      </p>
      <p>
        Intensité des arômes: {sessionStorage.getItem("Intensité des arômes")}
      </p>
      <p>Impression: {sessionStorage.getItem("Impression")}</p>
      <p>
        Familles aromatiques: {sessionStorage.getItem("Familles aromatiques")}
      </p>
      <p>Saveurs: {sessionStorage.getItem("Saveurs")}</p>
      <p>Structure: {sessionStorage.getItem("Structure")}</p>
      <p>
        Persistance aromatique:{" "}
        {sessionStorage.getItem("Persistance aromatique")}
      </p>
      <Link className="link" to={`/${params.id}/gustatif`}>Revenir</Link>
      <Link className="link" to={"/"}>Envoyer mail</Link>
    </>
  );
};

export default Summary;
