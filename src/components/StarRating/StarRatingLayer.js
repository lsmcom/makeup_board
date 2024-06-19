import React from 'react'
import { CounterContextProvider } from '../../context/CounterContext'
import StarRating from './StarRating'

const StarRatingLayer = () => {
  return (
    <CounterContextProvider>
        {/* <StarRating  /> */}
        <StarRating  star={5} />
    </CounterContextProvider>
  )
}

export default StarRatingLayer