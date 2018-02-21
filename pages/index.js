import React from 'react'
import Link from 'next/link'

export default () => (
  <React.Fragment>
    <div><Link href="/bug"><a>Bug page</a></Link></div>
    <div><Link href="/nobug"><a>No bug page</a></Link></div>
  </React.Fragment>
)
