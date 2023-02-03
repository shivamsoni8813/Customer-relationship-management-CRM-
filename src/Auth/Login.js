import axios from "axios";
import React from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";

function Login() {

  let [logUser, setLogUser] = useState({})
  

  const handleLogIn = async()=>{
    let url = "http://localhost:4000/api/user/signin"
    try {
      let res = await axios.post(url, logUser)
      console.log(res)
      localStorage.setItem("status", res.status)
      window.location.href = "/"
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
  
  <div>
      <Navbar/>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e)=>setLogUser({...logUser, email: e.target.value})}
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e)=>setLogUser({...logUser, password: e.target.value})}

          />
        </div>
        
        <button type="button" onClick={()=>handleLogIn()} className="btn btn-primary">
          login
        </button>
      </form>
    </div>
  );
}

export default Login;
