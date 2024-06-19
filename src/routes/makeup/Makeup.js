import React from 'react'
import { useMakeupContext } from '../context/MakeupContext'
import Card from '../components/Card/Card'
import { Link, useNavigate } from 'react-router-dom';

const Makeup = () => {
  const { isPending , result,  setSearchParams, queryParamsResult } = useMakeupContext();
//   const result = !isPending && makeup.map(item=><Card key={item.id}/>) 
  const navigate = useNavigate();

  return (
    <div>
        <h1>Makeup</h1>
        <div>
            <Link to="./?brand=colourpop">colourpop</Link>
            <Link to="./?brand=deciem">deciem</Link>
            <Link to="./?brand=nyx">nyx</Link>
            <Link to=".">초기화</Link> 
        </div>
        <div>
            <button onClick={()=>setSearchParams({ brand:"colourpop"})}>colourpop</button>
            <button onClick={()=>setSearchParams({ brand:"deciem"})}>deciem</button>
            <button onClick={()=>setSearchParams({ brand:"nyx"})}>nyx</button>
            <button onClick={()=>setSearchParams({ })}>초기화</button>
            <button onClick={()=>navigate('.')}>초기화</button>
        </div>
        <div className='card-container'>
            {
                isPending ? "Loading ..." : queryParamsResult  
            }
        </div>
    </div>
  )
}

export default Makeup