import React from 'react';

import { ToggleOption } from './ToggleOption.js';
import { Sibling } from './Sibling.js';
// import {SiblingTwo} from './SiblingTwo.js';
import {SiblingThree} from './SiblingThree.js';

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'days'};
    // INITIAL STATE
    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return(
      <div>
        <ToggleOption onChange={this.changeName} />
        <Sibling name={this.state.name} />
        {/* <SiblingTwo /> */}
        <SiblingThree />
      </div>
    )
  }
}
