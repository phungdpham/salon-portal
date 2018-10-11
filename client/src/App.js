import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Appointment from "./pages/Appointment";
import Topbar from "./components/Topbar";
import ServiceMenu from "./pages/ServiceMenu";




const App = () => (
  <Router>
    <div>
      <Topbar />
      <Switch>
          <Route exact path="/appointment" component={Appointment} />
          <Route exact path="/service" component={ServiceMenu} />
          <Route exact path="/groups" component={ServiceMenu} />
          <Route exact path="/groups/:id" component={ServiceMenu} />
          <Route exact path="/services" component={ServiceMenu} />
          <Route exact path="/service/:id" component={ServiceMenu} />


      </Switch>
    </div>
  </Router>
);

export default App;
