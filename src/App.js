import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import Clock from './Clock'

class App extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/clock' component={Clock} />
      </Switch>
    )
  }
}

export default App
