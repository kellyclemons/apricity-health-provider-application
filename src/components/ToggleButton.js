import React from 'react';

export class ToggleButton extends React.Component {
  render() {
    return(
      <div className="filter-container">
        <p className="filter-text">Filter by:</p>
        <div className="button-container">
          <button className="toggleButton">6 days</button>
          <button className="toggleButton">6 weeks</button>
          <button className="toggleButton">6 months</button>
        </div>
      </div>

    );
  }
}
