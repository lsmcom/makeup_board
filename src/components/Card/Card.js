import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Card = ({item}) => {
  const navigate = useNavigate();
  return (
    <div className="card">
        <h2>Card</h2>
        <h3 onClick={ ()=>navigate(`./${item.id}`)}>{item.brand}</h3>
        {/* <h3 onClick={ ()=>navigate(`/makeup/${item.id}`)}>{item.brand}</h3> */}
        {/*  localhost:3000/makeup/:id */}
        <h4>{item.name}</h4>
        <h5>{item.price}</h5>
        <Link  to={`./${item.id}`} >상품자세히 보기</Link>
    </div>
  )
}

export default Card