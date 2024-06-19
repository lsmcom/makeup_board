import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const ProductId = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>ProductId params id { id }</h2>

      //  localhost:3000/products/:id  <br/>

      {/* <Link to=".." relative="path"> 뒤로가기 </Link> */}
      {/* <Link to=".." > 뒤로가기 </Link> */}

      {/* 컴포넌트내에서 route를 처리하고자 할때  */}
      <button onClick={ ()=>navigate('..')}>뒤로가기</button>
      {/* <button onClick={ ()=>navigate('/products/reviews')}>reviews</button> */}
      <button onClick={ ()=>navigate('../reviews')}>reviews</button>
      <button onClick={ ()=>navigate('/about')}>about</button>
    </div>
  )
}

export default ProductId