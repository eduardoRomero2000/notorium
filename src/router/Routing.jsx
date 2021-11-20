import React from "react";
import { Switch, Route } from "react-router-dom";
import Calendar from "../pages/Calendar";
import Home from "../pages/Home/Home";
// import ProtectedRoute from '../system/router/PrivateRoute'
import Login from "../pages/Login/Login";
import Notes from "../pages/Notas";
import Reminders from "../pages/Recordatorios";
import Beginning from "../pages/Inicio";
import Pomodoros from "../pages/Pomodoros";
import Rutinas from "../pages/Rutinas";
import Preferences from "../pages/Preferencias";

const Routing = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Beginning} />
        <Route exact path="/notes" component={Notes} />
        <Route exact path="/pomodoros" component={Pomodoros} />
        <Route exact path="/reminders" component={Reminders} />
        <Route exact path="/rutinas" component={Rutinas} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/preferences" component={Preferences} />
      </Switch>
    </>
  );
};

export default Routing;
