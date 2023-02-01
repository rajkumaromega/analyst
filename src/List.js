import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import "./List.css"
import userDetails from './UserDetails';
const List = ({user}) => {
  

  return (
    <div className='chamber'>
    <div className=' flex'>
        <div className='part'>
            
            <p>{user.username}</p>
        </div>
       <div className='part'>
            <h4>CONTACT</h4>
            <h4>{user.email}</h4>
    </div>
    <div className='part'>
            <h4>STREET</h4>
            <p>{user.address.street}</p>
    </div>
       <div className='part'>
            <h4>CITY</h4>
            <p>{user.address.city}</p>
        </div> 
        <div>
     <button className='btn btn-respo'><Link to={"/user/"+user.id} className="lnk">view details</Link></button>
     </div>
    </div>
    
    </div>
   
  )
}

export default List