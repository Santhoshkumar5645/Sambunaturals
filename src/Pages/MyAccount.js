import React, { useState, useEffect } from "react";
import Login from "../Components/MyAccount/Login";
import Register from "../Components/MyAccount/Register";





const MyAccount = () => {

  const [userLogin, setUserLogin] = useState(true)
   
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}, [])
  return (
    <>
      <section>
        <div className="relative flex flex-col justify-center rounded-lg items-center mt-6 md:mt-3 mx-3 md:mx-auto bg-[#EDF6EA] md:w-[98%] h-44 md:h-80 ">
          <img
            className=" absolute  -left-3 -top-3 rotate-180 max-md:hidden  "
            src="assets/images/groupleaf.png"
          ></img>
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-primary font-semibold md:font-bold ">
            My Account
          </h1>
          <hr className="max-md:hidden  w-60 border-primary mt-4" />
          <p className=" lg:text-2xl  font-bold  max-md:hidden mt-3   ">
            HOME / MY ACCOUNT
          </p>
          <img
            className="absolute -right-3 -bottom-3   max-md:hidden "
            src="assets/images/groupleaf.png"
          ></img>
        </div>

        <div className="px-6 md:px-12 xl:text-lg  lg:text-md text-justify   my-8 md:my-16  font-AVENIR font-medium space-y-4  md:mx-10 ">
          {userLogin ? <Login data={()=>{setUserLogin(false)}} /> : <Register  />}
        </div>
      </section>
    </>
  );
};

export default MyAccount;
