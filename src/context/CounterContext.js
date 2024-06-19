import { createContext, useContext, useState } from "react";

const CounterContext = createContext()

export const CounterContextProvider = ({ children })=>{
    const [ num, setNum ] = useState()
    return (
        <CounterContext.Provider value={{num, setNum}}>
            { children }
        </CounterContext.Provider>
    )
}

// 함수 
export const useCounterContext = ()=>{
    return useContext(CounterContext);
}