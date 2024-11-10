import React, { useEffect, useState, useTransition } from "react";
import getPostAPIData from "../API/PostAPI";
import Loader from "../components/UI/Loader";
import CountryAllData from "../components/Layout/CountryAllData";
import SearchFilter from "../components/UI/SearchFilter";

function Country() {

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getPostAPIData();
      // console.log(res);
      setCountry(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  // in the searchfilter file all data is store in this variable search  and filter
  console.log(search , filter)


  // here is calling the funcation name 
  const searchCountryName = (countryname) =>{
    if(search)
    {
      return countryname.name.common.toLowerCase().includes(search.toLowerCase());
      // like this :- India.includes(di) di is what you are search . 
    }
    else{
      return countryname;
    }
  }


  const filterRegioncountry = (countryname) =>{
    if(filter === "all"){
      return countryname;
    }
    else{
      return countryname.region === filter;
    }
  }
  // here is the main logic when you use search .
  const searchAndFilterCountryName = country.filter((countryname)=> searchCountryName(countryname) && filterRegioncountry(countryname));
  // this is variable name is change in the map function 


  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />
      <ul className="grid grid-four-cols">
        {searchAndFilterCountryName.map((currElement, index) => {
          return <CountryAllData allcountry={currElement} key={index} />;
        })}
      </ul>
    </section>
  );
}

export default Country;
