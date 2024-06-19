import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const Products = () => {
  return (
    <section>
      <h2>Products</h2>
      <ul>
                <li><NavLink to="/products/1">products 1</NavLink></li>
                <li><NavLink to="/products/2">products 2</NavLink></li>
                <li><NavLink to="/products/3">products 3</NavLink></li>
      </ul>
      <Outlet />
    </section>
  )
}

export default Products