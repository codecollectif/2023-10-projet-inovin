import { useEffect, useState } from 'react';
import SelectCepage from '../components/SelectCepage';

import Papa from "papaparse";


const Select = () => {
  const URL = "https://docs.google.com/spreadsheets/d/1Q2L2mJr6xuxMMcktiQ2i8oDr68ag_bVjXLwdUx4CKCM/export?exportFormat=csv&format=csv?pli=1#gid=0"
  const [data,setData]=useState([])
  const dataSlice = data.slice(2)
  useEffect(()=>{
    new Promise(() => {
      Papa.parse(URL, {
        download: true,
        complete: function (result) {
          //resolve(result.data.flat());
          setData(result.data.flat())
        },
      });
    })
  },[])
  
  return (
    <div>
    <h1>Selectioner vos cépages</h1>
    <SelectCepage data={dataSlice}/>
    </div>
  );
};

export default Select;