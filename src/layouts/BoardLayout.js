import React from 'react'
import { Outlet } from 'react-router-dom'

const BoardLayout = ({children}) => {
  return (
    <div>
        { children }
        <Outlet />
    </div>
  )
}

export default BoardLayout