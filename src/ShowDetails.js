import React from 'react'
import "./ShowDetails.css"
const ShowDetails = ({user}) => {
  return (
    <div className='description'>
         <div className='partone'>
            <h4>Description</h4>
            <p>{user.company.bs}</p>
            <h4>Contact Person</h4>
            <p>{user.company.name}</p>
            <h4>Email</h4>
            <p>{user.email}</p>
            <h4>Website</h4>
            <p>{user.website}</p>
            <h4>Phone</h4>
            <p>{user.phone}</p>
            </div>
            <div className='partTwo'>
            <h4>Address</h4>
            <p>{user.address.city}</p>
            <h4>Street</h4>
            <p>{user.address.street}</p>
            <h4>Suite</h4>
            <p>{user.address.suite}</p>
            <h4>zipcode</h4>
            <p>{user.address.zipcode}</p>
            </div>
    </div>
  )
}

export default ShowDetails