import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const [progress, setProgress] = useState(0);

  const ApiKey = process.env.REACT_APP_NEWNEWS_API;

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={3}
        />
        <Switch>
          <Route exact path="/">
            <News setProgress={setProgress} ApiKey={ApiKey} key="general" pageSize={15} country="in" category="general" />
          </Route>
          <Route exact path="/about">
            <News setProgress={setProgress} ApiKey={ApiKey} key="about" pageSize={15} country="in" category="about" />
          </Route>
          <Route exact path="/business">
            <News setProgress={setProgress} ApiKey={ApiKey} key="business" pageSize={15} country="in" category="business" />
          </Route>
          <Route exact path="/entertainment">
            <News setProgress={setProgress} ApiKey={ApiKey} key="entertainment" pageSize={15} country="in" category="entertainment" />
          </Route>
          <Route exact path="/health">
            <News setProgress={setProgress} ApiKey={ApiKey} key="health" pageSize={15} country="in" category="health" />
          </Route>
          <Route exact path="/science">
            <News setProgress={setProgress} ApiKey={ApiKey} key="science" pageSize={15} country="in" category="science" />
          </Route>
          <Route exact path="/sports">
            <News setProgress={setProgress} ApiKey={ApiKey} key="sports" pageSize={15} country="in" category="sports" />
          </Route>
          <Route exact path="/technology">
            <News setProgress={setProgress} ApiKey={ApiKey} key="technology" pageSize={15} country="in" category="technology" />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App