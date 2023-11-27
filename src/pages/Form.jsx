import { useState } from "react";
import { useWine } from "../contexts/WineContext";

const Form = () => {
  const {startWines}=useWine()

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const wines = startWines.map((wine)=>wine)
  const quantity = startWines.map((wine)=>sessionStorage.getItem(wine))
  const winesQuantity = {}
  wines.forEach((element,index)=>{
    winesQuantity[element] = quantity[index]
  }) 

  const handleSubmit = (e) => {
  e.preventDefault();
    const formData = [
      {
        firstname: firstname,
        lastname: lastname,
        email: email,
        age: age,
        ...winesQuantity
      },
    ];
    console.log(formData,winesQuantity);
    alert(
      `datas Submit
      ${firstname}
      ${lastname}
      ${email}
      ${age}`
    )
    
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <input
            type="text"
            name="firstname"
            placeholder="prénon"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <input
            type="text"
            name="lastname"
            placeholder="nom"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="age"
            placeholder="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default Form;
