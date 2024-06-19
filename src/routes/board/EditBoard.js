import { useBoardContext } from '../../context/BoardContext'
import { useNavigate } from 'react-router-dom'
 
const EditBoard = () => {
  const { 
            editItem, setEditTitle, setEditBody, onSubmitEditHandle, 
        } = useBoardContext()
  
  const navigate = useNavigate();

  const editHandle = (e)=>{
      onSubmitEditHandle(e);
      navigate('..')
  }

  return (
    <div>
        <form className="editForm" 
              id='editForm'
              onSubmit={ (e)=>editHandle(e) }>
            <div>
              <input type="text"  
                  onChange={(e)=>setEditTitle(e.target.value)}
                  //  document.querySelector(id).addEventListener(click,()=>{})
                  value={editItem.title}
              />
            </div>  
            <textarea  
                  placeholder='body'
                  onChange={(e)=>setEditBody(e.target.value)}
                  value={editItem.body}
            ></textarea>
            <button>수정완료</button>
        </form>
    </div>  
  )
}

export default EditBoard