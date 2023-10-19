import { useEffect, useState } from "react";
import Papa from "papaparse";
import Glasses from "../pictures/glass.png";

const DataCepage = () => {
  const URL = "https://docs.google.com/spreadsheets/d/1Q2L2mJr6xuxMMcktiQ2i8oDr68ag_bVjXLwdUx4CKCM/export?exportFormat=csv&format=csv?pli=1#gid=0";
  const[data,setData]=useState(["initial"]);

  useEffect(()=>{
    Papa.parse(URL, {
      download: true,
      complete: function(result){
        setData(result.data.flat())
        return console.log("All done!",result);
      }
    });
  },[])

  return (
    <>
    {data.map((o,i)=>
      <card key={i.id} className="card" >
        <h2 className="card-title" >{o}</h2>
        <img className="card-img" src={Glasses} alt="verre" />
      </card>
    )}
    </>
  );
};

export default DataCepage;