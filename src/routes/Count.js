import React, { useState } from 'react'

const Count = () => {
  let num = 0; 
  const [ no, setNo ] = useState(0);

  const increment = ()=>{
    num++;
    setNo( no+1 );
    //  no=num
    console.log( num )
  }

  return (
    <div>
        <button onClick={ increment }> count { no }</button>
    </div>
  )
}

export default Count