import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home';
// import Error404 from './pages/error404';
import 'typeface-roboto';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
       
        <Routes>
          <Route exact path="/"  element={<Home />} />
          {/* <Route path='*' element={<Error404 />} /> */}
        </Routes>
       
      </Router>
  </React.StrictMode>
);

reportWebVitals();
