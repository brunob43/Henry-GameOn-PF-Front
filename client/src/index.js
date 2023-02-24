import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './redux/store';
import App from './App';
import {Auth0Provider} from "@auth0/auth0-react";
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <ChakraProvider>
    <ColorModeScript initialColorMode="system"/>
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
  </ChakraProvider>
);