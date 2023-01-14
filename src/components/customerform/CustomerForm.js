import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import "./CustomerForm.css";

function CustomerForm() {
  let navigate = useNavigate();

  let [state, setstate] = useState({
    name : "",
    ceo : "",
    employees : "",
    turnover : "",
    website : "",
    year : "",

  });

  let { editcutomer } = useParams();
  // console.log(editcutomer)

  useEffect(() => {
    if (editcutomer) {
      // fetch("http://localhost:4000/api/customer").then((res) => { return res.json() }).then((res) => {
      //     let result = res.find((e) =>  e.name === editcutomer )
      //     if (result) {
      //         setstate(result)
      //     }
      // })
      let getcutomers = async () => {
        let { data } = await axios.get("http://localhost:4000/api/customer");
        let findsamedata = data.find((el) => {
          return el.name === editcutomer;
        });
        if (findsamedata) {
          setstate(findsamedata);
        }
      };
      getcutomers();
    }
  }, []);

  const handleClick = async () => {
    try {
      let baseUrl = "http://localhost:4000/api/customer";
      let header = {
        "content/type": "application/json",
      };
      let res = await axios.post(baseUrl, state, header);
      console.log(res);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async () => {
    console.log("update", state);
    let res = await axios.put(`http://localhost:4000/api/customer`, state );
    // console.log("updateted", state);
    navigate('/')
    // console.log(res);
    return res
   
  };

  // useEffect(()=>{
  //     update()
  // },[])
  return (
    <div>
      <div className="forDetails">
        <Navbar/>
        <form className="row g-3">
          <h1 className="text-center my-4">Customer Details</h1>
          <div className="col-md-6">
            <label htmlFor="inputname" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              value={state.name}
              onChange={(e) => {
                setstate({ ...state, name: e.target.value });
              }}
              placeholder="enter your name"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputweb" className="form-label">
              WebSite
            </label>

            <input
              type="text"
              className="form-control"
              id="inputWeb"
              value={state.website}
              onChange={(e) => {
                setstate({ ...state, website: e.target.value });
              }}
              placeholder="enter your WebSite"
            />
          </div>
          <div className="col-12">
            <label htmlFor="Revenue" className="form-label">
              Revenue
            </label>

            <input
              type="text"
              className="form-control"
              id="revenue"
              value={state.turnover}
              onChange={(e) => {setstate({ ...state, turnover: e.target.value })}}
              placeholder="Enter Revenue"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmployee" className="form-label">
              Employee
            </label>
            <input
              type="number"
              className="form-control"
              id="inputEmployee"
              value={state.employees}
              onChange={(e) => {setstate({ ...state, employees: e.target.value })}}
              placeholder="Enter Count Of Employees"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCeo" className="form-label">
              CEO
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCeo"
              value={state.ceo}
              onChange={(e) => {setstate({ ...state, ceo: e.target.value })}}
              placeholder="enter CEO Name"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputEstablisYear" className="form-label">
              Establis Year
            </label>
            <input
              type="number"
              className="form-control"
              id="establishYear"
              value={state.year}
              onChange={(e) => {setstate({ ...state, year: e.target.value })}}
              placeholder="enter establish year"
            />
          </div>

          <div className="col-12 text-center">
            <button
              type="button"
              className="submitbtn btn-primary"
              onClick={editcutomer ? handleEdit : handleClick}
            >
              {editcutomer ? "updateCustomer" : "Create New Customer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CustomerForm;
