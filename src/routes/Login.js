import { useState, useRef } from "react";
// useId

function Login() { 
  const [user_email, setEmail] = useState('');
  const [user_pwd, setUserPwd] = useState('');

  const emailRef = useRef(); 
  const pwdRef = useRef(); 

  const emailValidate = (e)=>{
     setEmail(e.target.value);
     console.log( /^[a-z]{4,}\.?[a-z0-9]*\.?[a-z]*@[a-z]+\.[a-z]+\.?[a-z]+/gmi.test(e.target.value));
     if(/^[a-z]{4,}\.?[a-z0-9]*\.?[a-z]*@[a-z]+\.[a-z]+\.?[a-z]+/gmi.test(e.target.value)){
         
     }else{
        // error 표시 
     }
  }
  const passwordValidate = (e)=>{
     setUserPwd(e.target.value)
     console.log( /[\w$%*&]{8,}/img.test(e.target.value));
     if(/[\w$%*&]{8,}/img.test(e.target.value)){
       
     }else{
        // error 표시 
     }
  }
  const createUser = ()=>{
      const user = {
            user_email,
            user_pwd
      }
      console.log( user )

      //  document.querySelector('#user_email').value = ''
      //  location.href='/' => useNavigate()
      // setEmail('')
      // setUserPwd('')
      emailRef.current.value = '';
      pwdRef.current.value = '';

      emailRef.current.focus(); 
      return user; 
  }

  const onEmailHandle = ()=>{
      setEmail( emailRef.current.value )
  }
  const onPwdHandle = ()=>{
      setUserPwd( pwdRef.current.value )
  }
  return (
    <form onSubmit={ e=> e.preventDefault() }>
        <div>
             <label htmlFor="user_email">userEmail</label>
             <input type="text" 
               ref={emailRef}
            //  onInput={(e)=>setEmail(e.target.value)} id="user_email" value={user_email}/>
             onInput={onEmailHandle} id="user_email" value={user_email}/>
             {/* <input type="text" onInput={(e)=>emailValidate(e)} id="user_email" value={user_email}/> */}
        </div>
        <div>
            <label htmlFor="user_pwd">userPwd</label>
            <input type="password"
               ref={ pwdRef }
            // onInput={(e)=>setUserPwd(e.target.value)} id="user_pwd" value={user_pwd} />
            onInput={onPwdHandle} id="user_pwd" value={user_pwd} />
            {/* <input type="password" onInput={(e)=>passwordValidate(e)} id="user_pwd" value={user_pwd} /> */}
        </div>
        <button onClick={ createUser}> 로그인 </button>
    </form>
  );
}

export default Login;

// localhost:3000/index
// localhost:3000/index(.html)?
// localhost:3000/index.html/?name=kim
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
