import React from 'react'
import"./DashBoard.css"
function DashBoard({count}) {
    
  return (
    <div>
      <div className="dashboard-container">
        <div className="tile tile-all"> 
        <li>
          All
        </li>
        <hr />
        {count.alldata}</div>

        <div className="tile tile-New"><li>New</li><hr /> {count.newData}</div>
        <div className="tile tile-Rejected"><li>Rejected</li><hr />{count.newReject}</div>
        <div className="tile tile-Accepted"><li>Accepted</li><hr />{count.newAccept}</div>


      </div>
    </div>
  )
}

export default DashBoard
