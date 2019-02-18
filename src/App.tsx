import React, { Component } from 'react'

import RouteController from './services/RouteController'
import SampleProvider from './stores/SampleContext'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SampleProvider>
          <Header />
          <RouteController />
        </SampleProvider>
      </div>
    )
  }
}

export default App
