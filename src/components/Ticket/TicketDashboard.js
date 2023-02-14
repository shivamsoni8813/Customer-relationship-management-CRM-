import React from 'react'
import './TicketDashboard.css'

function TicketDashboard({count}) {
    
    console.log(count)
  return (
    <div>
      <div>
      <div className="dashboard-container">
        <div className="tile tile-all mx-2"> 
        <li>
          All
        </li>
        <hr />
        {count.alldata}
       </div>

        <div className="tile tile-New mx-2"><li>New</li><hr />{count.newData}</div>
        <div className="tile tile-New mx-2"><li>Assigned</li><hr />{count.Assigned}</div>
        <div className="tile tile-Rejected mx-2"><li>InProgress</li><hr />{count.Progress}</div>
        <div className="tile tile-Accepted mx-2"><li>Resolved</li><hr />{count.Resolved}</div>


      </div>
    </div>
    </div>
  )
}

export default TicketDashboard
