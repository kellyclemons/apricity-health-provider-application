import React, { Component } from 'react';
import './styles/App.css';
import './styles/GenInfo.css'; // GENERAL INFO STYLES
import './styles/GenResets.css'; // RESET AND COLOR VARIABLE STYLES
import './styles/Main.css'; // MAIN MEDICAL STYLES
import './styles/Navbar.css'; // NAVBAR STYLES
import './styles/Patient.css'; // PATIENT STYLES
import './styles/Provider.css'; // PROVIDER STYLES
import './styles/Sidebar.css'; // SIDEBAR STYLES
// import './styles/TestComponent.css'; // REMOVE LATER

import Sidebar from './components/Sidebar.js';
// import {MainMedical} from './components/main-medical.js';
// import {Patient} from './components/patient.js'

// import BarChart from './components/TestBarChart.js';
// import LineChart from './components/TestLineChart.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Apricity Health Provider Web Application</h1>
        </header>

        {/* <div className="Testing-container">
          <BarChart />
          <LineChart />
        </div> */}

        <div className="App-container">
          <Sidebar />
        </div>

      </div>
    );
  }
}

export default App;
