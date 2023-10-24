import React from "react";
import ReactDOM from "react-dom";
import useFetchData from "../CustomHooks/useFetchData";
import { useForm, Controller } from "react-hook-form";
import { NotificationService } from "../Service/NotificationService";

const Investor = () =>{

    const { loading, makeRequest } = useFetchData();

    const {
     register,
     handleSubmit,
     watch,
     control,
     reset,
     formState: { errors },
   } = useForm();

   const onSubmit = async (data) => {
   
    const payload = data
   
     const Response = await makeRequest('/investor/insert-investor-info', 'post', payload)
     NotificationService(Response.message, 'success', 'top-right')
        reset()
     if(Response.states){
      
      
        
     }
   }

    return(
        <>
        <section>
        <div className="w-[98%] bg-[#EDF6EA] max-md:hidden h-auto py-6  pl-20 mx-auto shrink-0 flex items-center justify-center  rounded-lg mt-3 ">
            <div className="space-y-12">
            <p className="text-primary font-bold md:text-4xl lg:text-5xl xl:text-6xl">Become an Investor</p>
            <p className=" md:text-md xl:text-lg font-semibold text-slate-700">we are always available for our reliable customers, be free to contact</p>
            </div>
            <div className="">
                <img src="/assets/images/investor.png" className="md:h-64 lg:h-80 pl-10 lg:pl-28" alt="" />
            </div>
            <div>

            </div>
         </div>

         <div className="flex justify-center items-center flex-col">
            <p className="text-2xl text-center my-4 font-bold text-primary">Why Invest us?</p>
            <img src="/assets/images/investormap.jpg" className="w-4/5 md:w-3/5" alt="" />
         </div>
         <form onSubmit={handleSubmit(onSubmit)} >
         <div className="mx-3 text-md text-slate-500">
            <div className="flex max-md:flex-col gap-10">
            <div className="flex flex-col space-y-2 w-2/2 md:w-1/2">
                <label htmlFor="name">Your Name</label>
                <input
                    className="border w-full mt-2 max-md:mt-2 py-[9px] px-3 rounded-[4px] placeholder:text-sm"
                    type="text"
                    autoComplete="off"
                    name="name"
                    {...register("name", { required: true })}
                    id="name"
                    // placeholder="santhosh@gamil.com"
                  />
                  {errors.name && (
                    <span style={{ color: "red", fontSize: 10 }}>
                      {"Name required *"}
                    </span>
                  )}
            </div>
            <div className="flex flex-col space-y-2 w-2/2 md:w-1/2">
                <label htmlFor="email">Your Mail</label>
                <input
                    className="border w-full mt-2 max-md:mt-2 py-[9px] px-3 rounded-[4px] placeholder:text-sm"
                    type="email"
                    autoComplete="off"
                    name="email"
                    {...register("email", { required: true })}
                    id="email"
                    // placeholder="santhosh@gamil.com"
                  />
                  {errors.email && (
                    <span style={{ color: "red", fontSize: 10 }}>
                      {"Email required *"}
                    </span>
                  )}
            </div>
            </div>

           
            <div className="flex flex-col space-y-2 mt-5 w-2/2 md:w-1/2 ">
                <label htmlFor="mobile">Phone Number</label>
                <input
                    className="border w-full mt-2 max-md:mt-2 py-[9px] px-3 rounded-[4px] placeholder:text-sm"
                    type="text"
                    autoComplete="mobile"
                    name="mobile"
                    {...register("mobile", { required: true })}
                    id="mobile"
                    // placeholder="santhosh@gamil.com"
                  />
                  {errors.name && (
                    <span style={{ color: "red", fontSize: 10 }}>
                      {" Phone Number required *"}
                    </span>
                  )}
            </div>

            <div className="flex flex-col space-y-2 mt-5  ">
                <label htmlFor="about_investor">Please let us know more abut yourself and we can connect for further discussion.</label>
                <textarea
                      id="about_investor"
                      name="about_investor"
                      {...register("about_investor", { required: true })}
                      className="w-full rounded-lg max-md:shadow-xl md:rounded   md:border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                    {errors.about_investor && (
                    <span style={{ color: "red", fontSize: 10 }}>
                      {"About_investor required *"}
                    </span>
                  )}
            </div>
           
           <button className="py-2 px-3 bg-gray-300 text-md my-5 text-black">Submit</button>
            
         </div>
         </form>
        </section>
        </>
    )
}

export default Investor;