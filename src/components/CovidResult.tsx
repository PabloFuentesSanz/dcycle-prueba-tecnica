import React, { useState } from 'react';
import { CovidData, GeneralData } from '../models/CovidDataModels';
import { Button, Input, Modal, useDisclosure } from '@chakra-ui/react';
import CovidDetails from './CovidDetails';
import { Table, Thead, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
interface Props {
  data: GeneralData;
}
const CovidResult: React.FC<Props> = ({ data }) => {
  /*** HOOKS ***/
  // States
  const [filterDate, setFilterDate] = useState('');
  const [selectedData, setSelectedData] = useState<{
    data: CovidData | null;
    type: string | null;
  }>({ data: null, type: null });

  // Chakra Hooks
  const { isOpen, onOpen, onClose } = useDisclosure();

  /*** FUNCTIONALITIES ***/
  //Handles
  function handleClickDate(date: string, type: string) {
    const dateData = findDataByDate(date);
    setSelectedData({ data: dateData, type });
    onOpen();
  }
  
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFilterDate(event.target.value);
  }
  
  //Filtering  
  function findDataByDate(date: string): CovidData {
    return data.data.filter((item) => item.date == date)[0];
  }

  const filteredDates = data?.data?.filter((item) =>
    item.date.includes(filterDate)
  );

  return (
    <>
      <Input
        type="text"
        placeholder="Find by date: yyyy-mm-dd"
        value={filterDate}
        onChange={handleInputChange}
        mb={10}
      />
      <TableContainer className="table">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Date of the report</Th>
              <Th>See the reports</Th>
            </Tr>
          </Thead>
          {filteredDates?.map((item) => {
            return (
              <Tr key={item.date}>
                <Td>{item.date}</Td>
                <Td>
                  <Button onClick={() => handleClickDate(item.date, 'cases')}>
                    Cases
                  </Button>
                </Td>
                <Td>
                  <Button onClick={() => handleClickDate(item.date, 'testing')}>
                    Testing
                  </Button>
                </Td>
                <Td>
                  <Button
                    onClick={() => handleClickDate(item.date, 'outcomes')}
                  >
                    Outcomes
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Table>
      </TableContainer>

      <Modal isOpen={isOpen} onClose={onClose}>
        {selectedData.data && selectedData.type && (
          <CovidDetails data={selectedData.data} type={selectedData.type} />
        )}
      </Modal>
    </>
  );
};

export default CovidResult;
