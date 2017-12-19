import React from 'react';
import {Patient} from './Patient.js';
import {Graph} from './GraphType.js';

export default class Main extends React.Component {
  render() {
    return(
        <div className="main-elements">
          <div className="main-title">Patient Monitoring</div>
          <Patient />
          <Graph />
          <Graph />
          <Graph />
          <Graph />
        </div>
    );
  }
}
