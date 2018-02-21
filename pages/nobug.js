import React from 'react'
import './nobug.css'

export default () => (
  <React.Fragment>
    <div className="test-class-nobug">This should be blue</div>
    <p>
      This page will render just fine whether or not it is rendered client-side or server-side
    </p>
  </React.Fragment>
)
