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
              Lorem, ipsum
              <span className="text-primary"> Lorem, ipsum dolor.</span>{" "}
            </p>
            <img
              src="/assets/images/singleleaf.png"
              className="absolute max-md:hidden h-7 -top-2 md:right-[7.6rem] lg:right-[9.5rem] xl:right-52"
              alt=""
            />
          </div>
          <p className="max-md:hidden text-md">
            At Sambu Naturals, everything we make will surprise you.
          </p>
          <img
            src="/assets/images/homecornerleaf.png"
            className="absolute right-0 max-md:hidden"
            alt=""
          />
        </div>

        <div className="flex max-md:flex-col container mx-auto px-5 md:px-8 gap-8 justify-center max-md:pt-3 font-AVENIR items-center ">
          <div className="w-2/2 md:w-1/2   ">
            
            <img
              src="/assets/images/homecontent1.jpeg"
              className="drop-shadow-sm rounded-lg"
              alt=""
            />
            {/* md:hover:animate-bounce */}
          </div>
          <div className="w-2/2 md:w-1/2 max-md:flex flex-col   font-AVENIR justify-center items-center space-y-2 md:space-y-3">
            <div className='md:space-y-3 '>
            <p className="text-xl font-medium  max-md:hidden md:text-3xl lg:text-4xl ">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-xl md:text-2xl ">
             
              <span className="text-primary">Nature’s</span> Lorem, ipsum dolor.
            </p>
            <p className="text-sm max-md:hidden lg:text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, id nesciunt. Nostrum sit nihil amet vero aliquid eum neque deserunt! Animi fuga asperiores deserunt sapiente? Eligendi a voluptate libero, suscipit eos repellendus.
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

        

        <div className="flex flex-row-reverse container mx-auto px-5 md:px-8 gap-8 mt-8 font-AVENIR max-md:flex-col justify-center items-center ">
          <div className="w-2/2 md:w-1/2 ">
            <img
              src="/assets/images/homecontent2.jpg"
              className="rounded-lg drop-shadow-sm"
              alt=""
            />
            {/* md:hover:animate-bounce */}
          </div>
          <div className="w-2/2 md:w-1/2 max-md:flex flex-col justify-center items-center space-y-2  md:space-y-3 ">
            <div className=" max-md:flex flex-row-reverse items-center justify-center md:space-y-2 gap-2 text-xl">
              <p className="  md:text-3xl lg:text-4xl ">Lorem, ipsum dolor.</p>
              <p className=" md:text-2xl">
                {" "}
                <span className="text-primary">lorem</span> Lorem
              </p>
            </div>
            <p className="text-sm lg:text-md max-md:hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ab libero eum maxime, perspiciatis totam esse dolorum commodi tempora ex. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus accusantium, facilis veniam tenetur officiis odit eum voluptas doloremque quidem dignissimos?
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