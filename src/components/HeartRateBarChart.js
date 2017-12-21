import React from "react";
import data from "../data/heart-rate.json";
import { ORFrame } from "semiotic";

import { ChartTitle } from "./ChartTitle.js";
import { ToggleButton } from "./ToggleButton.js";

import {LineChart} from 'react-easy-chart';


// BAR CHART EXAMPLE

const colors = [
  "#21f0b6",
  "#1f9383",
  "#85d2e1",
  "#154975",
  "#7377ec",
  "#8d30ba",
  "#dab9ff",
  "#1f3ca6",
  "#6f85a6",
  "#f75ef0"
];

const colorHash = {};

let colorI = 0;

data.forEach((t, i) => {
  if (!colorHash[t.studio]) {
    colorHash[t.studio] = colors[colorI];
    colorI = (colorI + 1) % 10;
  }
});

// Y AXIS
const orAxis = { orient: "left", tickFormat: d => d / 10000000 + "bpm" };

export default class HeartRateBarChart extends React.Component {
  render() {
    return (
      <div className="chart-test-element">
        <ChartTitle />
        <ToggleButton />
        <ORFrame
          size={[400, 200]}
          data={data}
          oAccessor={"studio"}
          rAccessor={"maxGross"}
          type={"bar"}
          style={d => ({
            fill: colorHash[d.studio],
            stroke: colorHash[d.studio]
          })}
          axis={orAxis}
          margin={{ top: 25, bottom: 50, right: 25, left: 75 }}
          oLabel={d => <text transform={"rotate(45)"} fontSize={"0.8rem"}>{d}</text>}
          oPadding={10}
          hoverAnnotation={true}
          tooltipContent={({ pieces }) => {
            return (
              <div className="tooltip-content">
                {pieces.map(p => p.title).join(", ")}
              </div>
            );
          }}
        />

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
