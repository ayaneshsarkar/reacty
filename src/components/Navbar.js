import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <Fragment>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">Reacty</Link>

          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ml-auto">
              <li><Link to="/" className="nav-item nav-link">Home</Link></li>
              <li><Link to="/createtask" className="nav-item nav-link">Create Task</Link></li>
            </div>
          </div>
        </div>
      </nav>

    </Fragment>
  )

}


export default Navbar;