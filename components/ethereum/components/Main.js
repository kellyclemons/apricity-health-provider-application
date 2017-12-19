import React from 'react';
import Navbar from './Navbar.js';
import GenInfo from './GenInfo.js';
// import {Patient} from './Patient.js';
import {Graph} from './GraphType.js';
import PatientHeartRateChart from './PatientHeartRate.js';


export default class Main extends React.Component {
  render() {
    return(
        <div className="main-elements">
          <Navbar />
          {/* <div className="main-title">Patient Monitoring</div> */}
          <GenInfo />
          <div>
            <Graph />
            <Graph />
            <Graph />
          </div>
        </div>
    );
  }
}
