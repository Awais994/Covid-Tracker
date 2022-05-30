import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { useEffect, useState } from 'react';
import BarChart from '../Charts/BarChart';
import "./style.css";
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#c5cae9',
    },
  },
});

export default function Cards(props){
const [countries, setCountries] = useState(["Confirmed Cases", "Recovered Cases", "Deaths"])

console.log(props.data)




  return (<div>

    <ThemeProvider theme={darkTheme}>

      <Box
        sx={{


          padding: "30px",
          marginRight: "20px",
          float: "top",
          display: 'flex',
          flexDirection: "row",
          flexWrap: 'wrap',
          '& > :not(style)': {
            // backgroundColor: "darkGreen",
            marginLeft: "5px",
            m: 3,
            width: 250,
            height: 130,
            borderRadius: "30px",
            marginTop: "10px",
            marginBottom:"0px",
          },
          root: {
            marginLeft: "5px",
          }
        }}
      >
        <Paper>
            <div className="one">
              <h3>{countries[0]}</h3>
            {props.data.confirmed.value}
            </div>
          </Paper>
          <Paper>
            <div className="one">
              <h3>{countries[1]}</h3>
            {props.data.recovered.value}
            </div>
          </Paper>
          <Paper>
            <div className="one ">
              <h3>{countries[2]}</h3>
            {props.data.deaths.value}
            </div>
          </Paper>


      </Box>
    </ThemeProvider>
  </div>
  );
}