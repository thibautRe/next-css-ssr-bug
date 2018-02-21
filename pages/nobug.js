import React from 'react'
import styles from './nobug.css'

export default () => (
  <React.Fragment>
    <div className={styles.testClass}>This should be blue</div>
    <p>
      This page will render just fine whether or not it is rendered client-side or server-side
    </p>
  </React.Fragment>
)
