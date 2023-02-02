import React, { useState } from 'react'

function Login() {
  const[fname,setFname] = useState("");
  const[lname,setLname] = useState("");
  const[bday,setBday] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] =useState("");

  const onSubmit=( ) =>{
    console.log(fname,lname,bday,email,password)
  }
  return (
    <form className='container' >
      <div class="mb-3">
        <h1>Registration</h1>
      </div>
       <div class="mb-3">
    <label class="form-label">Firtst Name</label>
    <input type="text" class="form-control" onChange={(e) =>{setFname(e.target.value)}} />
  </div>
  <div class="mb-3">
    <label class="form-label">Last Name</label>
    <input type="text" class="form-control" onChange={(e) =>{setLname(e.target.value)}} />
  </div>
  <div class="mb-3">
    <label class="form-label">Birth Day</label>
    <input type="date" class="form-control" onChange={(e) =>{setBday(e.target.value)}} />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) =>{setEmail(e.target.value)}}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) =>{setPassword(e.target.value)}}/>
  </div>
  <button type="submit" class="btn btn-primary"id="submit-button">Submit</button>
</form>
  )
}

export default Login