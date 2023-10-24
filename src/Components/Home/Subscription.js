import React from "react";
import SubscriptionCard from "./SubscriptionCard";

const Subscription= () =>{
    return(
            <>

             <div className="bg-gradient-to-r font-AVENIR relative flex  max-md:justify-between my-10 from-[#3BE1008A] to-[#90C64B] rounded-lg w-[98%] ml-1 md:ml-2 lg:ml-3 h-80 md:h-96">
                 <div className=" md:px-5 ">
                    <div className="pt-10 pl-5">
                    <p className="text-white font-bold">Subscribe</p>
                    <p className="text-primary text-2xl font-bold">Keeraikadai</p>
                    </div>
                    <div className="bottom-0 absolute">
                    <img src="/assets/images/susbcribeman.png" className= "h-48 md:h-60 flex items-end flex-end" alt="" />
                    </div>
                    </div>
                    <div className="flex gap-4 lg:gap-7 ml-5 lg:ml-10 xl:ml-16 py-12 lg:py-5 xl:py-6 max-md:hidden">
                       <SubscriptionCard />
                       <SubscriptionCard />
                       <SubscriptionCard />
                    </div>
                    <div className="gap-2 text-white md:hidden flex justify-center items-center bg-[#348F41CC] h-10 px-5 mt-32  shrink-0 max-sm:-ml-10 rounded-3xl font-AVENIR tracking-wider">
                     <button className="">Get</button>
                     <p>Premium</p>
                    </div>
                    <div>
                       <img src="/assets/images/subscibeitem.png" className=" max-md:mt-20 md:bottom-10 h-64  md:h-96 right-0" alt="" />
                    </div>
                 
             </div>
            </>
    )
}

export default Subscription