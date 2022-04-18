import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GeneralInformation from './Components/GeneralInformation/GeneralInformation';
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
import Footer from './Components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <GeneralInformation />
    <hr/>
    <Education/>
    <hr/>
    <Experience/>
    <Footer/>
  </React.StrictMode>
);