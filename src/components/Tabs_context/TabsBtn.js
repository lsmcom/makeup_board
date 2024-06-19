import React, { useContext } from 'react'
import { useCounterContext } from '../../context/CounterContext'
// import { CounterContext } from '../../context/CounterContext'

const TabsBtn = () => {
  // const mycount  =  useContext(CounterContext)
  // mycount = { num, setNum }
    const { num, setNum } = useCounterContext();  

  return (
    <div style={{ display: "flex", gap : "20px"}}>
        {
            [1,2,3].map((item, index )=>(
                <button onClick={ ()=>setNum(index) }>btn { index }</button>
            ))
        }
    </div>
  )
}

export default TabsBtn