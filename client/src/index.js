import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './redux/store';
import App from './App';
import './index.css';
import {Auth0Provider} from "@auth0/auth0-react";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <Auth0Provider 
      domain="henrygame.us.auth0.com" 
      clientId="6wqCoCuj7szKMnkjzJUqjbhG40kZ9cwL" 
      redirectUri="https://henrygame.up.railway.app/" >
     <BrowserRouter>
        <App />
     </BrowserRouter>
    </Auth0Provider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);