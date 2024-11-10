import axios from "axios"

const APIData = axios.create({
    baseURL : "https://restcountries.com/v3.1/"
})
 
function getPostAPIData() {
  return (
      APIData.get("all?fields=name,population,region,capital,flags")
  )
}

export const getIndividualCountryDetails = (countryname) =>{
    return(
      APIData.get(`/name/${countryname}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`)
    )
}
export default getPostAPIData