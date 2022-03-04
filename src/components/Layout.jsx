import React from 'react'
import Navbar from './Navbar'

export const Layout = (props) => {
  // const children = this.props.children
  return (
    <>
      <Navbar />
      {props.children}
    </>
  )
}
