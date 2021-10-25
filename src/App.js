import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  }

  ApiKey = process.env.REACT_APP_NEWNEWS_API;

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={3}
          />
          <Switch>
            <Route exact path="/">
              <News setProgress={this.setProgress} ApiKey={this.ApiKey} key="general" pageSize={15} country="in" category="general" />
            </Route>
            <Route exact path="/about">
              <News setProgress={this.setProgress} ApiKey={this.ApiKey} key="about" pageSize={15} country="in" category="about" />
            </Route>
            <Route exact path="/business">
              <News setProgress={this.setProgress} ApiKey={this.ApiKey} key="business" pageSize={15} country="in" category="business" />
            </Route>
            <Route exact path="/entertainment">
              <News setProgress={this.setProgress} ApiKey={this.ApiKey} key="entertainment" pageSize={15} country="in" category="entertainment" />
            </Route>
            <Route exact path="/health">
              <News setProgress={this.setProgress} ApiKey={this.ApiKey} key="health" pageSize={15} country="in" category="health" />
            </Route>
            <Route exact path="/science">
              <News setProgress={this.setProgress} ApiKey={this.ApiKey} key="science" pageSize={15} country="in" category="science" />
            </Route>
            <Route exact path="/sports">
              <News setProgress={this.setProgress} ApiKey={this.ApiKey} key="sports" pageSize={15} country="in" category="sports" />
            </Route>
            <Route exact path="/technology">
              <News setProgress={this.setProgress} ApiKey={this.ApiKey} key="technology" pageSize={15} country="in" category="technology" />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}