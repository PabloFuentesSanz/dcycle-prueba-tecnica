import { Heading } from '@chakra-ui/react';
import BackHome from '../components/BackHome';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Ejercicio2() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getCovidData = async () => {
      const covidData = await axios
        .get(`http://localhost:3200/api/covid/historical`)
        .then((res) => res.data);
      setData(covidData);
    };
    
    getCovidData();
  }, []);

  useEffect(()=>{
    console.log(data)
  },[data])

  return (
    <main>
      <BackHome />
      <Heading as="h1" size="4xl" mb={10}>
        Covid Chronicle
      </Heading>
    </main>
  );
}

export default Ejercicio2;
