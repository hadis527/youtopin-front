import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Dashboard from "./pages/dashboard";
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme} direction ="rtl">
        <Dashboard />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
