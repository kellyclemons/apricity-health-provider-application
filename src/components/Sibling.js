// Sibling
import React from 'react';
import { BarChart } from 'react-easy-chart';
import { LineChart } from 'react-easy-chart';

// import SiblingThree from './SiblingThree.js';
// import {Legend} from 'react-easy-chart';

export class Sibling extends React.Component {
  render() {
    let name = this.props.name;
    // let data = this.props.data;
    return(
      <div>

        <div className="toggle-container">
        <p className="toggle-title">Harry Smith's Heart Rates</p>
        {/* <p>Heart Rate Data</p> */}
        <p className="toggle-info">past 6 {name}:</p>
        </div>

        <BarChart
          axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
          axes
          // colorBars
          height={250}
          width={650}
          barWidth={20}
          // xType={'time'}
          xDomainRange={['1-Jan-17', '08-Jan-17']}
          yDomainRange={[0, 100]}
          data={[
            { x: '02-Jan-17', y: 90 },
            { x: '03-Jan-17', y: 80 },
            { x: '04-Jan-17', y: 75 },
            { x: '05-Jan-17', y: 100 },
            { x: '06-Jan-17', y: 65 },
            { x: '07-Jan-17', y: 85 }
          ]}
        />

        {/* <LineChart
    axisLabels={{x: 'Total Revenue', y: 'January'}}
    margin={{top: 10, right: 30, bottom: 50, left: 70}}
    yType={'time'}
    axes
    interpolate={'cardinal'}
    tickTimeDisplayFormat={'%a'}
    width={500}
    height={500}
    data={[
      [
        { x: 10, y: '1-Jan-15' },
        { x: 20, y: '10-Jan-15' },
        { x: 40, y: '21-Jan-15' },
        { x: 80, y: '31-Jan-15' }
      ], [
        { x: 0, y: '1-Jan-15' },
        { x: 15, y: '10-Jan-15' },
        { x: 20, y: '21-Jan-15' },
        { x: 25, y: '31-Jan-15' }
      ]
    ]}
  /> */}

  {/* <LineChart
    xType={'time'}
    axes
    grid
    verticalGrid
    interpolate={'cardinal'}
    lineColors={['pink', 'cyan']}
    width={750}
    height={250}
    data={[
      [
        { x: '1-Jan-15', y: 10 },
        { x: '1-Feb-15', y: 15 },
        { x: '1-Mar-15', y: 13 },
        { x: '1-Apr-15', y: 15 },
        { x: '1-May-15', y: 10 }
      ]
    ]}
  />; */}

      </div>
    )
  }
}
