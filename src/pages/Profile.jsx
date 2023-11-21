import { useWine } from "../contexts/WineContext";

import Navbar from "../components/Navbar";

import "./profile.css";

const Profile = () => {
  const { dataWine } = useWine();
  console.log(dataWine);
  return (
    <>
      <Navbar />
      <section className="profile-box">
        <h1 className="profile-main-title">
          {JSON.stringify(dataWine) === JSON.stringify([])
            ? "Vous n'avez pas deguster de vin"
            : "Vos goûts"}
        </h1>
        <div className="profile-div">
          {dataWine.map((wine) => (
            <div className="profile-card" key={wine.wineName}>
              <h2 className="profile-title">{wine.wineName ?? ""}</h2>
              <p>Couleur et nuance: {wine.colorShade ?? ""} {""} {wine.colorShadeLike === "true" ? "❤️" : "🖤"}</p>
              <p>Brillance: {wine.shine ?? ""}{""} {wine.shineLike === "true" ? "❤️" : "🖤"} </p>
              <p>Intensité de la couleur: {wine.colorIntensity ?? ""}{""} {wine.colorIntensityLike === "true" ? "❤️" : "🖤"} </p>
              <p>Fluidité des larmes: {wine.fluidityOfTears ?? ""}{""} {wine.fluidityOfTearsLike === "true" ? "❤️" : "🖤"}</p>
              <p>Intensité des arômes: {wine.intensityOfAromas ?? ""}{""} {wine.intensityOfAromasLike === "true" ? "❤️" : "🖤"}</p>
              <p>Impression: {wine.feeling ?? ""}{""} {wine.feelingLike === "true" ? "❤️" : "🖤"}</p>
              <p>Familles aromatiques: {wine.aromaticFamilies ?? ""}{""} {wine.aromaticFamiliesLike === "true" ? "❤️" : "🖤"}</p>
              <p>Saveurs: {wine.flavors ?? ""}{""} {wine.flavorsLike === "true" ? "❤️" : "🖤"}</p>
              <p>Structure: {wine.framework ?? ""}{""} {wine.frameworkLike === "true" ? "❤️" : "🖤"}</p>
              <p>Persistance aromatique: {wine.aromaticPersistence ?? ""}{""} {wine.aromaticPersistenceLike === "true" ? "❤️" : "🖤"}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Profile;
