import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { LocalStorageService } from '../../Services/LocalStorageService';
import useFetchData from '../../CustomHooks/useFetchData';
import { NotificationService } from '../../Service/NotificationService';
import { useNavigate } from 'react-router-dom';

const UserDetailsModal = (props) => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm();

      const { loading, makeRequest } = useFetchData();

      const navigate = useNavigate()


      const createProfile = async (data) => {
        
          const number= props.number
          
        const payload = {
          "name": data.name,
           "email": data.email,
          "dob": data.dob,
          "alternate_mobile_number": data.alternate_mobile_number,
          "mobile_number": number,
          "country_code": "91"
        }

        const Response = await makeRequest('/auth/create-profile', 'post', payload)
        if(Response.status){
          props.Handler()
            props.checkout()
           LocalStorageService.setItem('accessToken', Response.data.accessToken)
           LocalStorageService.setItem('userType', 'user')
           props.data()
           NotificationService(Response.message, 'success', 'top-right')
        }
       
       
         
      };

  return (
    <>
      <div  className={props.active ? 'fixed z-50 bg-black/30 w-full inset-0 flex justify-center items-center': 'hidden'}>
        <div  className={props.Handler ? 'w-5/6 h-4/6 md:w-2/6 md:h-5/6 bg-white rounded-lg relative flex ' : 'hidden'}>
        <img
            onClick={()=>{
              navigate('/')              
           }}
            className="right-3 top-3 absolute h-8 cursor-pointer"
            src="/assets/svg/close.svg"
            alt=""
          />
         <div className='flex flex-col space-y-3  justify-center items-center w-5/6 mx-auto'>
         <img src="/assets/Icons/logo.jpg" className="h-32 py-1 mb-5" alt="" />
         <form onSubmit={handleSubmit(createProfile)} >
         <div className="flex  w-full px-3   items-center  justify-center">
            <img src="/assets/svg/username.svg" className='h-6' alt="" />
              <input
                className="border-b w-full outline-none   max-md:mt-2 py-[10px] px-3  placeholder:text-sm"
                type="text"
                autoComplete="off"
                name="name"
                {...register("name", { required: true })}
                id="name"
                placeholder="User Name"
              />
              {errors.name && (
                <span style={{ color: "red", fontSize: 10 }}>
                  {"Name required *"}
                </span>
              )}
            </div>


            <div className="flex  w-full px-3   items-center  justify-center">
            <img src="/assets/svg/date.svg" className='h-5' alt="" />
              <input
                className="border-b w-full outline-none  max-md:mt-2 py-[10px] px-3  placeholder:text-sm"
                type="date"
                autoComplete="dob"
                name="dob"
                {...register("dob", { required: true })}
                id="dob"
                placeholder="Date of Birth"
              />
              {errors.dob && (
                <span style={{ color: "red", fontSize: 10 }}>
                  {"DOB required *"}
                </span>
              )}
            </div>


            <div className="flex  w-full px-3   items-center  justify-center">
            <img src="/assets/svg/email.svg" className='h-6' alt="" />
              <input
                className="border-b w-full outline-none   max-md:mt-2 py-[10px] px-3  placeholder:text-sm"
                type="email"
                autoComplete="off"
                name="email"
                {...register("email", { required: true })}
                id="email"
                placeholder="Email Address"
              />
              {errors.email && (
                <span style={{ color: "red", fontSize: 10 }}>
                  {"Email Address required *"}
                </span>
              )}
            </div>

            <div className="flex  w-full px-3  items-center  justify-center">
            <img src="/assets/svg/mobile.svg" className='h-6 mb-5' alt="" />
              <input
                className="border-b w-full outline-none   max-md:mt-2 py-[10px] px-3 mb-5 placeholder:text-sm"
                type="text"
                autoComplete="off"
                name="number"
                {...register("alternate_mobile_number", { required: true })}
                id="number"
                placeholder="Alternative Number"
              />
              {errors.number && (
                <span style={{ color: "red", fontSize: 10 }}>
                  {"Alternative Number required *"}
                </span>
              )}
            </div>

            <button className='w-full bg-primary text-white py-2 rounded-sm '>Save</button>
            </form>
         </div>
          
        </div>

      </div>
    </>
   )
}

export default UserDetailsModal