import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Home from './pages/Home';
import Ejercicio1 from './pages/Ejercicio1';
import Ejercicio2 from './pages/Ejercicio2';

function App() {
  return (
    <>
      <ChakraProvider>
        <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/WhoCouldYouBe" element={<Ejercicio1 />} />
              <Route path="/CovidChronicle" element={<Ejercicio2 />} />
            </Routes>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
