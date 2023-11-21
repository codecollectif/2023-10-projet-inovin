import { useParams } from "react-router-dom";
import ButtonLike from "../components/ButtonLike";

const Summary = () => {
  const { id } = useParams();

  return (
    <>
      <h1>Vin choisi: {id} </h1>
      <p>
        Couleur et nuance: {sessionStorage.getItem("colorShade")}{" "}
        <ButtonLike name={"colorShade"} />
      </p>
      <p>
        Brillance: {sessionStorage.getItem("shine")}
        <ButtonLike name={"shine"} />
      </p>
      <p>
        Intensité de la couleur: {sessionStorage.getItem("colorIntensity")}{" "}
        <ButtonLike name={"colorIntensity"} />
      </p>
      <p>
        Fluidité des larmes: {sessionStorage.getItem("fluidityOfTears")}{" "}
        <ButtonLike name={"fluidityOfTears"} />
      </p>
      <p>
        Intensité des arômes: {sessionStorage.getItem("intensityOfAromas")}{" "}
        <ButtonLike name={"intensityOfAromas"} />
      </p>
      <p>
        Impression: {sessionStorage.getItem("feeling")}{" "}
        <ButtonLike name={"feeling"} />
      </p>
      <p>
        Familles aromatiques: {sessionStorage.getItem("aromaticFamilies")}{" "}
        <ButtonLike name={"aromaticFamilies"} />
      </p>
      <p>
        Saveurs: {sessionStorage.getItem("flavors")}{" "}
        <ButtonLike name={"flavors"} />
      </p>
      <p>
        Structure: {sessionStorage.getItem("framework")}{" "}
        <ButtonLike name={"framework"} />
      </p>
      <p>
        Persistance aromatique:
        {sessionStorage.getItem("aromaticPersistence")}{" "}
        <ButtonLike name={"aromaticPersistence"} />
      </p>
    </>
  );
};

export default Summary;
