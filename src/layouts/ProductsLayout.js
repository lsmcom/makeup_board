import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../components/Nav/Nav.css'

const ProductsLayout = () => {
  return (
    <div>
        <h2>ProductsLayout : Outlet</h2>
        <ul className='lnb' style={{ display:"flex"}}>
          <li><NavLink to="/products" end>products</NavLink></li>
          <li><NavLink to="/products/productDetail" >productDetail</NavLink></li>
          <li><NavLink to="/products/reviews" >reviews</NavLink></li>
        </ul>
        <Outlet />
        {/* children 대신 사용함  */}
    </div>
  )
}

export default ProductsLayout