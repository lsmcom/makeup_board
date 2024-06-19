import React, { useReducer } from 'react'

const dataType={
  INCREMENT : "increment",
  DECREMENT : "decrement",
}

const inintialState = {
    count : 0  
}
// 공급자 
// fetch : GET, POST, PUT, DELETE
// reducer : state => 데이타,  action.type = 요청, action.payload = 요청할 때 주는 데이타 
const reducer = (state, action)=>{
    console.log( 'reducer call', state, action.type, action.payload )
    switch(action.type){
      case dataType.INCREMENT :
        return  {...state, count :  state.count + action.payload }
      case dataType.DECREMENT :
        return  {...state, count :  state.count - action.payload }
    }
}
 

const Counter = () => {
  // 소비자는 dispatch() 로 요청
  const [ state, dispatch ] = useReducer(reducer,  inintialState );
  // const [ num, setNum ] = useState(0);

  const increment = ()=>{
    dispatch({type: dataType.INCREMENT, payload : 5})
    console.log( state.count )
  }
  const decrement = ()=>{
    dispatch({type: dataType.DECREMENT, payload : 5})
    console.log( state.count )
  }

  return (
    <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Counter