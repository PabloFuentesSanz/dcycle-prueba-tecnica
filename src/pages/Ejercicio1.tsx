import React, { useState, useEffect, useCallback } from "react";

import {
  Input,
  Heading,
  Button,
  useToast,
  FormControl,
} from "@chakra-ui/react";
import axios from "axios";

import NameResult from "../components/ejercicio1/NameResult";
import { Data, Age, Nationality, Gender } from "../models/NameModels";
import BackHome from "../components/general/BackHome";
import Loading from "../components/general/Loading";
import { SearchIcon } from "@chakra-ui/icons";

function Ejercicio1() {
  /*** HOOKS ***/
  //States
  const [name, setName] = useState<string>("");
  const [data, setData] = useState<Data | null>(null);
  const [validData, setValidData] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  //Chakra Hooks
  const toast = useToast();
  const successToast = useCallback(() => {
    toast({
      title: "Name Submission Successful.",
      description:
        "The name has been successfully processed, and relevant data has been retrieved.",
      status: "success",
      position: "top-right",
      duration: 2500,
      isClosable: true,
    });
  }, [toast]);

  const errorToast = useCallback(() => {
    toast({
      title: "Error querying the name.",
      description: "Please insert a valid name or try again later.",
      status: "error",
      position: "top-right",
      duration: 2500,
      isClosable: true,
    });
  }, [toast]);

  //Effects
  useEffect(() => {
    setLoading(false);
    // Check if data response is relevant (Prevent initial render)
    if (
      data &&
      data.age.age &&
      data.gender.gender &&
      data.nationality.country
    ) {
      setValidData(true);
      successToast();
    } else if (data) {
      // Error if data response is not relevant
      setValidData(false);
      errorToast();
    }
  }, [data, errorToast, successToast]);

  /*** FUNCTIONALITIES ***/
  //Handles
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      //Check if name is not empty
      if (name !== "") {
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
      } else {
        //Error if name is empty
        errorToast();
      }
    } catch (err) {
      //Check a possible API error
      setLoading(false);
      errorToast();
    }
  };

  return (
    <main>
      <BackHome />
      <Heading as="h1" size="4xl">
        Who Could You Be
      </Heading>
      <FormControl mb={10} mt={10}>
        <Input
          placeholder="Insert name here"
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button
          size="lg"
          className="custom-button"
          mt={10}
          onClick={handleSubmit}
        >
          Who might I be <SearchIcon ml={3} />
        </Button>
      </FormControl>
      {loading && <Loading />}
      {data && validData && !loading && <NameResult data={data} />}
    </main>
  );
}

export default Ejercicio1;
