// Sibling

import React from 'react';

export class Sibling extends React.Component {
  render() {
    let name = this.props.name
    return(
      <div>
        <h4>Heart rate past 6 {name}</h4>
        {/* <h2>Isn't {name} a great name? </h2>
        <h3>Sure am glad {name} is my name.</h3> */}
      </div>
    )
  }
}
