import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SecuredRoute(props) {
    let [isLoggedIn, setIsLoggedInd] = useState(false)

    let local = localStorage.getItem("status")
    let navigate = useNavigate()
    
    useEffect(()=>{
            if(!local){
                navigate('/Login')
            }else{
                setIsLoggedInd(true)
            }
    },[])

  return (
    <div>
        {
            isLoggedIn ? props.children : null
        }
    </div>
  )
}

export default SecuredRoute
