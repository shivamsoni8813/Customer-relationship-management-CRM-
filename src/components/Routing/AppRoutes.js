import React, { lazy, Suspense } from 'react';
// import CustomerForm from '../customerform/CustomerForm'
// import CustomerList from '../customerlist/CustomerList'
import { Routes, Route } from 'react-router-dom'
// import Login from '../../Auth/Login'
// import SignUp from '../../Auth/SignUp'
import SecuredRoute from '../../Utility/SecuredRoute'
// import User from '../Users/User'
// import AddingNewUsers from '../Users/AddingNewUsers'
import Spinner from '../../Utility/Spinner'

let CustomerForm = lazy(() => import('../customerform/CustomerForm'));
let CustomerList = lazy(() => import("../customerlist/CustomerList"));
let Login = lazy(() => import("../../Auth/Login"));
let User = lazy(() => import("../Users/User"));
let AddingNewUsers = lazy(() => import("../Users/AddingNewUsers"));
let TicketForm = lazy(() => import('../Ticket/TicketForm'))
let Ticket = lazy(() => import('../Ticket/Ticket'))




function AppRoutes() {

  return (
    <div>
      <Routes>

        <Route path='/' element={<SecuredRoute>
          <Suspense fallback={<Spinner />}>

            <CustomerList />

          </Suspense>

        </SecuredRoute>}>

        </Route>
        <Route path='/form' element={
          <SecuredRoute>
            <Suspense fallback={<Spinner />}>

              <CustomerForm />
            </Suspense>

          </SecuredRoute>} ></Route>
        <Route path='/form/:editcutomer' element={
          <SecuredRoute>
            <Suspense fallback={<Spinner />}>
              <CustomerForm />
            </Suspense>
          </SecuredRoute>} ></Route>
        <Route path='/Login' element={
          <Suspense fallback={<Spinner />}>

          <Login />
          </Suspense>
          }></Route>
        <Route path='/user' element={<SecuredRoute>
          <Suspense fallback={<Spinner />}>

          <User />
          </Suspense>
          </SecuredRoute>}></Route>
        <Route path='/Ticket' element={
        <SecuredRoute>
          <Suspense fallback={<Spinner />}>

          <Ticket />
          </Suspense>
          </SecuredRoute>}></Route>
        <Route path='/TicketForm' element={
        <SecuredRoute>
          <Suspense fallback={<Spinner />}>

          <TicketForm />
          </Suspense>
          </SecuredRoute>}></Route>
        <Route path='/TicketForm/:desc' element={<SecuredRoute>
          <Suspense fallback={<Spinner />}><TicketForm /></Suspense></SecuredRoute>}></Route>
        {/* <Route path='/Signup' element = {<SignUp/>}></Route> */}
        <Route path='/newUserForm' element={<SecuredRoute>
          <Suspense fallback={<Spinner />}>

          <AddingNewUsers />
          </Suspense>
          </SecuredRoute>}></Route>
      </Routes>
    </div>
  )
}

export default AppRoutes
