import React, { useContext} from 'react'
import { DarkTheme, Nav } from '../index';
import { DarkThemeContext } from '../../context/DarkThemeContext';
import style from './Header.module.css'

const Header = () => {
  const  { isDark }= useContext(DarkThemeContext); 
  return (
    <header style={{ 
      background : isDark ? "black" : "white" , 
      color : isDark ? "white" : "black"
    }}>
      
      <h1>logo</h1>
      <Nav  />
      <DarkTheme />
    </header>
  )
}

export default  Header;