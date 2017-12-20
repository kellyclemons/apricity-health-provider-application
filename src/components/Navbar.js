import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return(
      <div className="navbar">
        <div className="navbar-options">
          <a className="navbar-options-item" href="">Profile</a>
          <a className="navbar-options-item" href="">Logout</a>
        </div>
        <div className="navbar-general">
          <div className="navbar-general-info">Apricity Health Provider Web Application</div>
        </div>
      </div>
    );
  }
}
