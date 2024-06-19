import { useBoardContext } from '../../context/BoardContext'
import { useNavigate } from 'react-router-dom';
 
const WriteBoard = () => {
    const { 
            title, setTitle, body, setBody ,   onSubmitHandle,  
         } = useBoardContext();

  const navigate = useNavigate();

  const writeHandle = (e)=>{
    onSubmitHandle(e)
    navigate('/board')
  }     

  return (
    <div>
            
      <form className="inputForm" 
            id="inputForm"
            onSubmit={ (e)=> writeHandle(e)}>
          <div>
            <input type="text" 
                 placeholder='title'
                 onChange={(e)=>setTitle(e.target.value)}
                // document.querySelector(id).addEventListener(click,()=>{})
                 value={title}
            />
          </div>  
          <textarea  
                 placeholder='body'
                 onChange={(e)=>setBody(e.target.value)}
                 value={body}
          ></textarea>
          <button>등록</button>
      </form>
 
    </div>
    
  )
}

export default WriteBoard