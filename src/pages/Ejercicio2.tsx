import { Heading, useToast } from '@chakra-ui/react';
import BackHome from '../components/BackHome';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { GeneralData } from '../models/CovidDataModels';
import Loading from '../components/Loading';
import CovidResult from '../components/CovidResult';

function Ejercicio2() {
  /*** HOOKS ***/
  // States
  const [data, setData] = useState<GeneralData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Chakra Hooks
  const toast = useToast();

  // Effects
  useEffect(() => {
    const getCovidData = async () => {
      try {
        setLoading(true);
        const covidData = await axios
          .get(`http://localhost:3200/api/covid/historical`)
          .then((res) => res.data);
        setData(covidData);
      } catch (error) { //Check a possible API error
        toast({
          title: 'Error receiving data.',
          description: 'Please try again later.',
          status: 'error',
          position: 'top-right',
          duration: 2500,
          isClosable: true,
        });
      }
    };

    getCovidData();
  }, [toast]);

  useEffect(() => {
    if (data) { //Prevent initial render
      setLoading(false);
      toast({
        title: 'COVID data received successfully',
        status: 'success',
        position: 'top-right',
        duration: 2000,
        isClosable: true,
      });
    }
  }, [data, toast]);

  return (
    <main>
      <BackHome />
      <Heading as="h1" size="4xl" mb={10}>
        Covid Chronicle
      </Heading>
      {data && !loading && <CovidResult data={data} />}
      {loading && <Loading />}
    </main>
  );
}

export default Ejercicio2;
