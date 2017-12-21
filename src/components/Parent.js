import React from 'react';

import { ToggleOption } from './ToggleOption.js';
import { Sibling } from './Sibling.js';
import { ChartTitle } from "./ChartTitle.js";

// Parent renders ChartTitle, ToggleOption, and Sibling Components
// Methods: changeName, changeData (not-used),

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    // INITIAL STATE
    this.state = {
      name: 'days',
      data: []
    };
    // METHOD BINDING
    this.changeName = this.changeName.bind(this);
    this.updateDate = this.changeData.bind(this);
  }

  // METHODS
  // changeName method used in ToggleOption component
  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  changeData(newData) {
    this.setState({
      data: newData
    });
  }

  render() {
    return(
      <div className="chart-test-element">
        <ChartTitle />
        <ToggleOption onChange={this.changeName} />
        <Sibling name={this.state.name} />
      </div>
    )
  }
}
