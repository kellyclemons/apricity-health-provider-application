import React from 'react';

import { ToggleOption } from './ToggleOption.js';
import { Sibling } from './Sibling.js';
import { ChartTitle } from "./ChartTitle.js";

// import {
//
// }

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
    // this.updateData = this.changeData.bind(this);
  }

  // METHODS
  // changeName method used in ToggleOption component
  changeName(newName) {
    this.setState({
      name: newName
      // data: newData
    });
  if(newName === 'days') {
    this.setState({
      data: [
            { x: '02-Jan-17', y: 90 },
            { x: '03-Jan-17', y: 80 },
            { x: '04-Jan-17', y: 75 },
            { x: '05-Jan-17', y: 100 },
            { x: '06-Jan-17', y: 65 }
          ]
    })
  }
  else if(newName === 'weeks') {
    this.setState({
      data: [
            { x: '02-Jan-17', y: 90 },
            { x: '07-Jan-17', y: 80 },
            { x: '04-Jan-17', y: 75 }
          ]
    })
  }
  else if(newName === 'months') {
    this.setState({
      data: [
            { x: '02-Jan-17', y: 90 },
            { x: '03-Jan-17', y: 80 },
            { x: '04-Jan-17', y: 75 },
            { x: '05-Jan-17', y: 100 },
            { x: '06-Jan-17', y: 65 },
            { x: '07-Jan-17', y: 85 }
          ]
    })
  }

  }

  // changeData(newData) {
  //   this.setState({
  //     data: newData
  //   });
  // }

  render() {
    return(
      <div className="chart-test-element">
        <ChartTitle />
        <ToggleOption onChange={this.changeName} />
        <Sibling name={this.state.name} data={this.state.data} />
      </div>
    )
  }
}
