import React from 'react'
import { useNavigate } from 'react-router-dom'

const KeeraikadaiSpecial = () => {

    const navigate = useNavigate()
  return (
    <>
    
    <div className="flex flex-col relative  font-AVENIR items-center space-y-3 my-5 md:my-16 justify-center">
          <img
            src="/assets/images/shadowleaf.png"
            className="absolute h-20 max-md:hidden -left-8"
            alt=""
          />
          <div className="relative shrink-0">
            <p className="text-xl md:text-3xl lg:text-4xl xl:text-[3rem]  font-AVENIR font-medium ">
              Carefully Crafted{" "}
              <span className="text-primary">Range of Products</span>{" "}
            </p>
            <img
              src="/assets/images/singleleaf.png"
              className="absolute max-md:hidden h-7 -top-2 md:right-[7.6rem] lg:right-[9.5rem] xl:right-52"
              alt=""
            />
          </div>
          <p className="max-md:hidden text-md">
            At Keeraikadai.com, everything we make will surprise you.
          </p>
          <img
            src="/assets/images/homecornerleaf.png"
            className="absolute right-0 max-md:hidden"
            alt=""
          />
        </div>

        <div className="flex max-md:flex-col justify-center max-md:pt-3 font-AVENIR items-center px-8 md:pr-16">
          <div className="w-2/2 md:w-1/2 -mt-12 mr-10 ">
            
            <img
              src="/assets/images/homecontent1.png"
              className="h-4/5 drop-shadow-sm"
              alt=""
            />
            {/* md:hover:animate-bounce */}
          </div>
          <div className="w-2/2 md:w-1/2 max-md:flex flex-col  font-AVENIR justify-center items-center space-y-2 md:space-y-3">
            <div className='md:space-y-3'>
            <p className="text-xl font-medium  md:text-3xl lg:text-4xl ">
              Worlds first Soup in Dip
            </p>
            <p className="text-xl md:text-2xl">
             
              <span className="text-primary">Nature’s</span> Health in a Dip
            </p>
            <p className="text-sm max-md:hidden lg:text-md">
              A special assortment of Greeny Dip soups, now available as a Pack
              of 3 variants. Perfect plant based drinks to partner with your
              daily healthy Routine! This Pack contains – Ashwagandha Drink,
              Guava Leaf Drink and Balloon vine Drink
            </p>
            </div>
            <button
              onClick={() => navigate("/shop")}
              className="text-primary  max-md:text-xs  bg-[#35AB3912] py-2 px-6 rounded-3xl "
            >
              Order Now
            </button>
          </div>
        </div>

        <div className="flex flex-row-reverse mt-8  font-AVENIR max-md:flex-col justify-center items-center px-8 md:pr-16">
          <div className="w-2/2 md:w-1/2 -mt-12 mr-10 ">
            <img
              src="/assets/images/homecontent2.png"
              className="h-4/5 drop-shadow-sm"
              alt=""
            />
            {/* md:hover:animate-bounce */}
          </div>
          <div className="w-2/2 md:w-1/2 max-md:flex flex-col justify-center items-center space-y-2  md:space-y-3 md:ml-20">
            <div className=" max-md:flex flex-row-reverse items-center justify-center md:space-y-2 gap-2 text-xl">
              <p className="  md:text-3xl lg:text-4xl ">Ready to Eat</p>
              <p className=" md:text-2xl">
                {" "}
                <span className="text-primary">Green’s</span> Curry
              </p>
            </div>
            <p className="text-sm lg:text-md max-md:hidden">
              commonly known as Palak across India is rich in iron, fiber, beta
              carotene, vitamin-C, vitamin-A, calcium, folate and potassium and
              helps in digestion and weight loss, can be consumed by diabetic
              people as it lowers insulin levels, maintains blood pressure.
            </p>
            <button
              onClick={() => navigate("/shop")}
              className="text-primary  max-md:text-xs bg-[#35AB3912] mt-2 py-2 px-6 rounded-3xl "
            >
              Order Now
            </button>
          </div>
        </div>
    </>
  )
}

export default KeeraikadaiSpecial