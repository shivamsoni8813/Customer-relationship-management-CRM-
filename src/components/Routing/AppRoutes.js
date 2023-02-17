import React from 'react'
import CustomerForm from '../customerform/CustomerForm'
import CustomerList from '../customerlist/CustomerList'
import { Routes,Route } from 'react-router-dom'
import Login from '../../Auth/Login'
import SignUp from '../../Auth/SignUp'
import SecuredRoute from '../../Utility/SecuredRoute'
import User from '../Users/User'
import AddingNewUsers from '../Users/AddingNewUsers'
import Ticket from '../Ticket/Ticket'
import TicketForm from '../Ticket/TicketForm'

function AppRoutes() {

  return (
    <div>
      <Routes>
        <Route path='/' element ={<SecuredRoute> <CustomerList/> </SecuredRoute>}  ></Route>
        <Route path='/form' element ={<SecuredRoute> <CustomerForm/> </SecuredRoute>} ></Route>
        <Route path='/form/:editcutomer' element ={<SecuredRoute><CustomerForm/></SecuredRoute>} ></Route>
        <Route path='/Login' element = {<SecuredRoute><Login/></SecuredRoute>}></Route>
        <Route path='/user' element = {<SecuredRoute><User/></SecuredRoute>}></Route>
        <Route path='/Ticket' element={<SecuredRoute><Ticket/></SecuredRoute>}></Route>
        <Route path='/TicketForm' element ={<SecuredRoute><TicketForm/></SecuredRoute>}></Route>
        <Route path='/TicketForm/:desc' element ={<SecuredRoute><TicketForm/></SecuredRoute>}></Route>
        {/* <Route path='/Signup' element = {<SignUp/>}></Route> */}
        <Route path='/newUserForm' element={<SecuredRoute><AddingNewUsers/></SecuredRoute>}></Route>
      </Routes>
    </div>
  )
}

export default AppRoutes
