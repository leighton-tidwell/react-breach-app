import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"

// Component File
import BreachContainer from './components/BreachContainer';

// Stylesheet
import "./App.css"

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <BreachContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

