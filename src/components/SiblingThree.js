import React from "react";

// import data from "../data/hr-data.json";
import {LineChart} from 'react-easy-chart';
// import { ORFrame } from "semiotic";
// import { ChartTitle } from "./ChartTitle.js";
// import { ToggleButton } from "./ToggleButton.js";
// import { ResponsiveXYFrame } from "semiotic";
// import { scaleTime } from "d3-scale";
// import { AnnotationCalloutElbow } from "react-annotation";

// BAR CHART EXAMPLE

// const colors = [
//   "#BAE5FF",
//   "#BAE5FF",
//   "#BAE5FF",
//   "#BAE5FF",
//   "#BAE5FF",
//   "#21f0b6",
//   "#1f9383",
//   "#85d2e1",
//   "#154975",
//   "#7377ec",
//   "#8d30ba",
//   "#dab9ff",
//   "#1f3ca6",
//   "#6f85a6",
//   "#f75ef0"
// ];
//
// const colorHash = {};
//
// let colorI = 0;
//
// data.forEach((t, i) => {
//   if (!colorHash[t.tframe]) {
//     colorHash[t.tframe] = colors[colorI];
//     colorI = (colorI + 1) % 10;
//   }
// });

// Y AXIS
// const orAxis = { orient: "left", tickFormat: d => d / 10000000 + "bpm" };

export class SiblingThree extends React.Component {

  render() {
    return (
      <div className="chart-test-element">
        {/* <ChartTitle />
        <ToggleButton /> */}
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
                { x: 10, y: 40 },
                { x: 20, y: 30 },
                { x: 30, y: 25 },
                { x: 40, y: 60 },
                { x: 50, y: 22 },
                { x: 60, y: 9 }
              ]
            ]}
          />

      </div>
    );
  }
}
