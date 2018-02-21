import React from 'react'

const withHeading = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return (
        <div>
          <h2>Some heading</h2>
          <WrappedComponent  {...this.props} />
        </div>
      )
    }
  }
}

export default withHeading
