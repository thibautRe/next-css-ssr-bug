import React from 'react'
import TestComponent from 'ssr-bug-subpackage'

console.log(TestComponent);

export default () => (
  <React.Fragment>
    <TestComponent />
    <p>
      If you access this page with client-side routing (from the main page), the page will render just fine.
      But if you try to reload the page (triggering the SSR), it will throw an
      error when trying to load the CSS file in the subpackage
    </p>
  </React.Fragment>
)
