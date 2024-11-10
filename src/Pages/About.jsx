import React from "react";
import CountryArray from "../API/CountryData.json";

function About() {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        {" "}
        Here are the interesting Facts <br /> we're proud of{" "}
      </h2>
      <div className="gradient-cards">
        {CountryArray.map((data , id) => {
          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                <p className="card-title"> {data.countryName} </p>
                <p>
                  <span className="card-descrption"> Capital : </span>{" "}
                  {data.capital}
                </p>
                <p>
                  <span className="card-descrption"> Populations : </span>{" "}
                  {data.population}
                </p>
                <p>
                  <span className="card-descrption"> Interesting Fact : </span>{" "}
                  {data.interestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default About;
