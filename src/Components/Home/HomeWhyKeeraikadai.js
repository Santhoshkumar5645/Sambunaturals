import React from 'react'
import WhyKeeraikadaiCard from "./WhyKeeraikadaiCard"



const WhyKeeraikadai = [
    {
      img: "/assets/images/whykeeraikadai1.png",
      text: "We not only help you build immunity,but the Natural way!",
      heading: "We ",
      heading1: "Care’s",
    },
    {
      img: "/assets/images/whykeeraikadai2.png",
      text: "Rejuvenate your day with Plant- basednutrition with proven health  benefits",
      heading: "Finest  ",
      heading1: "Nutrition",
    },
    {
      img: "/assets/images/whykeeraikadai3.png",
      text: "Reinventing traditional food to make  it a partof the modern lifestyle!",
      heading: "Flavour of  ",
      heading1: "Tradition",
    },
    {
      img: "/assets/images/whykeeraikadai4.png",
      text: "We ensure that all our products are 100% natural and preservative free.",
      heading: "Perfect",
      heading1: "Choice",
    },
    {
      img: "/assets/images/whykeeraikadai5.png",
      text: "Our products are smartly designed for   your convenience. Nutrition…   on-the-go!  ",
      heading: "Easy",
      heading1: "Nutrition",
    },
  ];

const HomeWhyKeeraikadai = () => {
  return (
    <>
     <div>
          <div className="flex flex-col font-AVENIR justify-center items-center space-y-2">
            <p className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-AVENIR font-medium">
              Why <span className="text-primary">Sambu Naturals?</span>{" "}
            </p>
            <p className="max-md:hidden">So many reasons to choose </p>
          </div>
          <div className="grid grid-cols-1  font-AVENIR md:grid-cols-3  mx-8 md:mx-16 gap-6 my-10">
            {WhyKeeraikadai.map((values, index) => {
              return (
                <div key={index} className="">
                 
                  <WhyKeeraikadaiCard
                    img={values.img}
                    heading={values.heading}
                    heading1={values.heading1}
                    text={values.text}
                  />
                </div>
              );
            })}
          </div>
        </div>
    
    </>
  )
}

export default HomeWhyKeeraikadai