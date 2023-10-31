import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store,persistor} from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "white",
        color:"black" // Set your desired background color
      },
    },
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}> 
  <ChakraProvider theme={theme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ChakraProvider>
  </PersistGate>
  </Provider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
