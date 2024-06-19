import React, { useRef, useEffect , useState} from 'react'

const InputRef = () => {
    const [ user, setUser ] = useState();
    const inputRef = useRef(); 

    useEffect(()=>{
        // inputRef.current.focus()
        inputRef.current.placeholder = "hello ref"
    }, [])

    const onChangeHandle = ()=>{
        setUser( inputRef.current.value )
    }
  return (
    <div>
        <input type="text"  />
        <input type="text"   ref={ inputRef }  
                // onChange={(e)=>setUser(e.target.value)}
                onChange={ onChangeHandle }
        />
    </div>
  )
}

export default InputRef