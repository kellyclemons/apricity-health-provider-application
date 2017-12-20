import React from 'react';

export class ProgressBar extends React.Component {
  render() {
    return(
      <div className="gen-info-box">
        {/* <div className="progress-circle" data-progress="10"></div> */}
        <div className="progress-circle" data-progress="25"></div>
        {/* <div className="progress-circle" data-progress="50"></div> */}
        <div className="progress-circle" data-progress="75"></div>
        {/* <div className="progress-circle" data-progress="100"></div> */}
      </div>
    );
  }
}
