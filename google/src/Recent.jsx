import { Button, Rating } from '@mui/material'
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import React, { useEffect, useState } from 'react'
import BasicModal from './PopUp';
import axios from 'axios';
import { margin } from '@mui/system';

function Recent() {
  const [togle,setTogle] = useState(false)
  const [recent,setRecent] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8000/recent").then((res)=>{
      setRecent(res.data)
    })
  },[])
 
const handleClick = () => {
  setTogle(true)
}
const hadleClose = () => {
  setTogle(false)
}
  return (
    <div>
<CallReceivedIcon onClick={handleClick} className='Icons-rest'/>
{togle==true?
<>

<div className='MainCointer'>
  <div className='Container'>
  <h1>Recent Locations</h1>
  <h2 onClick={hadleClose} className='closeBtn'>X</h2>
  </div>
{recent.map((el)=>{
  return <div>
  
  <div className='Maindetails'>
    <div >
    <div className='details-contaner'>
  <h3>{el.City}</h3>
<p>{el.pincode}</p>
</div>
<div className='details-contaner'>
  <p>{el.lat}</p>,
  <p>{el.long}</p>
</div>
<Rating name="read-only" value={el.rating} readOnly />
</div>
<div>
<img style={{width:"80%", height:"50%", padding:"10px",  margin :"auto"}} src={el.img} alt="" />
</div>
  </div>
  <hr/>
  </div>

})}

</div>

</>:
<>
</>}
    </div>
  )
}

export default Recent