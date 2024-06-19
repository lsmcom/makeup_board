import { createContext, useContext, useState, useEffect, useReducer} from "react";
import data from '../models/products.json';
import './MakeupContext.css';
import Card from '../components/Card/Card'
import { useSearchParams} from 'react-router-dom'

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

export const MakeupContext = createContext()

export const MakeupContextProvider = ({ children })=>{
    const [state, dispatch] = useReducer( fetchReducer, INITIAL_STATE)
    const [ makeup, setMakeup ] = useState(data)
    // const [ isPending, setIsPending ] = useState(true)
    const result = !state.loading && makeup.map(item=><Card key={item.id}  item={item}/>) 

    const [ id, setId ] = useState()
    const findResult = id && makeup.find( item=>item.id === +id )

    const [searchParams, setSearchParams ] = useSearchParams();

    const queryParams = searchParams.get('brand');
    console.log( queryParams )

    const queryResult = (!state.loading && queryParams) && makeup.filter(item=>item.brand === queryParams );
    const qCardResult =  (!state.loading && queryParams) && queryResult.map(item=><Card key={item.id}  item={item}/>) 
    const queryParamsResult = (!state.loading && queryParams) ? qCardResult : result;

    useEffect(()=>{
        dispatch({ type : ACTION_TYPES.FETCH_START })

        // 내컴의 서버에서 데이터를 가져옴 
        // fetch('http://localhost:4500/makeup')
        fetch('https://b2024.vercel.app/makeup')
        .then( res=>res.json())
        .then( res=> {
             dispatch({ type : ACTION_TYPES.FETCH_SUCCESS })
            //  dispatch({ type : ACTION_TYPES.FETCH_SUCCESS, payload : res })
             setMakeup( res )
        })
        .catch((err)=>dispatch({ type : ACTION_TYPES.FETCH_ERROR }) )
        
    }, [])

    return (
        <MakeupContext.Provider value={{ 
            makeup, setMakeup, state,  result , findResult, id, setId,
            searchParams, setSearchParams, queryParamsResult
        }}>
            { children }
        </MakeupContext.Provider>
    )
}

// Sidebar, Modal

export const useMakeupContext = ()=>{
    return useContext(MakeupContext)
}