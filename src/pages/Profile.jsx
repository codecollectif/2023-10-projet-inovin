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
          {dataWine.map((o) => (
            <div className="profile-card" key={o.wineName}>
              <h2 className="profile-title">{o.wineName ?? ""}</h2>
              <p>Couleur et nuance: {o.colorShade ?? ""} {""} {o.colorShadeLike ? "❤️" : "🖤"}</p>
              <p>Brillance: {o.shine ?? ""}{""} {o.shineLike ? "❤️" : "🖤"} </p>
              <p>Intensité de la couleur: {o.colorIntensity ?? ""}{""} {o.colorIntensityLike ? "❤️" : "🖤"} </p>
              <p>Fluidité des larmes: {o.fluidityOfTears ?? ""}{""} {o.fluidityOfTearsLike ? "❤️" : "🖤"}</p>
              <p>Intensité des arômes: {o.intensityOfAromas ?? ""}{""} {o.intensityOfAromasLike ? "❤️" : "🖤"}</p>
              <p>Impression: {o.feeling ?? ""}{""} {o.feelingLike ? "❤️" : "🖤"}</p>
              <p>Familles aromatiques: {o.aromaticFamilies ?? ""}{""} {o.aromaticFamiliesLike ? "❤️" : "🖤"}</p>
              <p>Saveurs: {o.flavors ?? ""}{""} {o.flavorsLike ? "❤️" : "🖤"}</p>
              <p>Structure: {o.framework ?? ""}{""} {o.frameworkLike ? "❤️" : "🖤"}</p>
              <p>Persistance aromatique: {o.aromaticPersistence ?? ""}{""} {o.aromaticPersistenceLike ? "❤️" : "🖤"}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Profile;
