import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  let localstatus = localStorage.getItem("status")

  let onlogout = ()=>{
    localStorage.removeItem("status")
  }

  let onlogin = ()=>{

  }

  return (
    <div>
      <nav className="navbar bg-dark navbar-expand-lg" data-bs-theme="dark">
  <div className="container">
    <Link className="navbar-brand" to={localstatus == 200 ? "/" : "/Login"}>CRM</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={localstatus == 200 ? "/" : "/Login"}>CustomerList</Link>
        </li>
        <Link to="/user">
          <li className="nav-link active" aria-current="page">Users</li>
        </Link>
      </ul>
      <form className="d-flex justify-content-between" role="search">
        <Link to="/Login"><button className="btn btn-outline-success mx-3" onClick={localstatus == 200 ? ()=>onlogout() : ()=> onlogin()} type="submit">{localstatus == 200 ? "Logout" : "Login"}</button></Link>
        {/* <Link to="/Signup"><button className="btn btn-outline-success" type="submit">SignUp</button></Link> */}
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
