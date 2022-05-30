import './App.css';
import Cards from './components/Cards';
import Header from './components/Header/index';
import FetchData from './components/api/fetchData';
import { useEffect, useState } from 'react';
import { Api } from '@mui/icons-material';
import BarChart from './components/Charts/BarChart';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import CountryPicker from './components/CounryPicker/CountryPicker';

function App() {
  const [data, setData] = useState({
    deaths: {
      value: 0
    },
    recovered: {
      value: 0
    },
    confirmed: {
      value: 0
    }

  })
  const [country,setCountry]=useState('')

  useEffect(() => {
    async function getApi() {
      let { data: {confirmed, recovered, deaths} } = await FetchData();
      setData({confirmed, recovered, deaths})
    }
    getApi()
  }, [])

  
   const  handleChange = async (country) => {
    const data = await FetchData(country);
    setCountry(country)
    setData(data)
  }
  return (
    <div className="App">

      <Header />
      <div className='countrypic'>

        <CountryPicker handleChange={handleChange}/>
      </div>
      <Cards data={data} country={country} />
      <BarChart data={data} />
    </div>
  );
}

export default App;
