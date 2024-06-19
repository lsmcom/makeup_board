import { useBoardContext } from '../../context/BoardContext'
import { Link, useNavigate } from 'react-router-dom'
 
const Board = () => {
  const { 
            posts, deleteHandle, updateHandle, 
            search, searchPosts, 
            onSearchHandle,onSearchChangeHandle
         } = useBoardContext();
  const navigate = useNavigate();

  const gotoEdit = (id)=>{
      updateHandle(id);
      navigate('edit_board')
  }


  return (
    <div>

      <form className='search' id='search'
            onSubmit={ (e)=> onSearchHandle(e) }
      > 
          <input type="search" 
                 placeholder='search'
                 onChange={(e)=>onSearchChangeHandle(e)} 
                 value={search}
            />
      </form>
      
      <Link  to="write_board">글쓰기</Link>

      
      <div>
        {
          posts.length &&  searchPosts.map( post=>(
              <div key={post.id}>
                <h2>{post.id} {post.title}</h2>
                <p>  {post.body}</p>
                <p>  {post.datetime}</p>
                <p>  
                    <button  onClick={ ()=>deleteHandle(post.id) }>삭제</button>
                    <button  onClick={ ()=>gotoEdit(post.id) }>수정</button>
                </p>
              </div>
          ))
        }
      </div>
    </div>
    
  )
}

export default Board