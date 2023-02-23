import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './redux/store';
import App from './App';
import './index.css';
import {Auth0Provider} from "@auth0/auth0-react";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist';
import {ChakraProvider} from "@chakra-ui/react"
import { Spinner } from '@chakra-ui/react'

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const persistor = persistStore(store)

ReactDOM.render(
  <ChakraProvider>
  <PersistGate loading={
  <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
  />} persistor={persistor}>
    <Provider store={store}>
      <Auth0Provider
      domain="henrygameon.eu.auth0.com"
      clientId="I8Pua9FRXYxAahGm0gH1UJonTh1Xspjc"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>      
      </Auth0Provider>
    </Provider>
  </PersistGate>
  </ChakraProvider>,
  document.getElementById('root')
);