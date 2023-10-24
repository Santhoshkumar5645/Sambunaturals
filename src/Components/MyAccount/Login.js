import React from "react";

const Login = (props) => {
    return(
        <>
          
          <div className="flex max-md:flex-col">
            <div className="w-full md:w-1/2 space-y-4 md:border-r-2">
              <p className="font-extrabold tracking-wide">LOGIN</p>
              <div className="space-y-2 flex flex-col">
                <label htmlFor="">Username /EmailAddress</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-6/6 md:w-5/6  rounded border border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="space-y-2 flex flex-col">
                <label htmlFor="">Password</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-6/6 md:w-5/6  rounded border border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <button className="bg-primary w-full md:w-5/6 py-2 md:py-1  rounded-md text-white">Login</button>
              <div className="flex items-center justify-between w-6/6 md:w-5/6 text-sm">
              <div className="flex gap-2">
                <input type="checkbox" name="" id="" />
                <p className="">Remember Me</p>
              </div>
              <p>Lost your password?</p>
              </div>
              <div className="w-6/6 md:w-5/6">
              <p className="text-center mb-4">or</p>
              <button className="bg-primary w-full py-2 md:py-1 rounded-md text-md text-white">Login with OTP</button>

              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 max-md:mt-8 md:px-10 items-center justify-start space-y-4 ">
            <p className="font-extrabold tracking-wide max-md:hidden">REGISTER</p>
            <p className="">Registering for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>

            <button onClick={props.data} className="border font-bold md:border-black px-5 bg-[#E0DCDC]  max-md:text-primary   py-2 text-sm">Register</button>
                
            </div>
          </div>

        </>
    )
}

export default Login;