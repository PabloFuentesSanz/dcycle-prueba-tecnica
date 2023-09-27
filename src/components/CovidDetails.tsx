import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { CovidData } from "../models/CovidDataModels";

interface Props {
  data: CovidData;
  type: string;
}

const CovidDetails: React.FC<Props> = ({ data, type }) => {
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{`COVID DATA ${data.date}`}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {type === "cases" && (
            <>
              <strong>Total Cases:</strong> {data.cases.total.value}
              <br />
              <strong>Percentage of Population:</strong>{" "}
              {data.cases.total.calculated.population_percent}%
              <br />
              <strong>Change from Prior Day:</strong>{" "}
              {data.cases.total.calculated.change_from_prior_day}
            </>
          )}
          {type === "testing" && (
            <>
              <strong>Total Testing:</strong> {data.testing.total.value}
              <br />
              <strong>Percentage of Population:</strong>{" "}
              {data.testing.total.calculated.population_percent}%
              <br />
              <strong>Change from Prior Day:</strong>{" "}
              {data.testing.total.calculated.change_from_prior_day}
            </>
          )}
          {type === "outcomes" && (
            <>
              <strong>Currently Hospitalized:</strong>{" "}
              {data.outcomes.hospitalized.currently.value}
              <br />
              <strong>Currently in ICU:</strong>{" "}
              {data.outcomes.hospitalized.in_icu.currently.value}
              <br />
              <strong>Total Deaths:</strong> {data.outcomes.death.total.value}
            </>
          )}
          {type === "all" && (
            <>
              {/* Casos */}
              <strong>Total Cases:</strong> {data.cases.total.value}
              <br />
              {/* Testing */}
              <strong>Total Testing:</strong> {data.testing.total.value}
              <br />
              {/* Outcomes */}
              <strong>Currently Hospitalized:</strong>{" "}
              {data.outcomes.hospitalized.currently.value}
              <br />
              <strong>Currently in ICU:</strong>{" "}
              {data.outcomes.hospitalized.in_icu.currently.value}
              <br />
              <strong>Total Deaths:</strong> {data.outcomes.death.total.value}
            </>
          )}
        </ModalBody>
      </ModalContent>
    </>
  );
};

export default CovidDetails;
