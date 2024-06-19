import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useMakeupContext } from '../context/MakeupContext'

// localhost:3000/:id
const MakeupDetail = () => {
  const { id } =  useParams()
  const { findResult, isPending, setId } = useMakeupContext();
  
  useEffect(()=>{
        setId(id)
  }, [id])
  
//   console.log( findResult )
  return (
    <div>
        <h2>MakeupDetail {  isPending ? "Loading..." :  id } </h2>
        <p>
            {
               !isPending && JSON.stringify(findResult)
            }
        </p>
    </div>
  )
}

export default MakeupDetail