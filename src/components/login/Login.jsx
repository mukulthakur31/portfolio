import React,{useState}from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css'

const Login = () => {
    const Navigatee= useNavigate();
    const [input ,setinput]=useState({
        email:'',
        password:''
      });
      const handlelogin =(e)=>{
            e.preventDefault();
            const loggeduser =JSON.parse(localStorage.getItem("user"));
            if(input.email===loggeduser.email&&input.password===loggeduser.password){
                    Navigatee("/")
            }
            else{
                alert("wrong credentials")
            }
      }
     
      
  return (
    <div className='login-container'>
        <h2>Log in</h2>
     <form action="#" onSubmit={handlelogin}>
    <label htmlFor="email">email</label>
    <input type="email"
    name='email'
    value={input.email} 
    onChange={(e)=>setinput({...input,
    [e.target.name]:e.target.value
    })
    }/>
  <label htmlFor="password">password</label>
    <input type="password"
    name='password'
    value={input.password} 
    onChange={(e)=>setinput({...input,
    [e.target.name]:e.target.value
    })
    }/>
     <button type='submit'> Log in </button>
 </form>
    </div>
  )
}

export default Login