import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Customerlist.css";
import Navbar from "../../Navbar/Navbar";
import DashBoard from "../DashBoard/DashBoard";
// import data from '../../../public/Customer.json'
function CustomerList() {
  let navigate = useNavigate();

  let [state, setState] = useState([]);
  let [filterstate, setFilterState] = useState([]);
  let [count, setcount] = useState({});
  let [page, setpage] = useState(1)
  let [total, settotal] = useState()
  
  console.log(filterstate)
  let apiCall = async () => {
    try {
      let api = process.env.REACT_APP_APPURL+`customer/page/${page}`;
      let { data } = await axios.get(api);
      
      let alldata = data.totalCount;
      let newData = data.records.filter((e) => e.status === "New").length
      let newReject = data.records.filter((e) => e.status === "Rejected").length
      let newAccept = data.records.filter((e) => e.status === "Accepted").length
      
      setState(data.records);
      setFilterState(data.records);
      setcount({ newData, newAccept, newReject, alldata })

      let totalpages = Math.ceil(data.totalCount / 100)
      let arrpage = new Array(totalpages).fill(0)
      settotal(arrpage)

    } catch (error) {
      console.log(error);
    }
  };

  console.log("total", total)

  const EditBtn = (editcutomer) => {
    console.log("click");
    navigate("/form/" + editcutomer);
  };

  const deletebtn = async(delname) => {
    try {
      let url = process.env.REACT_APP_APPURL+`customer/${delname}`;
      let { data } = await axios.delete(url);
      setState(data);
      setFilterState(data)
    } catch (error) {
      console.log(error);
    }
  };


  let handleSearch = (e) => {
    if (!e || e.length == 0) {
      setFilterState(state)
    } else {

      let result = state.filter(c => c.name.toUpperCase().includes(e.toUpperCase()))
      setFilterState([...result])
      console.log(filterstate)
    }
  }

  

  let selectPage = (selected) => {
    console.log(selected)
    setpage(selected)
  }

  let prevClick = () => {
    setpage(page - 1)
  }
  let nextClick = () => {
    setpage(page + 1)
  }

  useEffect(() => {

    apiCall();
  }, [page]);




  return (
    <>
      <Navbar />
      {state.length === 0 && (
        <div className="alert alert-primary" role="alert">
          No Customer data is added
        </div>
      )}

      <div className="container my-3">
        <DashBoard count={count} />


        <Link to="/form">
          <button className="btn btn-success">Add Customer</button>
        </Link>


        <form className="d-flex align-item-center my-3 searchForm" role="search">
          <input className="form-control " style={{ width: "18rem" }} type="search" onInput={(e) => { handleSearch(e.target.value) }} placeholder="Search" aria-label="Search" />
          <span><i className="searchIcon fa-solid fa-magnifying-glass"></i></span>
        </form>


        <div className="table-responsive-sm">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">First</th>
                {/* <th scope="col">website</th> */}
                <th scope="col">Revenue</th>
                <th scope="col">NUMBER OF EMPLOYEE</th>
                <th scope="col">CEO</th>
                <th scope="col">Establish Year</th>
                <th scope="col">status</th>
              </tr>
            </thead>
            <tbody>


              {filterstate &&
                filterstate.map((e, i) => {
                  return (
                    <tr key={i}>
                      <td>{e.name}</td>
                      {/* <td>{e.website}</td> */}
                      <td>{e.turnover}</td>
                      <td>{e.employees}</td>
                      <td>{e.ceo}</td>
                      <td>{e.year}</td>
                      <td className={
                        e.status == "New" ? "bg-primary" :
                          e.status == "Accepted" ? "bg-success" :
                            e.status == "Rejected" ? "bg-danger" : ""
                      }>{e.status}</td>

                      <td>
                        <i
                          onClick={() => EditBtn(e.name)}
                          className="cursor-pointer fa-solid fa-pen-to-square mx-2"
                        ></i>
                        <i
                          onClick={() => deletebtn(e.name)}
                          className="fa-solid fa-trash"
                        ></i>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>

        </div>

        {
          state.length > 0 &&

          <nav aria-label="Page navigation example text-center">
            <ul className="pagination">
              {
                <li className="page-item"
                ><button className="btn btn-primary" disabled={page <= 1} onClick={() => prevClick()}>Previous</button></li>
              }

              {
                total.map((_, i) => {
                  return (
                    <li className="page-item " key={i}><button onClick={() => selectPage(i + 1)} className="btn btn-primary mx-2">{i + 1}</button></li>
                  )
                })
              }

              <li className="page-item d-flex justify-content-between"><button className="btn btn-primary" disabled={page === total.length} onClick={() => nextClick()}>Next</button></li>
            </ul>
          </nav>
        }
      </div>
    </>
  );
}

export default CustomerList;
