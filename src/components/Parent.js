import React from 'react';

import { ToggleOption } from './ToggleOption.js';
import { Sibling } from './Sibling.js';
import { ChartTitle } from "./ChartTitle.js";

// import {SiblingTwo} from './SiblingTwo.js';
// import {SiblingThree} from './SiblingThree.js';

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'days',
      data: []
    };
    // INITIAL STATE
    this.changeName = this.changeName.bind(this);
    this.updateDate = this.changeData.bind(this);
  }

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

        {/* <SiblingTwo /> */}
        {/* <SiblingThree /> */}
      </div>
    )
  }
}
