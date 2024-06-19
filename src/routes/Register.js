import { useState } from "react";

function Register() { 
  const [user, setUser] = useState({}); 
  const [errors, setErrors] = useState({}); 

  const createUser = (e)=>{
    //   console.log( e.target.id ,  e.target.value );

      const { id, value } = e.target; 

      const error = validateINput( id, value );
      console.log( error )
      setUser({...user, [`${ id }`] : value});
      setErrors({...errors, [`${ id }`] : error});

    //   console.log( user )
     
  }
 
  const validateINput = (id, value)=>{
    let error = ''
    switch(id){
        case "user_id":
            if(!/^[a-z][\w_]{8,12}/gmi.test(value)){
                error='id는 최소 8~10자리고 문자와 숫자를 포함합니다. '
            }
            break; 
        case "user_name":
            if(!/^[가-힣]{2,4}/gmi.test(value)){
                error='실명을 적어주세요.'
            }
            break;
        case "user_email":
            if(!/^[a-z]{4,}\.?[a-z0-9]*\.?[a-z]*@[a-z]+\.[a-z]+\.?[a-z]+/gmi.test(value)){
                error='이메일 형식은 example@example.com'
            }
            break;
        case "user_pwd":
            if(!/[\w$%*&]{8,}/gmi.test(value)){
                error='비밀번호는 8이상 $%*& 특수문자 숫자를 반드시 포함합니다.'
            }
            break;
    }
    return error; // 
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
             {  user.user_id !== "" &&  errors.user_id && <p style={{color:"red"}}> { errors.user_id } </p>}
        </div>
         <div>
             <label htmlFor="user_name">username</label>
             <input type="text" onInput={(e)=>createUser(e)} id="user_name" value={ user?.user_name ?  user.user_name :""} />
             {  user.user_name !== "" &&  errors.user_name && <p style={{color:"red"}}> { errors.user_name } </p>}
        </div>
       <div>
             <label htmlFor="user_email">userEmail</label>
             <input type="text" onInput={(e)=>createUser(e)} id="user_email" value= {user?.user_email ?  user.user_email :""}/>
             {  user.user_email !== "" &&  errors.user_email && <p style={{color:"red"}}> { errors.user_email } </p>}
        </div>
        <div>
            <label htmlFor="user_pwd">userPwd</label>
            <input type="password" onInput={(e)=>createUser(e)} id="user_pwd" value= {user?.user_pwd ?  user.user_pwd :""}/>
            {  user.user_pwd !== "" &&  errors.user_pwd && <p style={{color:"red"}}> { errors.user_pwd } </p>}
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
