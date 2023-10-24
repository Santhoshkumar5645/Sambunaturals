import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const QualityData = [
    {
        img: "/assets/images/homeslide1.png",
        text: "Plant Based",
    },
    {
        img: "/assets/images/homeslide2.png",
        text: "Naturally Grown",
    },
    {
        img: "/assets/images/homeslide3.png",
        text: "No Preservatives",
    },
    {
        img: "/assets/images/homeslide4.png",
        text: "NABL Tested",
    },
    {
        img: "/assets/images/homeslide5.png",
        text: "100% Vegan",
    },
    {
        img: "/assets/images/homeslide6.png",
        text: "No Plastics",
    },
    {
        img: "/assets/images/homeslide3.png",
        text: "No Preservatives",
    },
]

const QualityCard = () =>{

    var settings = {
        dots: false,
        infinite: true,
        
        speed: 500,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
    autoplaySpeed: 1500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
       <>
       <div className='w-full md:pl-16 '>
     <Slider {...settings}  >
       {QualityData.map((values, index)=>{
        return(
            <div key={index} className="flex justify-center items-center  max-md:py-4  flex-col">
            <img src={values.img} className=" h-20 w-auto md:w-auto md:h-40" alt="" />
            <p className="text-xs md:text-lg max-md:font-bold -mt-3 md:-mt-6 max-md:mr-4 md:ml-3 max-md:text-center whitespace-normal">{values.text}</p>
         </div>
        )
       })}
         
         </Slider>
         </div>
       </>
    )
}

export default QualityCard;