import React from "react";

const Topbar = () => (
    <nav class="navbar navbar-expand-lg navbar-warning bg-warning mb-2">
    <a class="navbar-brand text-dark" href="#"><h3>Salon Portal</h3></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end mx-5" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link text-dark font-weight-bold" href="/dashboard">Dashboard <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark font-weight-bold" href="/appointment">Appointment</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-dark font-weight-bold" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Setting
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="/service">Service Menu</a>
            <a class="dropdown-item" href="/workschedule">Work Schedule</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>


);


export default Topbar;