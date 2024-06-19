import { createContext, useContext, useState, useEffect } from "react";
import data from '../models/products.json';
import './MakeupContext.css';
import Card from '../components/Card/Card'
import { useSearchParams} from 'react-router-dom'


export const MakeupContext = createContext()


export const MakeupContextProvider = ({ children })=>{
    const [ makeup, setMakeup ] = useState(data)
    const [ isPending, setIsPending ] = useState(true)
    const result = !isPending && makeup.map(item=><Card key={item.id}  item={item}/>) 

    const [ id, setId ] = useState()
    const findResult = id && makeup.find( item=>item.id === +id )

    const [searchParams, setSearchParams ] = useSearchParams();

    const queryParams = searchParams.get('brand');
    console.log( queryParams )

    const queryResult = (!isPending && queryParams) && makeup.filter(item=>item.brand === queryParams );
    const qCardResult =  (!isPending && queryParams) && queryResult.map(item=><Card key={item.id}  item={item}/>) 
    const queryParamsResult = (!isPending && queryParams) ? qCardResult : result;

    useEffect(()=>{
        // 내컴의 서버에서 데이터를 가져옴 
        fetch('http://localhost:4500/makeup')
        .then( res=>res.json())
        .then( res=> {
            if(res.length){
                setMakeup( res );
                setIsPending( false ); /// 완료상태
            }
        } )
        
    }, [])

    return (
        <MakeupContext.Provider value={{ 
            makeup, setMakeup, isPending, setIsPending, result , findResult, id, setId,
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