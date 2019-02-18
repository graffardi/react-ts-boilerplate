import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../screens/Home'

interface Props {}

const RouteController = (props: Props) => (
  <Router>
    <Route exact path="/" component={Home} />
  </Router>
)

export default RouteController
