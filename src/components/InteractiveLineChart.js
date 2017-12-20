import React from 'react';

import { withScreenSize } from '@vx/responsive';

// import Background from './Background.js';
// import Background from '../../components/background.js';
import HeartrateValue from './HeartRateValue.js';
// import HeartrateValue from '../../components/heartratevalue';
import jsonData from '../data/interactivehrdata.json';
// import jsonData from '../../components/heartratedata.json';

import { ChartTitle } from "./ChartTitle.js";



console.log(jsonData);
class InteractiveTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
        this.setState({
          data: jsonData
        });
  }

  render() {
    const { screenWidth, screenHeight } = this.props;
    const { data } = this.state;
    return (
      <div className="chart-test-element">
        <ChartTitle />
        {/* <Background width={screenWidth} height={screenHeight} /> */}
          <div className="center">
          <HeartrateValue data={data} width={screenWidth} height={screenHeight} />
          <p className="identity">
            {data.disclaimer}
          </p>
          </div>

        <style jsx>{`
          .app,
          .center {
            // position: absolute;
            // top: 0;
            // left: 0;
            // right: 0;
            // bottom: 0;
            overflow: hidden;
            display: flex;
            font-family: arial;
            flex-direction: column;
          }
          .identity {
            margin-top: 35px;
            font-size: 11px;
            color: white;
            opacity: 0.4;
          }
          .center {
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </div>
    );
  }
}

export default withScreenSize(InteractiveTest);
