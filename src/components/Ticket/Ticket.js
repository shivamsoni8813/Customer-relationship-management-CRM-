import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'
import DashBoard from '../DashBoard/DashBoard'
import './Ticket.css'
import TicketDashboard from './TicketDashboard'
function Ticket() {

  let [customerTicke, setCustomerTicket] = useState([])
  let [filterduCustomerTicke, setFilterdCustomerTicket] = useState([])
  let [count, setcount] = useState({})
  let [edit ,setedit ] = useState(false)
  let navigate = useNavigate()

  let ticketApi = async () => {
    try {
      let url = process.env.REACT_APP_APPURL+"ticket"
      let { data } = await axios.get(url)
      setCustomerTicket(data)
      setFilterdCustomerTicket(data)
      console.log(data)

      let alldata = data.length;
      let newData = data.filter((e) => e.status === "New").length
      let Assigned = data.filter((e) => e.status === "Assigned").length
      let Resolved = data.filter((e) => e.status === "Resolved").length
      let Progress = data.filter((e) => e.status === "In Progress").length

      setcount({ newData, Assigned, Resolved, Progress, alldata })
    }
    catch (e) {
      console.log(e)
    }
  }

  let editableClick = (desc) => {
    navigate('/TicketForm/' + desc)
    console.log(desc)
  }

  let handleTicketSearch = (el) => {
    if (!el || el.length == 0) {
      console.log(customerTicke)
      setFilterdCustomerTicket(customerTicke)
    }
    else {
      let result = customerTicke.filter(e => e.customer.toLowerCase().includes(el.toLowerCase()))
      setFilterdCustomerTicket([...result])
    }
  }

  useEffect(() => {
    ticketApi()
  }, [])

  return (
    <div>
      <Navbar />
      <div className="Ticket-container my-3">
        <div className="container">

          <TicketDashboard count={count} />
        </div>
        <Link to="/TicketForm">
          <button className='btn btn-danger my-3'>NewTicket</button>
        </Link>
        <form className="d-flex align-item-center my-3 searchForm" role="search">
          <input className="form-control " style={{ width: "18rem" }} type="search" onInput={(e) => { handleTicketSearch(e.target.value) }} placeholder="Search for customer..." aria-label="Search" />
          <span><i className="searchIcon fa-solid fa-magnifying-glass"></i></span>
        </form>
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
                filterduCustomerTicke && filterduCustomerTicke.map((e, i) => {
                  return (

                    <>

                      <tr key={i}>
                        <td>{edit ? e.customer.name : e.customer}</td>
                        <td>{e.assignedTo}</td>
                        <td>{e.raisedOn}</td>
                        <td>{e.desc}</td>
                        <td className={e.status =="New"? "bg-primary":e.status=="Resolved"? "bg-success":e.status=="In Progress"?"bg-warning":e.status=="Assigned"?"bg-danger":""} >{e.status}</td>
                        <td><i className="fa-solid fa-pen-to-square" onClick={() => editableClick(e.desc)}></i></td>
                      </tr>

                    </>
                  )
                })
              }


            </tbody>
          </table>
        </div></div>
    </div>
  )
}

export default Ticket
