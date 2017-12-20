import React from 'react';

export class ProgressBar extends React.Component {
  render() {
    return(
      <div className="gen-info-box">
        {/* <div class="progress-circle" data-progress="10"></div> */}
        <div class="progress-circle" data-progress="25"></div>
        {/* <div class="progress-circle" data-progress="50"></div> */}
        <div class="progress-circle" data-progress="75"></div>
        {/* <div class="progress-circle" data-progress="100"></div> */}
      </div>
    );
  }
}
