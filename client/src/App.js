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
          {/* <Route exact path="/" component={}/> */}
          <Route exact path="/appointment" component={Appointment} />
          <Route exact path="/service" component={ServiceMenu} />
      </Switch>
    </div>
  </Router>
);

export default App;
