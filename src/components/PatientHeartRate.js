import React from 'react';
import data from "../data/patient-heart-rate.json";

import { ResponsiveXYFrame } from "semiotic";
import { scaleTime } from "d3-scale";
import { AnnotationCalloutElbow } from "react-annotation";

// LINE CHART

const tooltipCreator = d => (
  <div className="tooltip-content">
    <p>{d.parentLine.bpmReading}</p>
    <p>Patient Heart Rate {d.patientBPM}</p>
    <p>Week {d.week}</p>
  </div>
);

export default class PatientHeartRateChart extends React.Component {
  render() {
    const axes = [
      {
        orient: "left",
        tickFormat: d => d / 10000000 + "m"
      },
      { orient: "bottom", tickFormat: d => d.getMonth() }
    ];
    const annotations = [
      {
        type: "y",
        grossWeekly: 150000000,
        label: "High Risk"
      },
      {
        date: "2016-07-01",
        title: "Finding Dory",
        dx: 30,
        dy: -50,
        type: AnnotationCalloutElbow,
        label: "Very important day"
      }
    ];
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <ResponsiveXYFrame
          size={[400, 200]}
          // responsiveWidth={true}
          lines={data.filter((d, i) => i < 50)}
          lineStyle={d => ({
            stroke: d.bpmReading.length > 10 ? "blue" : "red",
            fill: d.bpmReading.length > 10 ? "blue" : "red",
            strokeOpacity: 1,
            fillOpacity: 0.25
          })}
          lineType={"line"}
          lineIDAccessor={d => d.bpmReading}
          xScaleType={scaleTime()}
          xAccessor={d => new Date(d.date)}
          yAccessor={"patientBPM"}
          hoverAnnotation={true}
          tooltipContent={tooltipCreator}
          axes={axes}
          annotations={annotations}
        />
      </div>
    );
  }
}


// export default class PatientHeartRateChart extends React.Component {
//   render() {
//     return(
//       <div>
//
//       </div>
//     );
//   }
// }
