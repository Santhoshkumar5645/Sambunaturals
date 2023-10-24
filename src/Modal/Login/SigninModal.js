import React, { useState, useEffect } from 'react'
import { set } from 'react-hook-form'
import UserDetailsModal from './UserDetailsModal'
import { useForm } from "react-hook-form";
import { AuthApi } from '../../api/AuthApi';
import axios from 'axios';
import useFetchData from '../../CustomHooks/useFetchData';
import { NotificationService } from '../../Service/NotificationService';
import VerifyOtpModal from './VerifyOtpModal';
import { useNavigate } from 'react-router-dom';

const SigninModal = (props) => {

  const [verifyOtp, setVerifyOtp] = useState(false)
  const [mobileNo, setMobileNo] = useState()
  const [timer, setTimer] = useState()

  const VerifyOtpModalHandler = () =>{
   setVerifyOtp(!verifyOtp)
  }

  const navigate = useNavigate()
   
  const { register, handleSubmit, formState: { errors } } = useForm();

  const { loading, makeRequest } = useFetchData();
  


  const onSubmit = async (dataget) => {
    const number = dataget.mobile_number
    setMobileNo(number)
    const payload = {
      "mobile_number": number,
      "country_code": "91"
    }

    const Response = await makeRequest('/auth/send-otp', 'post', payload)

    if (Response.status) {

      NotificationService(Response.message, 'success', 'top-right')
      VerifyOtpModalHandler()
      props.Handler()
      setTimer(Response.data.remaining_minute_and_seconds)
      // console.log(Response.data.remaining_minute_and_seconds)
      // setVerifyOtp(!verifyOtp)
    }

  };
  


  return (
    <>
      <div className={props.active ? 'fixed z-50 bg-black/60 w-full inset-0 flex justify-center items-center' : 'hidden'}>
        <div className={props.Handler ? 'w-5/6  md:w-2/6 h-auto bg-white rounded-lg relative flex ' : 'hidden'}>
          <img
        onClick={()=>{
          props.Handler()
          navigate('/')
        }}
            className="right-3 top-3 absolute h-8 cursor-pointer"
            src="/assets/svg/close.svg"
            alt=""
          />
          <div className='flex p-8 text-sm font-semibold w-full justify-around flex-col space-y-3'>
              <p className='text-primary'>Hi Buddy !</p>
              <p >Let's verify and begin your journey </p>
              <form onSubmit={handleSubmit(onSubmit)} >
                <input className='py-[10px]  px-3 w-full border border-gray-600 rounded-md mb-10' type="text" autoComplete="off" name="mobile" {...register("mobile_number", { required: true })} placeholder='+91' />
                {/* {errors.mobile && <span style={{color:"red",fontSize:10}}>{"Mobile required *"}</span>} */}
                {/* <input type="text" placeholder='+91' className='py-[10px]  px-3 w-full border border-gray-600 rounded-md' /> */}

                <p className='text-xs text-center mb-5'>We will send you a 4 digit OTP</p>

                <button type='submit' className='w-full py-2 text-white bg-primary rounded-md text-sm'>Send OTP</button>
              </form>
            </div>
              
              

          

        </div>

      </div>
      <VerifyOtpModal checkout={props.checkout} from={props.from} active={verifyOtp} number={mobileNo} time={timer}  data={props.data} Handler={VerifyOtpModalHandler}  />

      {/* <UserDetailsModal active={userDetailsModal} number={mobileNo} Handler={UserDetailsModalHandler} /> */}
    </>
  )
}

export default SigninModal