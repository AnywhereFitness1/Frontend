import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import Store from "./Store";

import PrivateRoute from "./PrivateRoute";
// end of Redux

// components
import Header from "./components/Header";
import Login from "./components/Login";
import SignUp from "./components/Signup";

import ClientDashboard from "./components/client/ClientDashboard";
import ClientClass from "./components/client/ClientClass";
import MyReservations from "./components/client/MyReservations";
import ClNavBar from "./components/client/ClNavBar";

import InstructorDashboard from "./components/instructor/InstructorDashboard";
import UpdateClass from "./components/instructor/UpdateClass";
import InstructorClass from "./components/instructor/InstructorClass";
import InNavBar from "./components/instructor/InNavBar";
import AddClass from "./components/instructor/AddClass";

function App() {
  const [isAuthenticated, SetisAuthenticated] = useState(
    localStorage.getItem("token") ? true : false
  );

  const setAuth = boolean => {
    SetisAuthenticated(boolean);
  };

  console.log(isAuthenticated);

  return (
    <Provider store={Store}>
      <Header />

      <ClNavBar setAuth={setAuth} isAuthenticated={isAuthenticated} />
      <div style={{ marginTop: "2rem" }}></div>
      <InNavBar setAuth={setAuth} isAuthenticated={isAuthenticated} />
      <Route exact path="/signup" component={SignUp} />

      <Switch>
        <PrivateRoute exact path="/dashboard" component={ClientDashboard} />
        <PrivateRoute
          exact
          path="/instructordashboard"
          component={InstructorDashboard}
        />
        <PrivateRoute
          exact
          path="/Instructor-Class/:id"
          component={InstructorClass}
        />
        <PrivateRoute exact path="/Client-Class/:id" component={ClientClass} />
        <PrivateRoute
          exact
          path="/Reserved-Class/"
          component={MyReservations}
        />

        <PrivateRoute exact path="/update-class/:id" component={UpdateClass} />
        <PrivateRoute exact path="/update-class" component={UpdateClass} />
        <PrivateRoute exact path="/add-class" component={AddClass} />
        <Route exact path="/" component={Login} />
      </Switch>
    </Provider>
  );
}

export default App;
