import { Spinner } from '@chakra-ui/react';

function Loading() {
  return (
    <div>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <p>Loading...</p>
    </div>
  );
}

export default Loading;