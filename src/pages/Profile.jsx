import { useWine } from "../contexts/WineContext";

import Navbar from "../components/Navbar";

import "./profile.css";

const Profile = () => {
  const { dataWine } = useWine();
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
              <p>Couleur et nuance: {wine.colorShade ?? ""} {""} {wine.colorShadeLike ? "❤️" : "🖤"}</p>
              <p>Brillance: {wine.shine ?? ""}{""} {wine.shineLike ? "❤️" : "🖤"} </p>
              <p>Intensité de la couleur: {wine.colorIntensity ?? ""}{""} {wine.colorIntensityLike ? "❤️" : "🖤"} </p>
              <p>Fluidité des larmes: {wine.fluidityOfTears ?? ""}{""} {wine.fluidityOfTearsLike ? "❤️" : "🖤"}</p>
              <p>Intensité des arômes: {wine.intensityOfAromas ?? ""}{""} {wine.intensityOfAromasLike ? "❤️" : "🖤"}</p>
              <p>Impression: {wine.feeling ?? ""}{""} {wine.feelingLike ? "❤️" : "🖤"}</p>
              <p>Familles aromatiques: {wine.aromaticFamilies ?? ""}{""} {wine.aromaticFamiliesLike ? "❤️" : "🖤"}</p>
              <p>Saveurs: {wine.flavors ?? ""}{""} {wine.flavorsLike ? "❤️" : "🖤"}</p>
              <p>Structure: {wine.framework ?? ""}{""} {wine.frameworkLike ? "❤️" : "🖤"}</p>
              <p>Persistance aromatique: {wine.aromaticPersistence ?? ""}{""} {wine.aromaticPersistenceLike ? "❤️" : "🖤"}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Profile;
