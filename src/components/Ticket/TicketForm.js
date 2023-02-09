import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'

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
            let url = `http://localhost:4000/api/ticket`
            let { data } = desc ? await axios.put(url , ticketState) : await axios.post(url, ticketState)
            console.log(data)
            navigate("/Ticket")
        }
        catch (e) {
            console.log(e)
        }
    }




    let fetchCustomer = async () => {
        try {
            let url = `http://localhost:4000/api/customer`
            let { data } = await axios.get(url)
            setcustomer(data)
        }
        catch (e) {
            console.log(e)
        }
    }
    let fetchuser = async () => {
        try {
            let url = `http://localhost:4000/api/user`
            let { data } = await axios.get(url)
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
                    let url = `http://localhost:4000/api/ticket/${desc}`
                    let { data } = await axios.get(url)

                    setTicketState(data)

                } catch (e) {
                    console.log(e)
                }
            }
            editQuery()
        }

    }, [])

    return (
        <div>
            <Navbar />
            <div className="ticketForm-container">

                <div className="row my-5">
                    <label htmlFor="AssigndTo">Customer:</label>
                    <div className="col my-3">
                        <select className="form-select" disabled={desc}  defaultValue={ticketState.customer} onChange={(e) => setTicketState({ ...ticketState, customer: e.target.value })} aria-label="Default select example">
                            {
                                customer.map((e, i) => {
                                    return (<>
                                        
                                        <option selected={e.name === ticketState.customer} defaultValue={e.name} key={i}>{e.name}</option>

                                    </>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="col-md-12 my-3">
                        <label htmlFor="AssigndTo">AssignTo:</label>
                        <select className="form-select" selectedvalue={ticketState.assignedTo} onChange={(e) => setTicketState({ ...ticketState, assignedTo: e.target.value })} aria-label="Default select example">
                            {
                                user.map((e, i) => {
                                    return (<><option selected={e.name === ticketState.assignedTo} defaultValue={e.name} key={i}>{e.name}</option></>)
                                })
                            }
                        </select>
                    </div>
                    <div className="col-md-12 my-3">
                        <input type="date" readOnly={desc} className="form-control" value={ticketState.raisedOn} onChange={(e) => setTicketState({ ...ticketState, raisedOn: e.target.value })} aria-label="Last name" />
                    </div>
                    <div className="col-md-12 my-3">
                        <input type="text" className="form-control" value={ticketState.desc} onChange={(e) => setTicketState({ ...ticketState, desc: e.target.value })} placeholder="Description" aria-label="Last name" />
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                        <select className="form-select" value={ticketState.status} onChange={(e) => setTicketState({ ...ticketState, status: e.target.value })} id="inputGroupSelect01">

                            <option selected={"choose"} >Choose</option>
                            <option selected={"New" === ticketState.status} defaultValue="New">New</option>
                            <option selected={"Assigned" === ticketState.status}defaultValue="Assigned">Assigned</option>
                            <option selected={"In Progress" === ticketState.status} defaultValue="In Progress">In Progress</option>
                            <option selected={"Resolved" === ticketState.status} defaultValue="Resolved">Resolved</option>

                        </select>
                    </div>
                    <button className='btn btn-dark' onClick={() => raiseTicket()}>submit</button>
                </div>

            </div>

        </div>
    )
}

export default TicketForm
