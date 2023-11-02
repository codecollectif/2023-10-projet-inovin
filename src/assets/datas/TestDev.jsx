import { useState } from "react";
import { quiz } from "./quiz";
import { useParams } from "react-router-dom";
import { useWine } from "../../contexts/Context";

const TestDev = () =>{
  console.log(quiz.filter((o) => o.id === 0).map((o) => o.data));
  console.log("1", quiz[0].data);
  const params = useParams();
  //set un tableau pour tester
  const { setName, setColorShade } = useWine();
  const [IdChecked, setChecked] = useState("");
  const Checked = sessionStorage.getItem("colorShade");

  const getIdColorChecked = (e) => {
    setColorShade(e.target.name);
    setName(params.id);
    setChecked(e.target.name);
    sessionStorage.setItem("colorShade", e.target.name);
  };

return (
<>
  <h1>test</h1>
  <section className="tasting-section-checkbox">
    <h1>Examen visuel</h1>
    {quiz.map((wine) => (
      <div key={wine.id}>
        <h2>{wine.name}</h2>
        <section >
          <div className="tasting-div-checkbox">
            {quiz[wine.id].data.map((o) => (
              <div key={o.id} className="checkbox-1">
                <input
                  id={o.id}
                  type="checkbox"
                  name={o.name}
                  onChange={(e) => getIdColorChecked(e)}
                  checked={o.id === IdChecked || o.name === Checked}
                />
                <label htmlFor={""}>{o.name}</label>
              </div>
            ))}
          </div>
        </section>
      </div>
    ))}

    {/* <h2>Couleur et nuance</h2>
      <div >
        {quiz.map((wine) => (
          <div key={wine.name} >
            <input
              id={wine.name}
              type="checkbox"
              name={wine.name}
              onChange={(e) => getIdColorChecked(e)}
              checked={wine.id === colorIdChecked || wine.name === colorChecked}
            />
            <label htmlFor={wine.name}>{wine.name}</label>
          </div>
        ))}
      </div> */}
  </section>
</>)
}
export default TestDev;