import { Heading } from "@chakra-ui/react";
import { Detail } from "../models/CovidDataModels";

const DataRow: React.FC<Detail> = (detail) => {
  return (
    <>
      <Heading as="h4" size="md" mb={5} className="covid-title">
        {detail.label}: <span className="covid-value">{detail.value}</span>
      </Heading>
    </>
  );
};

export default DataRow;
