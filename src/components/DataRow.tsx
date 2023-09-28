import { Heading } from "@chakra-ui/react";
import { Detail } from "../models/CovidDataModels";

const DataRow: React.FC<Detail> = (detail) => {
  return (
    <>
      <Heading as="h4" size="md" mb={5} className="dark-font">
        {detail.label}: <span className="light-font">{detail.value}</span>
      </Heading>
    </>
  );
};

export default DataRow;
