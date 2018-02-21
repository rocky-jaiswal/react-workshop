import React from 'react'

import withHeading from './withHeading'

const AnotherGreeting = () => (
  <h1>Hello World...</h1>
)

export default withHeading(AnotherGreeting)
