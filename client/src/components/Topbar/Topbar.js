import React from "react";

const Topbar = () => (
    <nav className="navbar navbar-expand-lg navbar-warning bg-warning mb-2">
    <a className="navbar-brand text-dark" href="/"><h3>Salon Portal</h3></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end mx-5" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link text-dark font-weight-bold" href="/dashboard">Dashboard <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark font-weight-bold" href="/appointment">Appointment</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-dark font-weight-bold" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Setting
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" href="/service">Service Menu</a>
            <a className="dropdown-item" href="/workschedule">Work Schedule</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>


);


export default Topbar;