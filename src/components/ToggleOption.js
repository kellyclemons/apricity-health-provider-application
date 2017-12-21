// CHILD

// ToggleOption renders dropdown filters
// method binding for handleChange method
// handleChange method is function that can be passed as event object
// takes event obj as argument, extracts the name we want for that event object,
// and calls event handler passing in extra name

import React from 'react';

export class ToggleOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return(
      <div className="filter-container">
        <p className="filter-text">Filter chart data by:</p>
        <select id="time-frame" className="button-container" onChange={this.handleChange}>
          <option value="days" className="toggleButton">6 days</option>
          <option value="weeks" className="toggleButton">6 weeks</option>
          <option value="months" className="toggleButton">6 months</option>
        </select>
      </div>

    );
  }
}
