import React, { useState } from 'react'
import NoUserDetails from './NoUserDetails';
import ShowDetails from './ShowDetails'
import "./UserSeperate.css"
const UserSeperate = ({user}) => { 
  const [Details,setDetails] = useState(true);
  
  return(
   
    <div className='upperfullb'>
        
         <div className='sec'>
       <div className='fullbody'>
        <div className='card crd'>
                <div className='part'>
                    <h4>Name</h4>
                    <p>{user.username}</p>
                </div>
                <div className='part'>
                        <h4>Contact</h4>
                        <p>{user.email}</p>
                </div>
                <div className='part'>
                        <h4>Street</h4>
                        <p>{user.address.street}</p>
                </div>
                <div className='part'>
                        <h4>City</h4>
                        <p>{user.address.city}</p>
                </div> 
                <div className='part'>
                      <button className='btn' onClick={()=>setDetails(!Details)}>{Details ? "Hide Details ": "Show Details"}</button>
                </div>
            </div>
            </div>
       
        <div className=''>
          
          {Details ? <ShowDetails user={user}/> : <NoUserDetails /> }
           
        </div>
      </div>
    </div>
  )
  }

export default UserSeperate