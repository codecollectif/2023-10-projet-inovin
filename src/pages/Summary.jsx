import { useParams, useRevalidator } from "react-router-dom";

const Summary = () => {
  const { id } = useParams();
  const revalidator = useRevalidator();

  const colorShadeLike =
    (sessionStorage.getItem(`${id}.colorShadeLike`) ?? "false") !== "false";

  return (
    <>
      <h1>Vin choisi: {id} </h1>
      <p>
        Couleur et nuance: {sessionStorage.getItem("colorShade")}{" "}
        <button
          type="button"
          onClick={() => {
            sessionStorage.setItem(`${id}.colorShadeLike`, !colorShadeLike);
            revalidator.revalidate(); // "recharge" la page
          }}
        >
          {colorShadeLike ? "❤️" : "🖤"}
        </button>
      </p>
      <p>Brillance: {sessionStorage.getItem("shine")}</p>
      <p>Intensité de la couleur: {sessionStorage.getItem("colorIntensity")}</p>
      <p>Fluidité des larmes: {sessionStorage.getItem("fluidityOfTears")}</p>
      <p>Intensité des arômes: {sessionStorage.getItem("intensityOfAromas")}</p>
      <p>Impression: {sessionStorage.getItem("feeling")}</p>
      <p>Familles aromatiques: {sessionStorage.getItem("aromaticFamilies")}</p>
      <p>Saveurs: {sessionStorage.getItem("flavors")}</p>
      <p>Structure: {sessionStorage.getItem("framework")}</p>
      <p>
        Persistance aromatique:
        {sessionStorage.getItem("aromaticPersistence")}
      </p>
    </>
  );
};

export default Summary;
