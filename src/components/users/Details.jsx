import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'

export default function Details() {

    const navigate= useNavigate();
    const {id} = useParams();
    const {register,handleSubmit,setValue} = useForm(); 

    const getDetails =async ()=>{

        const {data}= await  axios.get(`${import.meta.env.VITE_BURL}/users/${id}`);
        setValue('userName',data.user.userName);
        setValue('email',data.user.email);
        setValue('phone',data.user.phone);
        console.log(data);


    }


    useEffect( ()=>{
        getDetails();
    }, [ ])


    //update

    const updateUser = async (value)=>{

        const response= await  axios.put(`${import.meta.env.VITE_BURL}/users/${id}`,

            {

userName: value.userName,

            }
        );
        console.log(response)

        if(response.status ===200){

navigate("/users")
        }

    }


  return (

    <form onSubmit={handleSubmit(updateUser)}>
    <div className="form-floating mb-3">
      <input
        type="text"
        className="form-control"
        id="userName"
        placeholder="userName"
        {...register("userName")}
      />
      <label htmlFor="userName"> UserName</label>
    </div>

    <div className="form-floating mb-3">
      <input
        type="email"
        className="form-control"
        id="email"
        placeholder="email"
        {...register("email")}
        disabled
      />
      <label htmlFor="email"> Email</label>
    </div>

 

    <div className="form-floating mb-3">
      <input
        type="text"
        className="form-control"
        id="phone"
        placeholder="phone"
        {...register("phone")}
        disabled
      />
      <label htmlFor="phone"> phone</label>
    </div>

    <button type="submit" className="btn btn-outline-primary">
      Update
    </button>

    
  
  </form>
  )
}
