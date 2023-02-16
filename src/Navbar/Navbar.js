import React from 'react'
import { Link } from 'react-router-dom'
import  {useState} from 'react';
import {Sidebar} from 'primereact/sidebar';
import {Button} from 'primereact/button';
import "./Navbar.css"
function Navbar() {
  const [visible, setVisible] = useState(false);

  let localstatus = localStorage.getItem("status")

  let onlogout = () => {
    localStorage.removeItem("status")
  }

  let onlogin = () => {

  }

  return (
    <div>
      {/* <nav className="navbar bg-dark navbar-expand-lg" data-bs-theme="dark">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              </li>
              
             
            </ul>
            <form className="d-flex justify-content-between" role="search">
              <Link to="/Login"><button className="btn btn-outline-success mx-3" onClick={localstatus == 200 ? () => onlogout() : () => onlogin()} type="submit">{localstatus == 200 ? "Logout" : "Login"}</button></Link>
              {/* <Link to="/Signup"><button className="btn btn-outline-success" type="submit">SignUp</button></Link> */}
      {/* </form>
          </div>
        </div> */}
      {/* </nav> */}


    


      <div className="card flex justify-content-center my-5 mx-3 fixed-top " style={{width:"3rem"}}>
        <Sidebar visible={visible} onHide={() => setVisible(false)}>
          <h2>Sidebar</h2>
         <ul className='menuBar'>
         <Link className="navbar-brand" to={localstatus == 200 ? "/" : "/Login"}>CRM</Link>
         <Link className="nav-link active" aria-current="page" to={localstatus == 200 ? "/" : "/Login"}>CustomerList</Link>
         <Link to="/user">
                <li className="nav-link" aria-current="page">Users</li>
              </Link>
              <Link to='/Ticket'>
                <li className="nav-link active" aria-current="page">Customer Ticket</li>
              </Link>
        
         </ul>
        </Sidebar>
        <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
      </div>

    </div>
  )
}

export default Navbar
