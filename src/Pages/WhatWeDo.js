import React, {useEffect} from "react";
import { ScrolltoTop } from "../Utility";

const WhatWeDo = () => {

  useEffect(() => {
   ScrolltoTop()
}, [])


  return (
    <>
      <section className="">
      <div className="relative flex flex-col justify-center rounded-lg items-center mt-6 md:mt-3 mx-3 md:mx-auto bg-[#EDF6EA] md:w-[98%] h-44 md:h-80">
          <img
            className=" absolute  -left-3 -top-3 rotate-180 max-md:hidden  "
            src="assets/images/groupleaf.png"
          ></img>
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-primary font-semibold md:font-bold ">
             What We Do?
          </h1>
          <hr className="max-md:hidden  w-60 border-primary mt-3" />
          <p className=" lg:text-2xl  font-bold  max-md:hidden mt-1   ">
            Our Innovation
          </p>
          <img
            className="absolute -right-3 -bottom-3   max-md:hidden "
            src="assets/images/groupleaf.png"
          ></img>
        </div>

        <div className=" px-6 md:px-12 xl:text-lg md:space-y-5 lg:text-md text-center font-AVENIR  my-8 md:my-16  font-medium space-y-4  md:mx-10 ">
          <p class="text-2xl md:text-4xl lg:text-5xl font-bold  max-md:hidden">
            That’s a Smart Drink!
          </p>
          <p className="text-primary text-xl md:text-2xl  lg:text-3xl max-md:hidden">Soup in a Dip for the First Time Ever!</p>
          <p className="text-lg max-md:font-medium md:text-md lg:text-lg ">At Keeraikadai.com, we have carefully crafted a series a of plant-based drinks with natural nutrients and no added preservatives to deliver the best-in-class nutrition!</p>
        </div>

        <div className="flex justify-center items-center flex-col ">
          <p className="text-lg font-bold text-center mb-6 md:mb-12">Relish Health! On the Go!</p>
          <div className="space-y-16 flex justify-center items-center flex-col">
          <img src="/assets/images/whatwedo1.png" className="w-4/5 md:w-3/4" alt="" />
          <img src="/assets/images/whatwedo2.png" alt="" className="w-4/5 md:w-3/4"  />
          <img src="/assets/images/whatwedo3.png" alt="" className="w-4/5 md:w-3/4"  />
          </div>
        </div>

        <div className="flex justify-center items-center my-8 gap-8 max-md:hidden">
          <p className="text-lg text-primary font-semibold">View our News</p>
          <div className="flex">
          <img src="/assets/images/greenarrow.png" className="h-4" alt="" />
          <img src="/assets/images/greenarrow.png" className="h-4" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
