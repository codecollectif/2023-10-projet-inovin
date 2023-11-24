import { useEffect, useState } from "react";
import SelectCepage from "../components/SelectCepage";

import Papa from "papaparse";

import "./select.css";
import Navbar from "../components/Navbar";

const Select = () => {
  const URL =
    "https://docs.google.com/spreadsheets/d/1IKLybL1aU7br0tjb7KLa1BTskjQHeIf96WAjG5dlQ9Y/export?exportFormat=csv&format=csv#gid=0";

  const [data, setData] = useState([]);
  const dataSlice = data.slice(2);
  useEffect(() => {
    new Promise(() => {
      Papa.parse(URL, {
        download: true,
        complete: function (result) {
          setData(result.data.flat());
        },
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <section className="select-section">
        <h1 className="select-title">Selectioner vos cépages</h1>
        <SelectCepage data={dataSlice} />
      </section>
    </>
  );
};

export default Select;
