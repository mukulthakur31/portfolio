import React,{useState} from 'react'
import {useNavigate } from 'react-router-dom';
import './register.css'

const Register = () => {
  const Navigateee= useNavigate();
  const [input ,setinput]=useState({
    name:'',
    email:'',
    password:''
  });
  const handlesubmit =(e)=>{
     e.preventDefault();
     localStorage.setItem("user",JSON.stringify(input));
     Navigateee("/login")
  } 
  return (
    <div class="register-container">
    <h2>Register</h2>
    <form action="/" onSubmit={handlesubmit}>
        <label htmlFor="Username">Username</label>
        <input type="text"
        name='name'
        value={input.name} 
        onChange={(e)=>setinput({...input,
        [e.target.name]:e.target.value
        })
        }/>
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
        <button type='submit'> Register </button>
         <p>Don't have an account? <a href="#">log in</a></p>
    </form>
   
  </div>
  )
}

export default Register;