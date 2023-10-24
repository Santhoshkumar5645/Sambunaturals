import React from 'react'
import { useForm } from "react-hook-form";
import Input from './Input';
import Textarea from './Textarea';


function Addresses() {

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur" });

  const OnSubmit = async (data) => {
    const formData = new FormData();
  }

  return (
    <>

       <form
          onSubmit={handleSubmit(OnSubmit)}
          className=""
        >
       <div className='w-2/2 md:flex gap-10'>
      <p className='md:w-1/2'><Input error={errors} register={register} validationSchema={{ required: "First Name Required", }} label={ 'First Name'} id={'selfnomininame'}  type={'text'} inputname={'fname'} /> </p>
      <p className='md:w-1/2'><Input error={errors} register={register} validationSchema={{ required: "Last Name Required", }} label={ 'Last Name'} id={'selfnomininame'}  type={'text'} inputname={'lname'} /></p>
     </div>
           
           <Input
              error={errors}
              register={register}
              label={"Company Name ( Optional )"}
              id={"selfnomininame"}
              type={"text"}
              inputname={"schoolname"}
            />
             <Input
              error={errors}
              register={register}
              label={"Country / Region"}
              id={"country"}
              type={"text"}
              inputname={"Country / Region"}
            />
          
       
       
         <Input error={errors} register={register} validationSchema={{ required: "Street Address Required", }} label={ 'Street Address'} id={'Street Address'}  type={'text'} inputname={'Street Address'} />
           

       <div className='w-2/2 flex gap-10'>
      <p className='w-1/2'><Input error={errors} register={register} validationSchema={{ required: "City Required", }} label={ 'City'} id={'city'}  type={'text'} inputname={'City'} /> </p>
      <p className='w-1/2'><Input error={errors} register={register} validationSchema={{ required: "State Required", }} label={ 'State'} id={'state'}  type={'text'} inputname={'State'} /></p>
     </div>
         <Input
                error={errors}
                register={register}
                validationSchema={{
                  required: "Pin code is required",
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Only numbers are allowed",
                  },
                }}
                required
                label={"Pincode"}
                id={"pincode"}
              
                type={"text"}
                inputname={"pincode"}
              />
            <Input
                error={errors}
                register={register}
                validationSchema={{
                  required: "phone number is required",
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Only numbers are allowed",
                  },
                  minLength: {
                    value: 10,
                    message: "Mobile Number Must be 10 digit",
                  },
                  maxLength: {
                    value: 10,
                    message: "Mobile Number Must be 10 digit",
                  },
                }}
                required
                label={"Phone"}
                id={"school_phone"}
              
                type={"text"}
                inputname={"school_phone"}
              />

         <Input
              error={errors}
              register={register}
              validationSchema={{
                required: "Email Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid Email address",
                },
              }}
              required
              label={" Email"}
              id={"applicant_email"}
            
              type={"email"}
              inputname={"applicant_email"}
            />

   <button className='bg-primary text-white py-2 px-3 my-4 text-sm font-AVENIR'>Save Address</button>
</form>
    </>
  )
}

export default Addresses