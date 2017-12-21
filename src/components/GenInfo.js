import React from 'react';
import {Patient} from './Patient.js';

import {ProgressBar} from './ProgressBar.js';
import {BreakdownBox} from './BreakdownBox.js';
import {ChartBox} from './ChartBox.js';

export default class GenInfo extends React.Component {
  render() {
    return(
      <div className="gen-info">
        <Patient />
        <BreakdownBox />
        {/* <div className="gen-info-box">Breakdown Box</div> */}
        {/* <div className="gen-info-box">Circle Box</div> */}
        <ProgressBar />
        <ChartBox />
        {/* <div className="gen-info-box">Chart Box</div> */}
      </div>
    );
  }
}
