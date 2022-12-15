import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import { hydrateRoot } from "react-dom/client";


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

hydrateRoot(document.getElementById('root')!, <BrowserRouter><App /></BrowserRouter>);
