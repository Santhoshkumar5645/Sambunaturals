import React from 'react'
import OurProducts from "./OurProducts";
import { useNavigate } from 'react-router-dom';


const HomeOurProducts = (props) => {
    const navigate = useNavigate()

  return (
    <>
           <div className="relative flex justify-center font-AVENIR gap-3 items-center max-md:mb-5 mt-10">
          <img
            src="/assets/images/shopleaf.png"
            className="max-md:hidden absolute right-0 h-28"
            alt=""
          />
          <div>
            <img
              src="/assets/images/smallbowl.png"
              className="max-md:absolute max-md:h-16 -top-5 -left-4"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-AVENIR font-medium">
              Our <span className="text-primary">Products</span>{" "}
            </p>
            <p className="max-md:hidden">Products at your cost</p>
          </div>
        </div>

        <div className="flex  items-center max-md:gap-3 font-AVENIR max-md:px-4 md:pt-10 md:justify-evenly">
          {
            props.firstThreeData?.map((values, index) => {
              return  <OurProducts key={index} {...values} />;
            })}
        </div>

        <div className="flex flex-col font-AVENIR justify-center items-center md:space-y-3 max-md:my-5 md:mb-12">
          <p className="text-center mt-10 md:text-md lg:text-lg max-md:hidden">
            We Sambu Naturals providing quality products to the users.
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="text-primary bg-[#35AB3912] max-md:text-xs py-2 px-6 rounded-3xl "
          >
            View Products
          </button>
        </div>
    
    </>
  )
}

export default HomeOurProducts