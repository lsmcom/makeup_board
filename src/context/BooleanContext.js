import { createContext, useContext, useState } from "react";

export const BooleanContext = createContext()

export const BooleanContextProvider = ({ children })=>{
    const [ bool, setBool ] = useState()
    return (
        <BooleanContext.Provider value={{ bool, setBool }}>
            { children }
        </BooleanContext.Provider>
    )
}

// Sidebar, Modal

export const useBooleanContext = ()=>{
    return useContext(BooleanContext)
}