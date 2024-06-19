import React from 'react'
import { useParams, Link } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>ProductDetail </h2>

      <Link to=".." > 뒤로가기 </Link>
      {/* <Link to=".." relative="path"> 뒤로가기 </Link> */}
    </div>
  )
}

export default ProductDetail