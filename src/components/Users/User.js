import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'

function User() {

    let [newUser, setNewUser] = useState([])

    let getUsers = async () => {
        try {
            let url = "http://localhost:4000/api/user"
            let { data } = await axios.get(url)
            setNewUser(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getUsers()
    }, [])

    let deactiveBtn = async(username)=>{
        try {
            let res = await axios.put(`http://localhost:4000/api/user/activate/${username}`)
            setNewUser(res.data)
        } catch (error) {
            console.log(error)
        }
        
    }
    let activateBtn = async(username)=>{
        // console.log(el)
        try {
             let res = await axios.put(`http://localhost:4000/api/user/deActivate/${username}`)
             setNewUser(res.data)
        } catch (error) {
             console.log(error)
        }
    }

    return (

        <div className='usercontainer'>
            <Navbar/>
            <div className="userTable mx-5">
                <Link to="/newUserForm"><button className='btn btn-success my-3' >Add New User</button></Link>
                <div className="table-responsive-sm">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">UserName</th>
                                <th scope="col">password</th>
                                <th scope="col">email</th>
                                <th scope="col">IsActive</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                newUser && newUser.map((e,i) => {
                                    return (

                                        <tr key={i}>
                                            <td>{e.name}</td>
                                            <td>{e.username}</td>
                                            <td>{e.password}</td>
                                            <td>{e.email}</td>
                                            {
                                                !e.isActive && <td>
                                                    <button className='btn btn-success' onClick={()=>deactiveBtn(e.username)}>Active</button>
                                                </td>
                                            }
                                            {
                                                e.isActive && <td>
                                                    <button className='btn btn-danger' onClick={()=>activateBtn(e.username)}>DeActive</button>
                                                </td>
                                            }
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default User
