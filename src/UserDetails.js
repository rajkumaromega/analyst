import React from 'react'
import { useParams } from 'react-router-dom';
import UserSeperate from './UserSeperate';
const UserDetails = ({users}) => {
  const routeParams = useParams();
  console.log(routeParams.id);
  return (
    <div>
       {users.map((user)=>{
        if(user.id==routeParams.id){
         return(
          <UserSeperate key={user.id} user={user}/>
         )
        }
      })}
    </div>
  )
}

export default UserDetails