import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'

function AddingNewUsers() {
    let [userObj, SetUserObj] = useState({
        name:"",
        username:"",
        password:"",
        email:"",
        checked:""
    })
    let navigate = useNavigate()

    let newuserAdding = async()=>{
        try {
            let url = "http://localhost:4000/api/user/signup"
            let res = await axios.post(url,userObj)
            console.log(userObj)
            navigate("/user")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Navbar />
            <div className="newForm  mx-3">
                <h1 className='userHeadder text-center my-3'>Add New User</h1>
                <div className="newuserForm">
                    <div className="row">
                        <div className="col-12 my-3">
                            <input type="text" className="form-control" value={userObj.name} onChange={(e)=>SetUserObj({...userObj,name : e.target.value})} placeholder="First name" aria-label="First name" />
                        </div>
                        <div className="col-12 my-3">
                            <input type="text" className="form-control"  value={userObj.username} onChange={(e)=>SetUserObj({...userObj,username : e.target.value})} placeholder="Username" aria-label="Username" />
                        </div>
                        <div className="col-12 my-3">
                            <input type="password" className="form-control"  value={userObj.password} onChange={(e)=>SetUserObj({...userObj,password : e.target.value})} placeholder="password" aria-label="password" />
                        </div>
                        <div className="col-12 my-3">
                            <input type="email" className="form-control"  value={userObj.email} onChange={(e)=>SetUserObj({...userObj,email : e.target.value})} placeholder="email" aria-label="email" />
                        </div>
                        <div className="form-check mx-3 my-3">
                            <input className="form-check-input" type="checkbox"   value={userObj.checked} onChange={(e)=>SetUserObj({...userObj, checked : e.target.checked?"yes":"no"})} id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Active
                            </label>
                        </div>
                        <button type="button" onClick={()=>newuserAdding()} className="btn btn-outline-success">AddUser</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddingNewUsers
