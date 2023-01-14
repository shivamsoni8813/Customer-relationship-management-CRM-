import React from 'react'
import CustomerForm from '../customerform/CustomerForm'
import CustomerList from '../customerlist/CustomerList'
import { Routes,Route } from 'react-router-dom'
import Login from '../../Auth/Login'
import SignUp from '../../Auth/SignUp'

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element ={<CustomerList/>} ></Route>
        <Route path='/form' element ={<CustomerForm/>} ></Route>
        <Route path='/form/:editcutomer' element ={<CustomerForm/>} ></Route>
        <Route path='/Login' element = {<Login/>}></Route>
        <Route path='/Signup' element = {<SignUp/>}></Route>
      </Routes>
    </div>
  )
}

export default AppRoutes
