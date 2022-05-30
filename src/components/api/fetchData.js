import axios from 'axios';
let url ="https://covid19.mathdro.id/api"
export default async function  FetchData(country){
    let changeableUrl=url;
if(country){
    changeableUrl= `${url}/countries/${country}`
}
try{
    const {data: {confirmed, recovered, deaths}}=await axios.get(changeableUrl)
    
    return {confirmed, recovered, deaths}
}
catch(error){
    return(error)
}

}
export const fetchCountries = async () => {
    try {
      const { data: { countries } } = await axios.get(`${url}/countries`);
  
      return countries.map((country) => country.name);
    } catch (error) {
      return error;
    }
  };
  

