import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { addCounter, decrementCounter, addCounterAsync } from './redux/app/actions';

class Home extends React.Component {
  render () {
    return (
      <div>
        <p>{this.props.counter}</p>
        <button onClick={() => this.props.inc()}>Add</button>
        <button onClick={() => this.props.incAsync()}>Add Async</button>
        <button onClick={() => this.props.dec()}>Dec</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.app.counter
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    inc: () => dispatch(addCounter()),
    incAsync: () => dispatch(addCounterAsync()),
    dec: () => dispatch(decrementCounter())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
