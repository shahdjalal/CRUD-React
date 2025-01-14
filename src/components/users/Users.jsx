import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function () {

    const [users,setUsers]=useState([]);
const getUsers =async ()=>{


    const {data}= await  axios.get(`${import.meta.env.VITE_BURL}/users`);

    setUsers(data.users);
   
}

useEffect( ()=>{
    getUsers()
},[users]);


//delete

const DeleteUser = async (id)=>{

  const {data}= await axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`);
  console.log(data)
}
  return (
    <>
     <Link className='btn btn-primary' to={'/create'}>Create</Link>

<section className=' users d-flex justift-content-between   flex-wrap gap-2' >
        {users.map( (user)=>( 
               
        <div className="card mt-4 " style={{width: '18rem'}}>
  <div className="card-body ">
    <h5 className="card-title">Name : {user.userName}</h5>
    <p className="card-text"> Email : {user.email}</p>

    <button onClick={()=>DeleteUser(user._id)} className="btn btn-danger">Delete</button>

    <Link className='btn btn-primary m-3' to={`/users/${user._id}`}>Details</Link>
  </div>
</div>

               
        )
              

        )}
        </section>

    </>
  )
}
