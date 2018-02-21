import React from 'react'
import { connect } from 'react-redux'

import { setDate } from './redux/app/actions';

class Clock extends React.Component {

  componentDidMount () {
    this.timerID = setInterval(
      () => this.props.setDate(new Date()),
      1000
    )
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  render () {
    return (
      <div>
        <h2>It is {this.props.currentDate.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentDate: state.app.currentDate
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    setDate: (payload) => dispatch(setDate(payload))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clock)
