import React from 'react';
import Navbar from './Navbar.js';
import GenInfo from './GenInfo.js';

import {LineChart} from 'react-easy-chart';
import {BarChart} from 'react-easy-chart';

import PatientHRBarChart from './PatientHRBarChart.js';
import HeartRateBarChart from './HeartRateBarChart.js';
import HeartRateLineChart from './HeartRateLineChart.js';
// import PatientHeartRateChart from './PatientHeartRate.js';

// import {Patient} from './Patient.js';
// import {Graph} from './GraphType.js';

import InteractiveLineChart from './InteractiveLineChart.js';

import Custom from './Custom.js';
// import BarChart from './TestBarChart.js';
// import LineChart from './TestLineChart.js';

export default class Main extends React.Component {
  render() {
    return(
        <div className="main-elements">
          <Navbar />
          {/* <div className="main-title">Patient Monitoring</div> */}
          <GenInfo />
          <div className="chart-elements">
            <PatientHRBarChart />
            <HeartRateBarChart />
            <HeartRateLineChart />

            {/* <PatientHeartRateChart />  */}

            <InteractiveLineChart />
            <Custom />

            <LineChart
                axes
                dataPoints
                xDomainRange={[0, 100]}
                yDomainRange={[0, 100]}
                width={500}
                height={250}
                interpolate={'cardinal'}
                data={[
                  [
                    { x: 10, y: 25 },
                    { x: 20, y: 10 },
                    { x: 30, y: 25 },
                    { x: 40, y: 10 },
                    { x: 50, y: 12 },
                    { x: 60, y: 25 }
                  ], [
                    { x: 10, y: 40 },
                    { x: 20, y: 30 },
                    { x: 30, y: 25 },
                    { x: 40, y: 60 },
                    { x: 50, y: 22 },
                    { x: 60, y: 9 }
                  ]
                ]}
              />


              <BarChart
        axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
        axes
        colorBars
        height={250}
        width={650}
        barWidth={20}
        xType={'time'}
        tickTimeDisplayFormat={'%a'}
        xDomainRange={['1-Jan-15', '30-Jan-15']}
        data={[
          { x: '10-Jan-15', y: 20 },
          { x: '12-Jan-15', y: 10 },
          { x: '15-Jan-15', y: 33 },
          { x: '17-Jan-15', y: 42 },
          { x: '18-Jan-15', y: 35 },
          { x: '22-Jan-15', y: 20 },
          { x: '23-Jan-15', y: 25 },
          { x: '24-Jan-15', y: 32 },
          { x: '25-Jan-15', y: 43 },
          { x: '26-Jan-15', y: 20 },
          { x: '27-Jan-15', y: 12 },
          { x: '28-Jan-15', y: 21 },

        ]}
      />

            {/* <Graph /> */}
            {/* <Graph /> */}
            {/* <Graph /> */}
            {/* <Graph /> */}
          </div>
        </div>
    );
  }
}
