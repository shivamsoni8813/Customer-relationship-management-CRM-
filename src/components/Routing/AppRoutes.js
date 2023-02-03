import React from 'react'
import CustomerForm from '../customerform/CustomerForm'
import CustomerList from '../customerlist/CustomerList'
import { Routes,Route } from 'react-router-dom'
import Login from '../../Auth/Login'
import SignUp from '../../Auth/SignUp'
import SecuredRoute from '../../Utility/SecuredRoute'
import User from '../Users/User'
import AddingNewUsers from '../Users/AddingNewUsers'

function AppRoutes() {

  return (
    <div>
      <Routes>
        <Route path='/' element ={<SecuredRoute> <CustomerList/> </SecuredRoute>}  ></Route>
        <Route path='/form' element ={<SecuredRoute> <CustomerForm/> </SecuredRoute>} ></Route>
        <Route path='/form/:editcutomer' element ={<CustomerForm/>} ></Route>
        <Route path='/Login' element = {<Login/>}></Route>
        <Route path='/user' element = {<SecuredRoute><User/></SecuredRoute>}></Route>
        {/* <Route path='/Signup' element = {<SignUp/>}></Route> */}
        <Route path='/newUserForm' element={<AddingNewUsers/>}></Route>
      </Routes>
    </div>
  )
}

export default AppRoutes
