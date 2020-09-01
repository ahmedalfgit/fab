import React, { Fragment } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import NavBarMemu from "./components/header";
import FooterBar from "./components/footer";
import Home from "./Home";
import Design from "./Design";
import Laser from "./Laser";
import Press from "./Press";
import Flex from "./Flex";
import Weld from "./Welding";

const App = () => {
  return (
    <Fragment>
      <NavBarMemu />
      <Router>
        <Home path="/" />
        <Design path="/Design" />
        <Laser path="/Laser" />
        <Press path="/Press" />
        <Flex path="/Flex" />
        <Weld path="/Weld" />
      </Router>
      <FooterBar />
    </Fragment>
  );
};

ReactDOM.hydrate(<App />, document.getElementById("root"));
