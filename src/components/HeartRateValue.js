import React from 'react';
import Chart3 from './otherjsfiles/chart3.js';
// import formatBPMval from '../utils/formatBPMval';
import formatBPMval from './utilities/utilformatBPMval.js';
// import jsonData from '../data/interactivehrdata.json';
// import jsonData from './heartratedata.json';

// import formatPrice from '../utils/formatPrice';

export default function HeartrateValue({ data = {}, width, height }) {
  if (!data.bpm) return <div>loading...</div>;

  const bpm = Object.keys(data.bpm).map(k => ({
    time: k,
    bpmval: data.bpm[k]
  }));

  const currentBpm = bpm[bpm.length - 1].bpmval;
  const firstBpm = bpm[0].bpmval;
  const diffBpm = currentBpm - firstBpm;
  const hasIncreased = diffBpm > 0;

  return (
    <div className="hr">
      <div className="title">
        <div>
          Harry Smith's Heart Rate Values<br />
          {/* <small>last 30 days</small> */}
          <small>last 6 days</small>
          {/* toggle buttons can go here */}
        </div>
        <div className="spacer" />
        <div className="stats">
          <div className="current">
            Current BPM: {formatBPMval(currentBpm)}
          </div>
          <div className={hasIncreased ? 'diffIncrease' : 'diffDecrease'}>
            {hasIncreased ? '+' : '-'}
            {formatBPMval(diffBpm)}
          </div>
        </div>
      </div>
      <div className="chart">
        <Chart3
          data={bpm}
          parentWidth={width * 0.6}
          parentHeight={height * 0.45}
          margin={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 45
          }}
        />
      </div>
      <style jsx>{`
        .hr {
          color: white;
          background-color: #27273f;
          border-radius: 6px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
          display: flex;
          flex-direction: column;
        }
        .duration {
          font-weight: 100 !important;
          font-size: 14px;
          padding-bottom: 1px;
          border-bottom: 2px solid #6086d6;
        }
        .title,
        .stats {
          padding: 15px 15px 0;
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .title small {
          color: #6086d6;
        }
        .stats {
          padding: 0px;
          justify-content: flex-end;
          align-items: flex-end;
          flex-direction: column;
        }
        .current {
          font-size: 16px;
        }
        .diffIncrease,
        .diffDecrease {
          font-size: 12px;
          margin-left: .5rem;
        }
        .diffIncrease {
          color: #00f1a1;
        }
        .spacer {
          display: flex;
          flex: 1;
        }
        .chart {
          display: flex;
          flex: 1;
        }
      `}</style>
    </div>
  );
}
