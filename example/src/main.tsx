import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configDataSet } from './DataSet/config';
import './index.css';

configDataSet({
  autoQuery: true,
  axiosConfig: { baseURL: 'https://pokeapi.co/api/v2/' },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
