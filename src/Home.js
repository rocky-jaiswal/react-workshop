import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  _inc() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }))
  }

  _dec() {
    this.setState((prevState) => ({
      counter: prevState.counter - 1
    }))
  }

  render () {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={() => this._inc()}>Add</button>
        <button onClick={() => this._dec()}>Dec</button>
      </div>
    )
  }
}

export default Home
