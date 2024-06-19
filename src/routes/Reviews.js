import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

// localhost:3000/product/reviews?name=kim&age=30
// https://cafe.naver.com/jemicom?amout=30&pager=2   

const Reviews = () => {
  const [ searchParams, setSearchParams ] = useSearchParams()

  const mySearchParams1 = (event)=>{
      event.preventDefault()

      setSearchParams({name:"kim", age:30 })
  }

  useEffect(()=>{
      console.log(searchParams.get('name'))
      console.log(searchParams.get('age'))
  }, [searchParams])
  
  return (
    <>
      <div>Reviews</div>

      <Link to=".." relative="path"> 뒤로가기 </Link>
      {/* <Link to="/products/products-detail" > productDetail </Link> */}
      {/* <Link to="../products-detail" relative="path"> productDetail </Link> */}
      <Link to="../products-detail"> productDetail </Link>
      <br />
      <Link onClick={ (e)=>mySearchParams1(e)}> setSearchParams1 </Link>
      <br />
      {/* <button onClick={mySearchParams1}>setSearchParams2</button> */}
      <button onClick={()=>setSearchParams({amount:30, pager:2})}>setSearchParams2</button>
    </>
  )
}

export default Reviews