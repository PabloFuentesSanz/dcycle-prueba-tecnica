import React, { useState, useEffect } from 'react';

import {
  Input,
  Heading,
  Button,
  useToast,
  FormControl,
} from '@chakra-ui/react';
import axios from 'axios';

import NameResult from '../components/NameResult';
import { Data, Age, Nationality, Gender } from '../models/NameModels';
import BackHome from '../components/BackHome';
import Loading from '../components/Loading';
import { SearchIcon } from '@chakra-ui/icons';

function Ejercicio1() {
  /*** HOOKS ***/
  //States
  const [name, setName] = useState<string>('');
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(false);

  //Chakra Hooks
  const toast = useToast();

  //Effects
  useEffect(() => {
    if (data) {
      setLoading(false);
      toast({
        title: 'Name Submission Successful.',
        description:
          'The name has been successfully processed, and relevant data has been retrieved.',
        status: 'success',
        position: 'top-right',
        duration: 2500,
        isClosable: true,
      });
    }
  }, [data, toast]);

  /*** FUNCTIONALITIES ***/
  //Handles
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const genderData: Gender = await axios
        .get(`http://localhost:3200/api/genderize/${name}`)
        .then((res) => res.data);
      const nationalData: Nationality = await axios
        .get(`http://localhost:3200/api/nationalize/${name}`)
        .then((res) => res.data);
      const ageData: Age = await axios
        .get(`http://localhost:3200/api/agify/${name}`)
        .then((res) => res.data);

      setData({
        gender: genderData,
        nationality: nationalData,
        age: ageData,
      });
    } catch (err) {
      toast({
        title: 'Error querying the name.',
        description: 'Please try again later.',
        status: 'error',
        position: 'top-right',
        duration: 2500,
        isClosable: true,
      });
    }
  };

  return (
    <main>
      <BackHome />
      <Heading as="h1" size="4xl" >
        Who Could You Be
      </Heading>
      <FormControl mb={10} mt={10}>
        <Input
          placeholder="Insert name here"
          onChange={(e) => setName(e.target.value)}
        />
        <Button size="lg" className="custom-button" mt={10} onClick={handleSubmit}>
          Who might I be <SearchIcon ml={3} />
        </Button>
      </FormControl>
      {loading && <Loading />}
      {data && !loading && <NameResult data={data} />}
    </main>
  );
}

export default Ejercicio1;
