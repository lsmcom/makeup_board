import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
// import style from './Nav.module.css'
import './Nav.css'

 {/* localhost:3000/home 
    localhost:3000/home
    localhost:3000/about
    localhost:3000/products
    localhost:3000/products/:id
    localhost:3000/products/productDetail
    localhost:3000/products/reviews
    localhost:3000/profile
  */}
// const Nav = () => {
//   const [ menuNum , setMenuNum ] = useState(0);

//   const menu = [ "home", "about", "products", "profile"]
//   return (
//     <nav className={ style.lnb }>
//       <ul>
//         {
//             menu.map((item, index)=>(
//               <li>
//                 <Link to={`${item}`} onClick={ ()=>setMenuNum(index)}
//                       className={ menuNum === index ? style.active : null }
//                 >{ item }</Link>
//               </li>
//             ))
//         }
//       </ul>
//     </nav>
//   )
// }

const Nav = () => {
  const [ menuNum , setMenuNum ] = useState(0);

  const menu = [ "home", "board", "makeup", "about", "products", "profile"]
  return (
    <nav className='lnb'>
      <ul>
        {
            menu.map((item, index)=>(
              <li key={index}>
                <NavLink to={`${item}`} onClick={ ()=>setMenuNum(index)}                     
                >{ item }</NavLink>
              </li>
            ))
        }
      </ul>
    </nav>
  )
}

export default Nav