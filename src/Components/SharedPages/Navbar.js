import React from 'react'
import Sharednavbar from './Sharednavbar'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <Sharednavbar/>
    <Outlet/>
    </>
  )
}

export default Navbar