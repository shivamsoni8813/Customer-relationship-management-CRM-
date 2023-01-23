import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import "./Customerlist.css"
import Navbar from '../../Navbar/Navbar'
// import data from '../../../public/Customer.json'
function CustomerList() {
  let navigate = useNavigate()

  let [state, setState] = useState([])

  let apiCall = async (e) => {
    // e.preventDefault()
    try {
      let api = 'http://localhost:4000/api/customer'
      let { data } = await axios.get(api)
      console.log(data)
      setState(data)
    } catch (error) {
      console.log(error)
    }
  }

  const EditBtn = (editcutomer) => {
    console.log("click")
    navigate("/form/" + editcutomer)
    // console.log(editcutomer)
  }

  const deletebtn = async(delname)=>{
  
    try {
      let url = `http://localhost:4000/api/customer/:${delname}` 
      let {data} = await axios.delete(url, delname)
      setState(data)
      
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    apiCall()
  }, [])

  console.log(state)
  return (
    <>
      <Navbar/>
    <div className='container my-3'>

      <Link to="/form"><button className='btn btn-success'>Add Customer</button></Link>

      <table className="table">   
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">website</th>
            <th scope="col">Revenue</th>
            <th scope="col">NUMBER OF EMPLOYEE</th>
            <th scope="col">CEO</th>
            <th scope="col">Establish Year</th>
          </tr>
        </thead>
        <tbody >
          
          {state.length === 0 && <div className="alert alert-primary" role="alert">
            A simple primary alert—check it out!
          </div>}

          {state &&
            state.map((e, i) => {
              return (    
                
                <tr key={i}>
                  <td>{e.name}</td>
                  <td>{e.website}</td>
                  <td>{e.turnover}</td>
                  <td>{e.employees}</td>
                  <td>{e.ceo}</td>
                  <td>{e.year}</td>
                  <td><i onClick={() => EditBtn(e.name)} className="cursor-pointer fa-solid fa-pen-to-square"></i>
                   <i onClick={()=>deletebtn(e.name)} className="fa-solid fa-trash" ></i></td>
                </tr>
              )
            })
            
          }

        </tbody>
      </table>
    </div>
          </>
  )
}

export default CustomerList
