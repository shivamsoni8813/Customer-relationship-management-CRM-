import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'
import './Ticket.css'
function Ticket() {

  let [customerTicke, setCustomerTicket] = useState([])

  let navigate = useNavigate()

  let ticketApi = async () => {
    try {
      let url = "http://localhost:4000/api/ticket"
      let { data } = await axios.get(url)
      setCustomerTicket(data)
    }
    catch (e) {
      console.log(e)
    }
  }

  let editableClick = (desc) =>{
    navigate('/TicketForm/'+ desc)
    console.log(desc)
  }

  useEffect(() => {
    ticketApi()
  }, [])

  return (
    <div>
      <Navbar />
      <Link to="/TicketForm">
        <button className='btn btn-danger my-3'>NewTicket</button>
      </Link>
      <div class="table-responsive">

      <table className="table">
        <thead>
          <tr>
            <th scope="col">customer</th>
            <th scope="col">assignedTo</th>
            <th scope="col">raisedOn</th>
            <th scope="col">Description</th>
            <th scope="col">status</th>
            <th scope="col">edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            customerTicke && customerTicke.map((e, i) => {
              return (
                
                <>

                  <tr key={i}>
                    <td>{e.customer}</td>
                    <td>{e.assignedTo}</td>
                    <td>{e.raisedOn}</td>
                    <td>{e.desc}</td>
                    <td>{e.status}</td>
                 <td><i className="fa-solid fa-pen-to-square" onClick={()=>editableClick(e.desc)}></i></td> 
                  </tr>

                </>
              )
            })
          }


        </tbody>
      </table>
    </div>
              </div>
  )
}

export default Ticket
