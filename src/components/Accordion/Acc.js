import React from 'react'
import AccChild from './AccChild'
import { CounterContextProvider } from '../../context/CounterContext'

const Acc = () => {
  return (
    <CounterContextProvider>
        <div>
            {
                [1,2,3].map((item, index)=>( <AccChild index={index}  item={item} /> ))
            }
        </div>
    </CounterContextProvider>
  )
}

export default Acc