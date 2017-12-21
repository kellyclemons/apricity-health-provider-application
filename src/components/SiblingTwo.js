import React from "react";

import data from "../data/hr-data.json";
import { ORFrame } from "semiotic";
import { ChartTitle } from "./ChartTitle.js";
import { ToggleButton } from "./ToggleButton.js";
// import { ResponsiveXYFrame } from "semiotic";
// import { scaleTime } from "d3-scale";
// import { AnnotationCalloutElbow } from "react-annotation";

// BAR CHART EXAMPLE

const colors = [
  "#BAE5FF",
  "#BAE5FF",
  "#BAE5FF",
  "#BAE5FF",
  "#BAE5FF",
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
  if (!colorHash[t.tframe]) {
    colorHash[t.tframe] = colors[colorI];
    colorI = (colorI + 1) % 10;
  }
});

// Y AXIS
const orAxis = { orient: "left", tickFormat: d => d / 10000000 + "bpm" };

export class SiblingTwo extends React.Component {
  render() {
    return (
      <div className="chart-test-element">
        {/* <ChartTitle />
        <ToggleButton /> */}
        <ORFrame
          size={[400, 200]}
          data={data}
          oAccessor={"tframe"}
          rAccessor={"bpmReading"}
          type={"bar"}
          style={d => ({
            fill: colorHash[d.tframe],
            stroke: colorHash[d.tframe]
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

      </div>
    );
  }
}
