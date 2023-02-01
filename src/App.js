import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import List from './List';

import Info from './Info';
import UserDetails from './UserDetails';
import Pagination from './Pagination';
function App() {
  const [users,setUsers] = useState([]);

  const fetchData =() =>{
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())  
    .then((data)=>setUsers(data));
  }

  useEffect(()=>{
    fetchData();
  },[])


  const [currentPage,setCurrentPage] = useState(2);
const [postsPerPage, setPostsPerPage] = useState(6)

const lastPostIndex = currentPage* postsPerPage;
const firstPostIndex = lastPostIndex - postsPerPage;
 const  currentPost =  users.slice(firstPostIndex,lastPostIndex);

  return (
    <main> 
      <Router>
        <Routes> 
            <Route path="/user/:id" element={<UserDetails users={users}/>} />
            <Route path='/' element={<Info users={currentPost}/>} />
           
        </Routes>
      </Router> 
      <Pagination totalPosts={users.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
    </main>
  );
}

export default App;
