import React from 'react'
import { BooleanContextProvider } from '../../context/BooleanContext'
import Sidebar from './Sidebar'

const SidebarLayout = () => {
  return (
    <BooleanContextProvider>
        <Sidebar />
    </BooleanContextProvider>
  )
}

export default SidebarLayout