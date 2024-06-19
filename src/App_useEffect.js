import { useEffect, useState } from "react";

function App() { 
  const [text, setText] = useState('');

  return (
    <div>
        <input type="text" onInput={(e)=>setText(e.target.value)}/>
        <button onClick={ ()=>setCount(count+1)}>count 증가</button>
    </div>
  );
}

export default App;
 