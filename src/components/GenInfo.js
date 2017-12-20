import React from 'react';
import {Patient} from './Patient.js';

import {ProgressBar} from './ProgressBar.js';

export default class GenInfo extends React.Component {
  render() {
    return(
      <div className="gen-info">
        <Patient />
        <div className="gen-info-box">Breakdown Box</div>
        {/* <div className="gen-info-box">Circle Box</div> */}
        <ProgressBar />
        <div className="gen-info-box">Chart Box</div>
      </div>
    );
  }
}
