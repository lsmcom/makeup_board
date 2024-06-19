import React, { useReducer } from 'react'


// 공급자 
// fetch : GET, POST, PUT, DELETE
// reducer : state => 데이타,  action.type = 요청, action.payload = 요청할 때 주는 데이타 
const reducer = (state, action)=>{
    console.log( 'reducer call', state, action.type, action.payload )
    switch(action.type){
      case "increment" :
        return  state = state + action.payload
      case "decrement" :
        return  state = state - action.payload
    }
}
 

const Counter = () => {
  // 소비자는 dispatch() 로 요청
  const [ state, dispatch ] = useReducer(reducer, 5);
  // const [ num, setNum ] = useState(0);

  const increment = ()=>{
    dispatch({type:"increment", payload : 5})
    console.log( state )
  }
  const decrement = ()=>{
    dispatch({type:"decrement", payload : 5})
    console.log( state )
  }

  return (
    <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Counter