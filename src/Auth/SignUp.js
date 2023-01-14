import axios from 'axios'
import React, { useState } from 'react'
import { json, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

function SignUp() {

  let [user, setuser] = useState({})


  let navigate = useNavigate()
  const signupclick = async(e) => {
    e.preventDefault()

    // fetch("http://localhost:4000/api/user/signup", {


    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(user)
    // }
    // ).then((res)=> console.log(res), navigate("/Login") ).catch((e)=>console.log(e))
    try {
      
      let headres = {
        "Content-Type": "application/json"
      }
      let res = await axios.post("http://localhost:4000/api/user/signup",user,headres)
      console.log(res)
    } catch (error) {
     console.log(error) 
    }

  }
  // useEffect(()=>{
  //   signupclick()
  // },[])

  return (
    <div>
      <Navbar />
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="Name" className="form-label">Name</label>
          <input type="text" className="form-control" onInput={(e) => setuser({ ...user, name: e.target.value })} id="name" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail4" autoComplete='off' onInput={(e) => setuser({ ...user, email: e.target.value })} />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword4" autoComplete='off' onInput={(e) => setuser({ ...user, password: e.target.value })} />
        </div>

        <div className="col-12">
          <button type="click" onClick={signupclick} className="btn btn-primary">Sign in</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
