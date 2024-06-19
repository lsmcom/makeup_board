import { createContext, useContext, useState, useEffect } from "react";
import { format } from 'date-fns'

export const BoardContext = createContext()

export const BoardContextProvider = ({ children })=>{

  const [ posts, setPosts ] = useState([]);

  useEffect(()=>{
        // fetch('http://localhost:4500/board')
        fetch('https://b2024.vercel.app/board')
        .then(res=>res.json())
        .then(res=> setPosts(res))
  }, [])

  const [ title, setTitle ] = useState("");
  const [ body, setBody ] = useState("");

  const [ isEditing, setIsEditing ] = useState(false);
  const [ editItem, setEditItem ] = useState({
    id: null, 
    title : "",
    body : "" 
  }); 


  const addPostHandle = (maxId, title, body)=>{
      const newPost = {
          // id : posts[posts.length-1].id + 1,
          id : Math.max( ...maxId ) + 1,
          title ,
          body, 
          datetime : format( new Date(), 'yyyy.MM.dd')
      }

      setPosts([newPost, ...posts]);
      // posts= [newPost, ...posts]
      // setPosts( posts => posts=posts.push( newPost ) )


    //   fetch('http://localhost:4500/board',{
      fetch('https://b2024.vercel.app/board',{
            method:'POST', 
            headers : { 'Content-Type' : 'application/json;charset=utf-8'},
            body: JSON.stringify(newPost)
      })
        .then(res=>res.json())
        .then(res=> console.log( res ))

      setTitle('');
      setBody('');
  }

  const onSubmitHandle = (e)=>{
      e.preventDefault()
      
      // 공백일때 그냥 리턴 
      if( title === '' || body === ''){
        return ;
      }

      const maxId = posts.map(item=>item.id)

      addPostHandle( maxId, title, body )
  }

  const deleteHandle = (id)=>{
      const deleted = posts.filter(post=>post.id !== id)
      setPosts(deleted);
      // 개선 : useReducer로 개선,

    //   fetch(`http://localhost:4500/board/${id}`,{
      fetch(`https://b2024.vercel.app/board/${id}`,{
            method:'DELETE'
        })  
        .then(res=>res.json())
        .then(res=> console.log( res ))
  }

  const updateHandle = (id)=>{
      setIsEditing(true); // 수정할 창을 표시함

      // 
      const find = posts.find(post=>post.id === id); // 수정할 데이터 찾기
      setEditItem(find)// 창안에 수정할 데이터를 넣기
      // 수정할 데이터 저장. id
  }

  const setEditTitle = (value)=>{
      // setEditItem(editItem=>editItem.title = value )
      setEditItem({ ...editItem, title : value})
  }
  const setEditBody = (value)=>{
      // setEditItem(editItem=>editItem.body = value )
      setEditItem({ ...editItem, body : value})
  }
  const onSubmitEditHandle = () =>{
      setIsEditing(false) ;

      // const edit = posts.map( post=>{
      //     if(  post.id === editItem.id ){
      //        return editItem; 
      //     }else{
      //        return post;
      //     }
      // })
      
      const edit = posts.map( post=> post.id === editItem.id ?  editItem : post )

      setPosts(edit);

      fetch(`https://b2024.vercel.app/board/${editItem.id}`,{
            method:'PUT', 
            headers : { 'Content-Type' : 'application/json;charset=utf-8'},
            body: JSON.stringify( editItem )
      })
        .then(res=>res.json())
        .then(res=> console.log( res ))
  }

  const [ search, setSearch ] = useState("")
  const [ searchPosts, setSearchPosts ] = useState([]); 
  const onSearchHandle = (e)=>{
     e.preventDefault();
      
  }
  const onSearchChangeHandle = (e)=>{ 
     setSearch(e.target.value)
     console.log( search )
  }

  useEffect(()=>{
      const filter =  posts.filter(post=> post.title.includes( search ) || post.body.includes( search ))
      setSearchPosts( filter )
  },[search, posts])


    return (
        <BoardContext.Provider value={{ 
            posts, setPosts,
            title, setTitle, body, setBody ,
            isEditing, setIsEditing,
            editItem, setEditItem,
            addPostHandle, onSubmitHandle, deleteHandle, updateHandle,
            setEditTitle, setEditBody, onSubmitEditHandle,
            search, setSearch, searchPosts, setSearchPosts,
            onSearchHandle,onSearchChangeHandle
         }}>
            { children }
        </BoardContext.Provider>
    )
}

export const useBoardContext = ()=>{
    return useContext(BoardContext)
}