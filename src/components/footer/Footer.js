import React, { useContext } from 'react'
import { DarkThemeContext } from '../../context/DarkThemeContext'

const Footer = () => {
  const darkTheme = useContext(DarkThemeContext);
  // console.log(darkTheme);

  return (
    <div style={{ 
      background : darkTheme.isDark ? "black" : "white" , 
      color : darkTheme.isDark ? "white" : "black"
    }}>Footer</div>
  )
}

export default Footer