// 데이터 읽기, 읽기 완료
// loading, error, post

import { useReducer } from "react"

// action은 별도 파일로 빼두기 
const ACTION_TYPES = {
    FETCH_START : "FETCH_START",
    FETCH_SUCCESS : "FETCH_SUCCESS",
    FETCH_ERROR : "FETCH_ERROR",
}

const INITIAL_STATE = {
    loading : false, 
    error : false, 
    post : {}
}

// reducer 
const fetchReducer = (state, action)=>{
    switch(action.type){
        case ACTION_TYPES.FETCH_START :
            return {
                loading : true, 
                error : false, 
                post : {},
            }

        case ACTION_TYPES.FETCH_SUCCESS :
            return {
                ...state,
                loading : false,  
                post : action.payload,
            }

        case ACTION_TYPES.FETCH_ERROR :
            return {
                error : true, 
                loading : false,
                post : {}
            }

    }
}

const Post = () => {
    const [ state, dispatch ] = useReducer(fetchReducer, INITIAL_STATE);
    console.log( state )
    // state = INITIAL_STATE
    // dispatch = action 3가지 사용 가능 

    const fetchHandle =()=>{
        dispatch({ type : ACTION_TYPES.FETCH_START });

        fetch('http://localhost:4500/board')
        // fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((res)=>res.json())
        .then((res)=>{
             dispatch({ type : ACTION_TYPES.FETCH_SUCCESS, payload : res });
        })
        .catch((err)=>{
            dispatch({ type : ACTION_TYPES.FETCH_ERROR });
        })
    }

    return (
        <div>
            <button onClick={ fetchHandle }>
                {/* { state.loading  ?  "loading..." : state.post } */}
                { state.loading  ?  "loading..." : "fetch 하려면 클릭하세요." }
            </button>
            <h2>{ state.post.title } </h2>
            <p>{ state.post.body}</p>
            <p> { state.error && "데이터를 찾을 수 없습니다."} </p>
        </div>
    )
}

export  default  Post;