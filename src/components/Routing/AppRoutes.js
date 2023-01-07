import React from 'react'
import CustomerForm from '../customerform/CustomerForm'
import CustomerList from '../customerlist/CustomerList'
import { Routes,Route } from 'react-router-dom'

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element ={<CustomerList/>} ></Route>
        <Route path='/form' element ={<CustomerForm/>} ></Route>

      </Routes>
    </div>
  )
}

export default AppRoutes
