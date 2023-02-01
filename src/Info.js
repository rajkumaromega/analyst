import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import List from './List'

const Info = ({users}) => {  
  return (
    <div className='chamber'>
       {
        users.map((user)=>(
          <List user={user}  />
        ))
       }
      
    </div>
  )
}

export default Info