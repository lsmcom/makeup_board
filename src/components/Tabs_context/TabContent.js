import React, { useContext } from 'react'
import { useCounterContext } from '../../context/CounterContext'
// import { CounterContext } from '../../context/CounterContext'

const TabContent = () => {
//   const { num , setNum } = useContext(CounterContext)
  const { num , setNum } = useCounterContext();
  return (
    <div>
        {
            [1, 2, 3].map((item, index)=>(
                <div style={{ display : num === index ?  "block" : "none"}}> content {index} </div>
            ))
        }
    </div>
  )
}

export default TabContent