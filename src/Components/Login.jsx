import React, { useState } from 'react';
import axios from 'axios';
import {Navigate, useNavigate} from 'react-router-dom';

const Login = () => {
  let Navigate=useNavigate()
  const [data,setdata]=useState(
    {
      username:"",
      password:""
    }
  );
  const inputhandler=(event)=>{
    const {name,value}=event.target
     setdata(
      (pre)=>(
        {
          ...pre,
          [name]:value
        }
      )
     )
  }

  const readvalues=()=>{
    console.log(data);
    axios.post("http://localhost:4000/login",data)
    .then(
      (response)=>{
        console.log(response.data.data.length)
        if (response.data.data.length==1) {
          let empname=response.data.data[0].name;
          alert("employee login successful")
          sessionStorage.setItem("name",empname);
          Navigate("/")
        } else {
          alert("invalid credentials")
        }
      
      }
    )
    .catch(
      (err)=>{
        console.log(err);
      }
    )
  }
  return (
    <div>
       <nav class="navbar bg-warning navbar-dark " >
  <div class="container-fluid">
    <a class="navbar-brand" href="/">WELCOME TO USER LOGIN</a>
  </div>
</nav> 
<div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row-g-3">
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-6 col-xl-6 col-xxl-6">
                           <form action="" className="label-form">User Name</form> 
                           <input 
                           type="text" 
                           className="form-control" 
                           name='username'
                           value={data.username}
                           onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-6 col-xl-6 col-xxl-6">
                        <form action="" className="label-form">Password</form> 
                           <input 
                           type="password" 
                           className="form-control"
                           name='password'
                           value={data.password}
                           onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br />
                            <button className="btn btn-success" onClick={readvalues}>Login</button>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Login