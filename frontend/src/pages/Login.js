import  Axios  from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie'


function Login() {
    const[email,setEmail] =useState("");
    const[password,setPassword] = useState("");
    const[message,setMessage] =useState("");
    const navigate = useNavigate();
    const token= new Cookies();
    const userLogin = (e) =>{
      e.preventDefault();
      Axios.post("http://localhost:4000/users/login",{
        email: email,
        Password: password
      }).then((response) =>{
        console.log(response.data);
        token.set("jwt",response.data.token);
        if(response.data.success === 1){
          navigate("/Dashboard")
          console.log(token.get("jwt"))

        }else{
          setMessage(response.data.message);
        }
      });
    }
  return (
    <div>
        <form className='container_login'onSubmit={userLogin}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) =>{setEmail(e.target.value)}}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) =>{setPassword(e.target.value)}}/>
  </div>
  
  <button type="submit" class="btn btn-primary">Login</button>
  <Link to='/Register'><h5>Create account</h5></Link>
  <h4>{message}</h4>
</form>

  

    </div>
  )
}

export default Login