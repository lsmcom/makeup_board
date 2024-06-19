import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../components/Nav/Nav.css'

const MakeupLayout = () => {
  return (
    <div>
        <h2>MakeupLayout : Outlet</h2>
        {/* <ul className='lnb' style={{ display:"flex"}}>
          <li><NavLink to="/makeup" end>makeup</NavLink></li>
          <li><NavLink to="/makeup/reviews" >reviews</NavLink></li>
        </ul> */}
        <ul className='lnb' style={{ display:"flex"}}>
          <li><NavLink to="." end>makeup</NavLink></li>
          <li><NavLink to="reviews" >reviews</NavLink></li>
        </ul>
        <Outlet />
        {/* children 대신 사용함  */}
    </div>
  )
}

export default MakeupLayout