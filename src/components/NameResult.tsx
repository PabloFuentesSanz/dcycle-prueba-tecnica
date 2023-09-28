import React from "react";
import { Data } from "../models/NameModels";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
  Image,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

interface Props {
  data: Data;
}

const NameResult: React.FC<Props> = ({ data }) => {
  function capitalize(input: string) {
    if (!input) return "";
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
  }

  function genderEmoji(gender: string): string {
    switch (gender?.toLowerCase()) {
      case "male":
        return "♂️";
      case "female":
        return "♀️";
      default:
        return "⚧️";
    }
  }

  return (
    <>
      <Card mt={10} className="card">
        <CardHeader>
          <Heading size="md" className="dark-font">
            {capitalize(data?.age?.name)}'s Probable Data:
          </Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4" className="light-font">
            <Box>
              <Text pt="2" fontSize="md">
                <strong className="dark-font">Probable Gender: </strong>
                {`${capitalize(data?.gender?.gender)} ${genderEmoji(
                  data?.gender?.gender
                )}`}
              </Text>
            </Box>
            <Box>
              <Text pt="2" fontSize="md">
                <strong className="dark-font">Probable Age:</strong>{" "}
                {data?.age?.age} years
              </Text>
            </Box>
            <Box>
              <strong className="dark-font">Probable Nationalities:</strong>
              <UnorderedList>
                {data?.nationality?.country.map((res) => {
                  return (
                    <ListItem key={res.country_id}>
                      <div className="nation-result">
                        <Text fontSize="md">
                          {`${(res.probability * 100).toFixed(
                            1
                          )}% probability of being from`}{" "}
                        </Text>
                        <Image
                          src={`https://flagcdn.com/16x12/${res.country_id.toLowerCase()}.png`}
                          ml={3}
                          width={5}
                          height={5}
                        />
                        <Text fontSize="md">{`(${res.country_id})`} </Text>
                      </div>
                    </ListItem>
                  );
                })}
              </UnorderedList>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default NameResult;
