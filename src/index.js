import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css';
import "./assets/fonts/fontstyle.css";
import "./assets/css/base.css";
import "./assets/css/styling.css";
import "./assets/css/custom.css";

import "./assets/css/custom_dropdown.css";
import "./assets/css/GalaxyFold.css";
import "./assets/css/plan.css";
import "./assets/css/planmedia.css";
import "./assets/css/plantabmedia.css";
import "./assets/css/tabletmedia.css";
import "./assets/css/media.css";
import "./assets/css/darkmode.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
