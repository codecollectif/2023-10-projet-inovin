import React from 'react';
import { useParams } from 'react-router-dom';

const Summary = () => {
  const params =useParams()

  return (
    <>
      <h1>Cépage choisi: {params.id} </h1>
      <p>Couleur et nuance: {sessionStorage.getItem("Couleur et nuance")}</p>
      <p>Brillance: {sessionStorage.getItem("Brillance")}</p>
      <p>Intensité de la couleur: {sessionStorage.getItem("Intensité de la couleur")}</p>
      <p>Fluidité des larmes: {sessionStorage.getItem("Fluidité des larmes")}</p>
      <p>Intensité des arômes: {sessionStorage.getItem("Intensité des arômes")}</p>
      <p>Impression: {sessionStorage.getItem("Impression")}</p>
      <p>Familles aromatiques: {sessionStorage.getItem("Familles aromatiques")}</p>
      <p>Saveurs: {sessionStorage.getItem("Saveurs")}</p>
      <p>Structure: {sessionStorage.getItem("Structure")}</p>
      <p>Persistance aromatique: {sessionStorage.getItem("Persistance aromatique")}</p>
    </>
  );
};

export default Summary;