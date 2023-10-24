import React from 'react'
import { useForm } from "react-hook-form";
import Input from './Input';


function AccountDetails() {

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
      <p className='w-full md:w-1/2'><Input error={errors} register={register} validationSchema={{ required: "First Name Required", }} label={ 'First Name'} id={'firstname'}  type={'text'} inputname={'fname'} /> </p>
      <p className='w-full md:w-1/2'><Input error={errors} register={register} validationSchema={{ required: "Last Name Required", }} label={ 'Last Name'} id={'lastname'}  type={'text'} inputname={'lname'} /></p>
        </div>

        <Input error={errors} register={register} validationSchema={{ required: "Display Name Required", }} label={ 'Display Name'} id={'displayname'}  type={'text'} inputname={'displayname'} />

        <Input
              error={errors}
              register={register}
              validationSchema={{
                required: "Email Address Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid Email address",
                },
              }}
              required
              label={" Email Address"}
              id={"applicant_email"}
            
              type={"email"}
              inputname={"applicant_email"}
            />


            <div className='relative mt-10 w-5/6 ml-6'>
              <p className='border  rounded-xl border-gray-700  py-[9px] ' >
                <div className='px-4 md:px-6 my-5'>
              <Input
                error={errors}
                register={register}
                validationSchema={{
                  // required: "You must specify a password",
                  // pattern: {
                  //   value: /^[0-9]*$/,
                  //   message: "Only numbers are allowed",
                  // },
                  minLength: {
                    value: 8,
                   message: "Password must have at least 8 characters"
                 }
                }}
           
                label={"Current password (leave blank to leave unchanged) "}
                id={"password"}
              
                type={"text"}
                inputname={"password"}
              />
           

           <Input
                error={errors}
                register={register}
                validationSchema={{
                  // required: "You must specify a password",
                  // pattern: {
                  //   value: /^[0-9]*$/,
                  //   message: "Only numbers are allowed",
                  // },
                  minLength: {
                    value: 8,
                   message: "Password must have at least 8 characters"
                 }
                }}
           
                label={"New password (leave blank to leave unchanged)"}
                id={"new_password"}
              
                type={"text"}
                inputname={"new_password"}
              />
           
           <Input
                error={errors}
                register={register}
                validationSchema={{
                  // required: "You must specify a password",
                  // pattern: {
                  //   value: /^[0-9]*$/,
                  //   message: "Only numbers are allowed",
                  // },
                  minLength: {
                    value: 8,
                   message: "Password must have at least 8 characters"
                 }
                }}
           
                label={"Confirm new password"}
                id={"confirm_new_password"}
              
                type={"text"}
                inputname={"confirm_new_password"}
              />

            </div>
              </p>
              <label className='absolute bg-white px-3 -top-3 left-10' >Change Password</label>

              
            </div>
           
            <button className='bg-primary ml-6 text-white py-2 px-3 my-4 text-sm font-AVENIR'>Save Changes</button>

        </form>
     </>
  )
}

export default AccountDetails