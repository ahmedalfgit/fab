import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavBarMemu  from './components/header';
import FooterBar from './components/footer'
import FabProject from './components/mainFabProject';

const  App = () => {
    return (
      <Fragment>
        <NavBarMemu />
        <main className="fluid-container">
        <FabProject />
        </main>
        {/* <FooterBar /> */}
      </Fragment>
    );
};

render(<App />, document.getElementById("root"));