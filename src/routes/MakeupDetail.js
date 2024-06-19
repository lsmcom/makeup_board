import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useMakeupContext } from '../context/MakeupContextReducer'

// localhost:3000/:id
const MakeupDetail = () => {
  const { id } =  useParams()
  const { findResult, state, setId } = useMakeupContext();
  
  useEffect(()=>{
        setId(id)
  }, [id])
  
//   console.log( findResult )
  return (
    <div>
        <h2>MakeupDetail {  state.loading ? "Loading..." :  id } </h2>
        <p>
            {
               !state.loading && JSON.stringify(findResult)
            }
        </p>
    </div>
  )
}

export default MakeupDetail