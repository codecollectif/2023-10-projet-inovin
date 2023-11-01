import Navbar from "../components/Navbar";

const TestContext = () => {
  return (
    <>
    <Navbar/>
      <section>
        <h1>Vos goûts</h1>
        <div>
          <h2>Vin: {""}</h2>
          <p>Couleur et nuance: {""} </p>
          <p>Brillance: {""} </p>
          <p>Intensité de la couleur: {""} </p>
          <p>Fluidité des larmes: {""}</p>
          <p>Intensité des arômes: {""}</p>
          <p>Impression: {""}</p>
          <p>Familles aromatiques: {""}</p>
          <p>Saveurs: {""}</p>
          <p>Structure: {""}</p>
          <p>Persistance aromatique: {""}</p>
          <p>score: {""}</p>
        </div>
      </section>
    </>
  );
};

export default TestContext;
