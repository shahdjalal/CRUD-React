import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function () {

    const { register,control , handleSubmit} = useForm();
    const navigate = useNavigate(); // عشان ينقلنا على صفحة المستخدمي/
    const RegisterUser =async (data)=>{

        const response = await axios.post(`${import.meta.env.VITE_BURL}/users`,data);

        if(response.status === 201){

            navigate('/users')
        }
console.log(response)
    }
  return (
    <>
    <form onSubmit={handleSubmit(RegisterUser)}>
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
        />
        <label htmlFor="email"> Email</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="password"
          {...register("password")}
        />
        <label htmlFor="password"> password</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="phone"
          placeholder="phone"
          {...register("phone")}
        />
        <label htmlFor="phone"> phone</label>
      </div>

      <button type="submit" className="btn btn-outline-primary">
        add
      </button>

      
    
    </form>

<DevTool control={control} />

</>
  );
}
