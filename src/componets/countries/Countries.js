import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  marginTop: 40,

  color: theme.palette.text.secondary,
}));

export default function Countries( ) {



    let [covidApi , setCovidApi] = useState({})

    useEffect(()=>{
        async function getData(){
            const response = await fetch("https://api.covid19api.com/summary");
            const data = await response.json();
            delete data.ID;
            delete data.Message;
            delete data.Global.Date
            setCovidApi(data.Countries)

        }
        getData()
    },[]);
  return (
    <Box  sx={{ flexGrow: 1}}>
      <Grid style={{maxWidth: 1000, margin: '0 auto'  }} container spacing={2}>
          {
              Object.keys(covidApi).map((objKey, ind)=>{
                  return(
                    <Grid item xs={12} sm={4}  >
                    <Item elevation={5}> <h3 style={{textTransform: 'uppercase', color:'#26acd9'}}>{objKey.replace(/([A-Z])/g, ' $1')}</h3>
                    <h3 style={{color: '#d92626'}}>{covidApi[objKey]}</h3>
                    </Item>
                  </Grid>


                  )


              })
          }
{/* 
        <Grid item xs={12} sm={4}>
          <Item elevation={5}>xs=4</Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item elevation={5}>xs=4</Item>
        </Grid> */}
      </Grid>
    </Box>
  );
}
