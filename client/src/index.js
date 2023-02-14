import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from "react-redux";
// import store from './redux/store';
import axios from "axios";
import App from './App';
import './index.css';

axios.defaults.baseURL = "http://localhost:3001";

ReactDOM.render(
    // <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    // </Provider>,
    document.getElementById('root')
  );