import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import useFetchData from '../../CustomHooks/useFetchData';
import { NotificationService } from '../../Service/NotificationService';
import UserDetailsModal from "./UserDetailsModal";
import { LocalStorageService } from "../../Services/LocalStorageService";
import TimerComponent from "../../Components/TimerComponent";
import { useNavigate } from "react-router-dom";
import Countdown from 'react-countdown';
import OtpInput from 'react-otp-input';



const VerifyOtpModal = (props) => {
  const [userDetailsModal, setUserDetailsModal] = useState(false)
  const [otpValue, setOtpValue] = useState()
  const firstCheckboxRef = useRef();
  const secondCheckboxRef = useRef();
  const thirdCheckboxRef = useRef();
  const fourthCheckboxRef = useRef();
  
  const [otp, setOtp] = useState({
    digit1: '',
    digit2: '',
    digit3: '',
    digit4: '',

  });

  const handleChange = (e) => {
    console.log(e.target.name);
    setOtp({ ...otp, [e.target.name]: e.target.value });
  };
  // const [time, settime] = useState(props.time)



  const navigate = useNavigate()

  const UserDetailsModalHandler = () => {
    setUserDetailsModal(!userDetailsModal)
  }

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { loading, makeRequest } = useFetchData();

  // console.log(props.time)


  const onOtpSubmit = async () => {
    const final = `${otp.digit1}${otp.digit2}${otp.digit3}${otp.digit4}`;
    const payload = {
      "mobile_number": props.number,
      "otp": otpValue && otpValue
    }

    const Response = await makeRequest('/auth/verify-otp', 'post', payload)

    if (Response.status) {
      NotificationService(Response.message, 'success', 'top-right')
        props.Handler()
        if (Response.data.new_user) {
          setUserDetailsModal(true)
        }
        else {
          // console.log('else')
          //   setVerifyOtp(true)
          if(props.from === 'cart'){
            props.checkout()
          }
          else{
            props.data() 
          }
         
          setUserDetailsModal(false)
          LocalStorageService.setItem('accessToken', Response.data.tokens.accessToken)
          LocalStorageService.setItem('userType', 'user')
         
          
          
        }
      }
    
  };

 

  const handleInput = (event, nextCheckboxRef) => {
    const { value } = event.target;
    if (value.length === 1) {
      nextCheckboxRef.current.focus();
    }
  };

  
  
   
  return (
    <>
      <div
        className={
          props.active
            ? "fixed z-50 bg-black/60 w-full inset-0 flex justify-center items-center"
            : "hidden"
        }
      >
        <div
          className={
            props.Handler
              ? "w-5/6 h-3/6 md:w-2/6 md:h-3/6 bg-white rounded-lg relative flex "
              : "hidden"
          }
        >
          <img
            
            onClick={()=>{
              props.Handler()
              navigate('/')
            }}
            className="right-3 top-3 absolute h-8 cursor-pointer"
            src="/assets/svg/close.svg"
            alt=""
          />

          <div className="flex p-8 text-sm font-semibold w-full justify-around flex-col space-y-3">
            <p className="text-primary">Verification</p>
            <p>4-Digit code is sent to {props.number && props.number.slice(0, 3)}***</p>
            <div className="flex justify-center   items-center mb-5 gap-5">
            <OtpInput
      value={otpValue}
      onChange={setOtpValue}
      numInputs={4}
      containerStyle='space-x-2 md:space-x-3'
      inputStyle={{
        border: "1px solid black",
        borderRadius: "4px",
        width: "54px",
        height: "50px",
        fontSize: "16px",
       
        
      }}
      // inputStyle=' border outline-none border-black flex justify-center items-center w-32 rounded-md py-3 '
      renderSeparator={<span className=""></span>}
      renderInput={(props) => <input   className=""  {...props} />}
    />
    </div>
            {/* <form onSubmit={handleSubmit(onOtpSubmit)}> */}
              {/* <div className="flex justify-center items-center mb-5 gap-5">
                <input
                  // {...register("digit1", { required: true })}
                  type="text"
                  maxLength={1}
                  placeholder=""
                  id="digit1"
                  name="digit1"
                  value={otp.digit1}
                  onChange={handleChange}
                  ref={firstCheckboxRef}
                  onInput={(e) => handleInput(e, secondCheckboxRef)}
                  className="py-[10px] w-12 px-[18px] border border-gray-600 rounded-md"
                />
                <input
                  // {...register("digit2", { required: true })}
                  type="text"
                  maxLength={1}
                  placeholder=""
                  id="digit2"
                  name="digit2"
                  value={otp.digit2}
                  onChange={handleChange}
                  ref={secondCheckboxRef}
                  onInput={(e) => handleInput(e, thirdCheckboxRef)}
                  className="py-[10px] w-12 px-[18px] border border-gray-600 rounded-md"
                />
                <input
                  // {...register("digit3", { required: true })}
                  type="text"
                  maxLength={1}
                  placeholder=""
                  id="digit3"
                  name="digit3"
                  value={otp.digit3}
                  onChange={handleChange}
                  ref={thirdCheckboxRef}
                  onInput={(e) => handleInput(e, fourthCheckboxRef)}
                  className="py-[10px] w-12 px-[18px] border border-gray-600 rounded-md"
                />
                <input
                  // {...register("digit4", { required: true })}
                  type="text"
                  maxLength={1}
                  id="digit4"
                  name="digit4"
                  value={otp.digit4}
                  onChange={handleChange}
                  ref={fourthCheckboxRef}

                  placeholder=""
                  className="py-[10px] w-12 px-[18px] border border-gray-600 rounded-md"
                />
              </div> */}
              <div className="">
                {" "}
                <button onClick={()=>onOtpSubmit()} className="w-full py-2 text-white bg-primary rounded-md text-sm">
                  Verify
                </button>
              </div>
            {/* </form> */}
            <p className="text-sm text-center">
              Didn’t receive the code?{" "}
              <span className="text-primary border-b border-primary">

                 {/* {renderer({seconds})} */}
                {/* Resend OTP */}
                
               {props.time &&  <TimerComponent number={props.number} time={props.time} /> } 
              </span>
            </p>
          </div>
        </div>
      </div>

      <UserDetailsModal checkout={props.checkout} data={props.data} active={userDetailsModal} number={props.number} Handler={UserDetailsModalHandler} />

    </>
  );
};

export default VerifyOtpModal;
