import React from 'react'
import { useCounterContext } from '../../context/CounterContext'
import { FaStar } from "react-icons/fa6";

const StarRating = ({star = 10}) => {
    const { num, setNum } = useCounterContext();
    const starAry = [] // 1,2,3,4,5
    
    for( let a=1; a<=star ; a++){
        starAry.push(a)
    }
  return (
    <div>
        {
            starAry.map((item, index)=>
                <FaStar onClick={()=>setNum(item) } key={item} 
                        style={{ color : num >= item ? "red" : "black"}}
                />
            )
        }
    </div>
  )
}

export default StarRating

// 1. 별의 사용개수 : 5, 10
// 2. useState => CountContext
// 3. event 처리
// 4. 아이콘