import React from 'react'

class Messages extends React.PureComponent {
  renderMessages () {
    return (
      this.props.messages.map((item, idx) => (
        <p key={idx}>{item.name}</p>
      ))
    )
  }

  render () {
    return (
      <div>
        {this.renderMessages()}
      </div>
    )
  }
}

export default Messages
