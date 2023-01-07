import React, { useState } from 'react'
import './CustomerForm.css'
function CustomerForm() {

    let [state, setstate] = useState({})
    
    
    const handleClick = () =>{
        
        console.log(state)
    }
    
    return (
        <div>
            <div className="forDetails">

                <form className="row g-3">
                <h1 className='text-center my-4'>Customer Details</h1>
                    <div className="col-md-6">
                        <label htmlFor="inputname"  className="form-label">Name</label>
                        <input type="text" className="form-control" onChange={(e)=>{state.name=e.target.value ; setstate(state)}}  placeholder='enter your name' required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputweb" className="form-label">WebSite</label>
                        <input type="text" className="form-control" id="inputWeb"  onChange={(e)=>{state.website=e.target.value ; setstate(state)}} placeholder='enter your WebSite' />
                    </div>
                    <div className="col-12">
                        <label htmlFor="Revenue" className="form-label">Revenue</label>
                        <input type="text" className="form-control" id="revenue"  onChange={(e)=>{state.Revenue=e.target.value ; setstate(state)}}  placeholder="Enter Revenue" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputEmployee" className="form-label">Employee</label>
                        <input type='number' className="form-control" id="inputEmployee"  onChange={(e)=>{state.Employee=e.target.value ; setstate(state)}}  placeholder="Enter Count Of Employees" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCeo" className="form-label">CEO</label>
                        <input type="text" className="form-control" id="inputCeo"  onChange={(e)=>{state.CEO=e.target.value ; setstate(state)}}  placeholder='enter CEO Name' />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputEstablisYear" className="form-label">Establis Year</label>
                        <input type="number" className='form-control' id='establishYear'  onChange={(e)=>{state.EstablisYear=e.target.value ; setstate(state)}}  placeholder='enter establish year' />
                    </div>


                    <div className="col-12 text-center">
                        <button type="button" className="submitbtn btn-primary" onClick={handleClick} >Create New Customer</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default CustomerForm
