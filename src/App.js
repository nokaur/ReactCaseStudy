import React, { Component } from "react";
import {
  BrowserRouter as Router,
  RoutePath,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

//import Reception from "./Hotel_Management/Reception/ReceptionIndex";
import "./styles.css";

import Login from "./HotelManagement/Login";

class App extends Component {
  state = {
    Role: ""
  };
  OnSubmit = (Username) => {
    if (Username === "owner") {
    } else if (Username === "manager") {
    } else if (Username === "reception") {
      return <Redirect to="/reception" />;
    }
    return;
  };
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            {/* <Route path="/login"> */}
            <Login OnSubmit={this.OnSubmit} />
            {/* </Route> */}
            {/* <Route path="/reception" to={Reception} /> */}
            {/* <Reception/> */}
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;

// }
// import React, { Component } from "react";

// class Reception extends Component {
//   render() {
//     alert("index");
//     return <div>hello</div>;
//   }
// }

// export default Reception;
