import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from 'react';
import { fetchCountries } from '../api/fetchData';
export default function CountryPicker({handleChange}) {
  const [Countries, setCountries] = React.useState([]);
  
  useEffect(()=>{
    const fetchAPI = async () => {
        setCountries(await fetchCountries());
      };

      fetchAPI();
    
  },[])

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{
         width: '40%' ,
         display: 'flex',
         flexWrap: 'wrap',
         float: "right",
         marginRight: "20px",
         textAlign:"center",
         
         
    
    }} >
        <InputLabel id="demo-simple-select-label">Select a Country</InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"country"}
          label="Select a Country"
          onChange={(e) => handleChange(e.target.value)}
        >
          
         {
             Countries.map((country,i)=>{
return   <MenuItem value={country} key={i}>{country}</MenuItem> 
             })
         }
        </Select>
      </FormControl>
    </Box>
  );
}
