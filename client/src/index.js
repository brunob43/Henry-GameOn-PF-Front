import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store, {Persistor} from './redux/store';
import App from './App';
import './index.css';
import {Auth0Provider} from "@auth0/auth0-react";
import { PersistGate } from 'redux-persist/integration/react'
// import { persistStore } from 'redux-persist';
import {ChakraProvider} from "@chakra-ui/react"
// import { Spinner } from '@chakra-ui/react'

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

// const persistor = persistStore(store)

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <ChakraProvider>
    <ColorModeScript initialColorMode="system" />
    <Provider store={store}>
      <Auth0Provider
        domain="henrygameon.eu.auth0.com"
        clientId="I8Pua9FRXYxAahGm0gH1UJonTh1Xspjc"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <BrowserRouter>
        <PersistGate loading={null} persistor={Persistor}>
          <App />
        </PersistGate>
        </BrowserRouter>
      </Auth0Provider>
    </Provider>
  </ChakraProvider>
);