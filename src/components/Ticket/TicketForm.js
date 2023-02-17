import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'
import { Dropdown } from 'primereact/dropdown';
import "./TicketForm.css"
function TicketForm() {

    let [ticketState, setTicketState] = useState({
        customer: "",
        desc: "",
        assignedTo: "",
        raisedOn: "",
        status: ""
    })
    let [customer, setcustomer] = useState([])
    let [user, setUser] = useState([])
    let navigate = useNavigate()

    let { desc } = useParams()


    let raiseTicket = async () => {
        try {
            let url = process.env.REACT_APP_APPURL+`ticket`
            let { data } = desc ? await axios.put(url, ticketState) : await axios.post(url, ticketState)
            console.log(data)
            navigate("/Ticket")
        }
        catch (e) {
            console.log(e)
        }
    }




    let fetchCustomer = async () => {
        try {
            let url = process.env.REACT_APP_APPURL+`customer`
            let { data } = await axios.get(url)
            setcustomer(data)
        }
        catch (e) {
            console.log(e)
        }
    }


    let fetchuser = async () => {
        try {
            let url = process.env.REACT_APP_APPURL+`user`
            let { data } = await axios.get(url)
            console.log("user", data)
            setUser(data)
        }
        catch (e) {
            console.log(e)
        }
    }


    useEffect(() => {
        fetchCustomer()
        fetchuser()
        if (desc) {

            let editQuery = async () => {
                try {
                    let url = process.env.REACT_APP_APPURL+`ticket/${desc}`
                    let { data } = await axios.get(url)
                    console.log("fire")
                    setTicketState(data)

                } catch (e) {
                    console.log(e)
                }
            }
            editQuery()
        }

    }, [])

    // console.log(ticketState)
    return (
        <div>
            <Navbar />
            <div className="ticketForm-container">

                <div className="row my-5">
                    <label htmlFor="AssigndTo">Customer:</label>
                    <div className="col my-2">
                    
                        <Dropdown disabled={desc} value={customer.find(e=> e.name == ticketState.customer)} onChange={(e) => {setTicketState({...ticketState, customer : e.value.name })}} options={customer} optionLabel="name" placeholder="Select a customer"
                            filter className="w-full md:w-14rem" />
                    </div>

                        <label htmlFor="AssigndTo">AssignTo:</label>
                    <div className="col-md-12 my-2">
                        <Dropdown value={user.find(e=>e.name== ticketState.assignedTo)} onChange={(e) => setTicketState({ ...ticketState, assignedTo: e.value.name })} options={user} optionLabel="name" placeholder=" AssignedTo"
                            filter className="w-full md:w-14rem" />
                    </div>

                        <label htmlFor="Date">Date:</label>
                    <div className="col-md-6 my-2">
                        <input type="date" readOnly={desc} className="form-control" value={ticketState.raisedOn} onChange={(e) => setTicketState({ ...ticketState, raisedOn: e.target.value })} aria-label="Last name" />
                    </div>

                        <label htmlFor="Issue">Issue:</label>
                    <div className="col-md-6 my-2">
                        <input type="text" className="form-control" value={ticketState.desc} onChange={(e) => setTicketState({ ...ticketState, desc: e.target.value })} placeholder="Description" aria-label="Last name" />
                    </div>

                    <div className="input-group my-3">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Status</label>
                        <select className="form-select col-md-6" defaultValue={ticketState.status} onChange={(e) => setTicketState({ ...ticketState, status: e.target.value })} id="inputGroupSelect01">

                            <option selected={"choose"} >Choose</option>
                            <option selected={"New" === ticketState.status} defaultValue="New">New</option>
                            <option selected={"Assigned" === ticketState.status} defaultValue="Assigned">Assigned</option>
                            <option selected={"In Progress" === ticketState.status} defaultValue="In Progress">In Progress</option>
                            <option selected={"Resolved" === ticketState.status} defaultValue="Resolved">Resolved</option>

                        </select>
                    </div>
                    <div className='ticket my-3'>
                    <button className='btn btn-dark ticketBtn' onClick={() => raiseTicket()}>{desc ?"update" : "submit"}</button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default TicketForm
