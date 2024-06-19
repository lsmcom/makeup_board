import { useState } from "react";

function Register() { 
  const [user, setUser] = useState({}); 

  const createUser = (e)=>{
      console.log( e.target.id ,  e.target.value )
     
      setUser({...user, [`${e.target.id}`] : e.target.value})
      console.log( user )
     
  }

  const submitHandle = (e)=>{
      e.preventDefault(); // 

      console.log('전송전 ',  user)
      setUser({})  // then
      console.log('전송후 ',  user);; // 에러 
      return user; 
  }
  
  return (
    <form onSubmit={ e=>submitHandle(e)}>
        <div>
             <label htmlFor="user_id">userId</label>
             <input type="text" onInput={ (e)=>createUser(e)} id="user_id" value={user?.user_id ? user.user_id:""}/>
        </div>
         <div>
             <label htmlFor="user_name">username</label>
             <input type="text" onInput={(e)=>createUser(e)} id="user_name" value={ user?.user_name ?  user.user_name :""} />
        </div>
       <div>
             <label htmlFor="user_email">userEmail</label>
             <input type="text" onInput={(e)=>createUser(e)} id="user_email" value= {user?.user_email ?  user.user_email :""}/>
        </div>
        <div>
            <label htmlFor="user_pwd">userPwd</label>
            <input type="password" onInput={(e)=>createUser(e)} id="user_pwd" value= {user?.user_pwd ?  user.user_pwd :""}/>
        </div>
        <button> 회원가입 </button>
    </form>
  );
}

export default Register;


// // front
// url = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick'
// fetch(url)
// .then(res=>res.json())
// .then(res=>res)



// // express 
// // http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick

// app.get('http://makeup-api.herokuapp.com/api/v1'){
//     const data = Filled('products.json')
//     const filter = data.filter(item=>item.brand === 'covergirl' ).filter( item=>item.product_type === 'lipstick')
//     res.json(filter)
// }
