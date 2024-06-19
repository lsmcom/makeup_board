import React, { useContext } from 'react'
import { DarkThemeContext} from '../context/DarkThemeContext'
// 1. 
// const Home = (props) => {
//   return (
//     <div>{props.children}</div>
//   )
// }

// 2.
// const Home = ({children}) => {
//   console.log( children );
//   // 1. 문자열, 숫자 기본데이터 타입은 기본으로 받고 
//   // 2. 요소를 한개 넘기면 객체
//   // 3. 요소를 2개이상 넘기면 배열

//   return (
//     <div>{children}</div>
//   )
// }

// const Home = ({ children }) => { 
//   const  { isDark }= useContext(DarkThemeContext); // { isDark, setIsDark }
//   return (
//     <div style={{ 
//       background : isDark ? "black" : "white" , 
//       color : isDark ? "white" : "black"
//     }}>{children}</div>
//   )
// }

const Home = ()=>{
    return (
        <section> home </section>
    )
}
export default Home

