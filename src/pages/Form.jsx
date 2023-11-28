import { useState } from "react";
import { useWine } from "../contexts/WineContext";

import "./form.css";
import Navbar from "../components/Navbar";

const Form = () => {
  const { startWines } = useWine();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const wines = startWines.map((wine) => wine);
  const quantity = startWines.map((wine) => sessionStorage.getItem(wine));
  const winesQuantity = {};
  wines.forEach((element, index) => {
    winesQuantity[element] = quantity[index];
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = [
      {
        firstname: firstname,
        lastname: lastname,
        email: email,
        age: age,
        ...winesQuantity,
      },
    ];
    console.log(formData, winesQuantity);
    alert(
      `datas Submit
      ${firstname}
      ${lastname}
      ${email}
      ${age}
      ${winesQuantity}`
    );
  };
  return (
    <>
      <Navbar />
      <section className="form-section">
        <h1 className="form-title">Formulaire</h1>
        <div className="form-div">
          <form className="form" onSubmit={handleSubmit}>
            <label className="form-label">
              Prénon:
              <input
                className="form-input"
                type="text"
                name="firstname"
                placeholder="prénon"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </label>
            <label className="form-label">
              Nom:
              <input
                className="form-input"
                type="text"
                name="lastname"
                placeholder="nom"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </label>
            <label className="form-label">
              Email:
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="form-label">
              Age:
              <input
                className="form-input"
                type="text"
                name="age"
                placeholder="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
            <input className="link" type="submit" value="Submit"></input>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;
