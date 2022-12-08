import './Login.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials=true;

const Recommend=()=>{

  return (
    <div>
      hello
    </div>
  )
}

const Login=()=>{
  const [id,setId] = useState("");
  const [password,setPassword] = useState("");
  const [signupid,setSignupId] = useState("");
  const [signuppassword,setSignupPassword] = useState("");
  const [username,setUsername] = useState("");
  const [logedin,setLogedin] = useState(false);
  const [loginFailed,setLoginFailed] = useState(false);
  const [signupfinished,setSignupfinished] = useState(false);
  const [signupfailed,setSignupfailed] = useState(false);
  const [currentusername,setCurrentusername] = useState("");

  const [signup,setSignup] = useState(false);
  const [email,setEmail] = useState("");

  useEffect(()=>{
    (async ()=>{
      await axios({
        url : "http://127.0.0.1:3000/user",
        method : "get",
      }).then((response)=>{
        if (response.status === 200){
          if(response.data === "로그인 해주세요"){
            console.log(response);
          }else{
            console.log(response);
            setLogedin(true);
            setCurrentusername(response.data.username)
          }
        }
      }).catch((error)=>{
        console.log(error);
      })
    })();
  })

  const onChange=(e)=>{
    const {id,value}=e.target;
    if(id==="id"){
      setId(value);
    }else if(id==="password"){
      setPassword(value);
    }else if(id==="email"){
      setEmail(value);
    }else if(id==="signupid"){
      setSignupId(value);
    }else if(id==="signuppassword"){
      setSignupPassword(value);
    }else if(id==="username"){
      setUsername(value);
    }
  }

  const onClick=(e)=>{
    setSignup(true);
  }

  const onSubmitSignin=(e)=>{
    e.preventDefault();
    (async ()=>{
      await axios({
        url : "http://127.0.0.1:3000/auth/login",
        method : "post",
        data:{
          "id" : id,
          "password" : password
        }
      }).then((response)=>{
        console.log(response)
        if (response.status === 200){
          console.log("로그인은성공");
          setLogedin(true);
          (async ()=>{
            await axios({
              url : "http://127.0.0.1:3000/user",
              method : "get",
            }).then((response)=>{
              if (response.status === 200){
                console.log(response)
                setCurrentusername(response.data.username);
              }
            }).catch((error)=>{
              console.log(error);
            })
          })();
        }
        else {
          setLoginFailed(true);
        }
      }).catch((error)=>{
        setLoginFailed(true);
        console.log(error);
      })
    })();


    
  }

  const onSubmitSignup=(e)=>{
    e.preventDefault();
    (async ()=>{
      await axios({
        url:"http://127.0.0.1:3000/user",
        method:"post",
        data:{
        "id" : signupid,
        "password" : signuppassword,
        "email" : email,
        "username":username
        }
      }).then((response)=>{
        if(response.status===201){
          setSignupfinished(true);
        }else if(response.status===400){
          setSignupfailed(true);
        }
      }).catch((error)=>{
        console.log(error)
      })
    })();
  }

  const Logout=(e)=>{
    (async ()=>{
      await axios({
        url:"http://127.0.0.1:3000/auth/logout",
        method:"get"
      }).then((response)=>{
        setLogedin(false);
      })
    })();
  }
  const Guestmode=(e)=>{
    (async ()=>{
      await axios({
        url:"http://127.0.0.1:3000/auth/guest",
        method:"post"
      }).then((response)=>{
        setLogedin(true);
      })
    })();
    setCurrentusername("guest");
  }

  return(
    <div className='container'>
      <div className='databox'>
        <div className='guest'>
          {(logedin === false) ? <button className='guestmode' onClick={Guestmode}>게스트모드</button> : <></>}
        </div>
        <div className='inputBox'>
          <div className="title">Dating Spot</div>
          {(logedin === false) ? <div>
            <form onSubmit={onSubmitSignin} id="signin">
              <div><input  onChange={onChange} value={id} placeholder="아이디" id='id'/></div>
              <div><input type="password" onChange={onChange} value={password} placeholder="비밀번호" id='password'/></div>
              <button type="submit">로그인</button>{loginFailed===true ? <span>로그인 실패!</span> : <></>}
            </form>
            {(signup === false) ? 
              <div>
                <button className='signup' onClick={onClick}>회원가입</button> 
              </div>
            :
              <form onSubmit={onSubmitSignup} id="signup">
                <div><input  onChange={onChange} value={signupid} placeholder="아이디" id='signupid'/></div>
                <div><input type="password" onChange={onChange} value={signuppassword} placeholder="비밀번호" id='signuppassword'/></div>
                <div><input  onChange={onChange} value={username} placeholder="별명" id='username'/></div>
                <div><input type="email" onChange={onChange} value={email} placeholder="example@example.com" id="email"/></div>
                {(signupfinished===false) ? <button type="submit">회원가입</button> : <span>회원가입 완료</span>}
                {(signupfailed===false) ? <></> : <span>회원가입 실패(이미 가입됨)</span>}
              </form>
            }
            </div>
          :
            <div>
              <div>안녕하세요 {currentusername}님!</div>
              <Link to="/selectcategory">
                <button>코스 추천 받으러 가기</button>
              </Link>
              <button onClick={Logout}>로그아웃</button>
            </div>
          }
        </div>
        <div>
          <Recommend/>
        </div>
      </div>
    </div>
  )
}

export default Login;
