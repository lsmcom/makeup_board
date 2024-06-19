import React, { useEffect } from 'react'
import { useBooleanContext } from '../../context/BooleanContext'
import './SideBar.css'
const Sidebar = () => {
    const { bool, setBool } = useBooleanContext();

    // const mySetBool = ()=>{
    //     setBool(!bool)
    // }

    // // fetch
    //  useEffect(()=>{
    //     mySetBool()
    //  }, [])

  return (
    <aside className={ bool ? "active" : ""}>
        <button onClick={ ()=>setBool(!bool) }>open</button>
    </aside>
  )
}

export default Sidebar