import React, { useContext } from 'react'
import { DarkThemeContext } from '../../context/DarkThemeContext';

// const DarkTheme = ({ isDark, setIsDark }) => {
//   return (
//     <button onClick={()=>setIsDark(!isDark)}> theme </button>
//   )
// }

const DarkTheme = () => {
const  { isDark, setIsDark }= useContext(DarkThemeContext); 
  return (
    <button onClick={()=>setIsDark(!isDark)}> theme </button>
  )
}

export default DarkTheme