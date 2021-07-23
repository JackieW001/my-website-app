import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import HomePage from './components/homepage'
import ProjectsPage from './components/projectspage'
import ArtPage from './components/artpage'

import { Route, Link, Switch, withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <main>
        <div id="colorlib-page">
          <div id="container-wrap">

            <Sidebar></Sidebar>

            <Switch>
              <Route exact path="/" component={HomePage}></Route>
              <Route exact path="/projects" component={ProjectsPage}></Route>
              <Route exact path="/art" component={ArtPage}></Route>
            </Switch>
          </div>
        </div>
      </main>

    );
  }
}

export default App;