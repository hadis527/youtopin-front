import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Dashboard from "./pages/dashboard";
import './App.css';


function App() {
  return (
      <ChakraProvider theme={theme}>
        <Dashboard />
      </ChakraProvider>
  );
}

export default App;
