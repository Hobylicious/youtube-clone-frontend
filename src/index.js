import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Auth0Provider
    domain="dev-lhmvhvni.us.auth0.com"
    clientId="BwYOxV0vRoviTd9gS1wJueRa8GfxRAmY"
    redirectUri={window.location.origin}
    >
       <App />
  </Auth0Provider>
  </Router>
);

