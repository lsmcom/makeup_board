import { useState } from "react";
// Register_back.js
// 유효성 검사 달아보기 
function Register() { 
  const [user_name, setUserName] = useState('');
  const [user_id, setUserId] = useState('');
  const [user_email, setEmail] = useState('');
  const [user_pwd, setUserPwd] = useState('');

  const createUser = ()=>{
      const user = {
            user_name,
            user_id,
            user_email,
            user_pwd, 
      }
      console.log( user )

      //  document.querySelector('#user_email').value = ''
      //  location.href='/' => useNavigate()
      setUserName('')
      setUserId('')
      setEmail('')
      setUserPwd('')
      return user; 
  }

  return (
    <form onSubmit={ e=> e.preventDefault() }>
        <div>
             <label htmlFor="user_id">userId</label>
             <input type="text" onInput={(e)=>setUserId(e.target.value)} id="user_id" value={user_id}/>
        </div>
        <div>
             <label htmlFor="user_name">username</label>
             <input type="text" onInput={(e)=>setUserName(e.target.value)} id="user_name" value={user_name}/>
        </div>
        <div>
             <label htmlFor="user_email">userEmail</label>
             <input type="text" onInput={(e)=>setEmail(e.target.value)} id="user_email" value={user_email}/>
        </div>
        <div>
            <label htmlFor="user_pwd">userPwd</label>
            <input type="password" onInput={(e)=>setUserPwd(e.target.value)} id="user_pwd" value={user_pwd} />
        </div>
        <button onClick={ createUser}> 회원가입 </button>
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
