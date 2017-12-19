import React from 'react';

export default class Sidebar extends React.Component {
  render() {
    return(
      <div className="sidebar">
        <div className="sidebar-title">Board</div>
        <div className="sidebar-options">
          <li className="sidebar-options-item">Dashboard</li>
          <li className="sidebar-options-item">Forecast</li>
          <li className="sidebar-options-item">Performance</li>
          <li className="sidebar-options-item">Filters</li>
          <li className="sidebar-options-item">Reporting</li>
        </div>
      </div>
    );
  }
}
