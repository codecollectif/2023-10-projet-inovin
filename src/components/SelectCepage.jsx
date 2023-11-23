import React from 'react';

const SelectCepage = (props) => {
  return (
    <>
      <div>
        <label htmlFor="1erCepages">{props.title}</label>
        <select name={props.title} id={props.title}>
        <option value="--Please choose an option--">--Please choose an option-- </option>
        {props.data.map((cepage)=> <option key={`${cepage}.${props.title}`} value={cepage}>{cepage} </option> )}
        </select>
      </div>
    </>
  );
};

export default SelectCepage;