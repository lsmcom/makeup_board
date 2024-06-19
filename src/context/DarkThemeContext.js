import { createContext, useState } from "react";

export const DarkThemeContext = createContext();

export const DarkThemeContextProvider = ({children})=>{

    const [ isDark, setIsDark ] = useState(false);

    return (
        <DarkThemeContext.Provider value={{ isDark, setIsDark }}>
            {children}
        </DarkThemeContext.Provider>
    )
} 

// export default { DarkThemeContext ,  DarkThemeContextProvider}