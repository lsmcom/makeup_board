import React, { useContext, useState } from 'react'
// import { CounterContext } from '../../context/CounterContext'
import { useCounterContext } from '../../context/CounterContext'

const AccChild = ({index, item}) => {
//   const { num, setNum } = useContext(CounterContext);
    const { num, setNum } = useCounterContext();

  return (
    <div>
        <h2 onClick={()=>setNum(index)}>title {item}</h2>
        <div style={{ display : index === num ? "block" : "none"}}>content { item }</div>
    </div>
  )
}

export default AccChild