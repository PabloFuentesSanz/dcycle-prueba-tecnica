import {
  Heading,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { ChartType, CovidData, Detail } from "../../models/CovidDataModels";
import DataRow from "./DataRow";
import GenericChart from "./GenericChart";
import { casesData, outcomesData, testingData } from "../../utils/chartData";

interface Props {
  data: CovidData;
  globalData: CovidData[];
  type: string;
}
/**
 * This component is the modal which shows the COVID information depends of his type
 */
const CovidDetails: React.FC<Props> = ({ data, globalData, type }) => {
  let chartType: ChartType | null = null;

  const renderData = (dataType: string) => {
    let details: Detail[] = [];
    switch (dataType) {
      case "cases":
        details = [
          { label: "Total Cases", value: data.cases.total.value },
          {
            label: "Percentage of Population",
            value: data.cases.total.calculated.population_percent,
          },
          {
            label: "Change from Prior Day",
            value: data.cases.total.calculated.change_from_prior_day,
          },
        ];
        chartType = casesData(globalData);
        break;
      case "testing":
        details = [
          { label: "Total Testing", value: data.testing.total.value },
          {
            label: "Percentage of Population",
            value: data.testing.total.calculated.population_percent,
          },
          {
            label: "Change from Prior Day",
            value: data.testing.total.calculated.change_from_prior_day,
          },
        ];
        chartType = testingData(globalData);
        break;
      case "outcomes":
        details = [
          {
            label: "Currently Hospitalized",
            value: data.outcomes.hospitalized.currently.value,
          },
          {
            label: "Currently in ICU",
            value: data.outcomes.hospitalized.in_icu.currently.value,
          },
          { label: "Total Deaths", value: data.outcomes.death.total.value },
        ];
        chartType = outcomesData(globalData);
        break;
      default:
        break;
    }
    return details;
  };

  const currentDetails = renderData(type);

  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading as="h1" size="lg">{`${type.toUpperCase()} of ${
            data.date
          }`}</Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={10}>
          <GenericChart globalData={chartType} selectedDate={data.date} />
          {currentDetails.map((detail) => (
            <DataRow
              key={detail.label}
              label={detail.label}
              value={detail.value}
            />
          ))}
        </ModalBody>
      </ModalContent>
    </>
  );
};

export default CovidDetails;
