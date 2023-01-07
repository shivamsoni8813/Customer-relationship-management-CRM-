import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "./Customerlist.css"
// import data from '../../../public/Customer.json'
function CustomerList() {

  let [state, setState] = useState([])

  let apiCall = async () => {
    try {
      let api = 'http://localhost:4000/api/customer'
      let { data } = await axios.get(api)
      console.log(data)
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
    <div className='container'>
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
        <tbody>
          {
            state.map((e,i) => {
              return (

                <tr key={i}>
                  <td>{e.name}</td>
                  <td>{e.website}</td>
                  <td>{e.turnover}</td>
                  <td>{e.employees}</td>
                  <td>{e.ceo}</td>
                  <td>{e.year}</td>
                </tr>
              )
            })

          }

        </tbody>
      </table>
    </div>
  )
}

export default CustomerList
