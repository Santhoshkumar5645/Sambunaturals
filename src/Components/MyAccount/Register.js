import React from "react";

const Register = () => {
    return(
        <>
        <div className="flex max-md:flex-col">
            <div className="w-full md:w-1/2 space-y-4 md:border-r-2">
              <p className="font-extrabold tracking-wide">REGISTER</p>
              <div className="space-y-2 flex flex-col">
                <label htmlFor="">EmailAddress</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-6/6 md:w-5/6  rounded border border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <p className="text-sm w-5/6">A link to set a new password will be sent to your email address.</p>
              </div>
              <div className="space-y-2 flex flex-col ">
                <label htmlFor="">Phone Number</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-6/6 md:w-5/6  rounded border border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <p className="text-sm w-5/6 ">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
              </div>

              <button className="bg-primary w-full md:w-5/6 py-2 md:py-1  rounded-md text-white">Login</button>
              
            
            </div>
            <div className="flex flex-col w-full md:w-1/2 max-md:mt-8 md:px-10 items-center justify-start space-y-4 ">
            <p className="font-extrabold tracking-wide max-md:hidden">LOGIN</p>
            <p className="">Registering for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>

            <button  className="border font-bold md:border-black px-5 bg-[#E0DCDC]  max-md:text-primary   py-2 text-sm">Login</button>
                
            </div>
          </div>

        </>
    )
}

export default Register;