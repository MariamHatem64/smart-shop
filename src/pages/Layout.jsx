import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Scrolltotop from '../component/Scrolltitop.jsx'

const Layout = () => {
  return (
    <>
      <Scrolltotop />
      <Navbar />
      <Outlet />
    </>
  )
}

export default Layout