import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../screens/Home'
import Sample from '../screens/Sample'
import NoMatch from '../screens/NoMatch'

interface Props {}

const RouteController = (props: Props) => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sample/" component={Sample} />

      <Route component={NoMatch} />
    </Switch>
  </Router>
)

export default RouteController
