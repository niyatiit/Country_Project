import React from "react";
import {NavLink} from "react-router-dom";

function CountryAllData({ allcountry, index }) {
  return (
    <li key={index} className="country-card card">
      <div className="container-card bg-white-box">
        <img src={allcountry.flags.svg} />

        <div className="countryInfo">
          <p className="card-title"> {allcountry.name.common} </p>
          <p>
            {" "}
            <span className="card-desciption"> Population : </span>{" "}
            {allcountry.population.toLocaleString()}{" "}
          </p>
          <p>
            {" "}
            <span className="card-desciption"> Region : </span>{" "}
            {allcountry.region}{" "}
          </p>
          <p>
            {" "}
            <span className="card-desciption"> Capital : </span>{" "}
            {allcountry.capital[0]}{" "}
          </p>
          <NavLink to={`/country/${allcountry.name.common}`}>
            <button> Read More </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
}

export default CountryAllData;
