import React, { useState, useEffect } from 'react'
import ReactDOM from "react-router-dom"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetchData from '../../CustomHooks/useFetchData';

const ProductDetail =[
    {
        title: "Turmeric  Drink",
        img: "assets/images/turmeric.png"

    },
    {
        title: "Turmeric  Drink",
        img: "assets/images/turmeric.png"

    },
    {
        title: "Turmeric Drink",
        img: "assets/images/turmeric.png"

    },
    {
        title: "Turmeric Drink",
        img: "assets/images/turmeric.png"

    },
    {
        title: "Turmeric Drink",
        img: "assets/images/turmeric.png"

    },
    {
        title: "Turmeric Drink",
        img: "assets/images/turmeric.png"

    },
    {
        title: "Turmeric Drink",
        img: "assets/images/turmeric.png"

    },
]

const HotDealsCard = () =>{
const [hotDealsData, setHotDealsData] = useState()
const { loading, makeRequest } = useFetchData();

  useEffect(() => {
   
    hotDeals()
  }, []);
  
 
const hotDeals =async () =>{
const Response = await makeRequest('/common/hot-deals', 'get', {})
if(Response.status){
  setHotDealsData(Response.data)
}

}

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
    autoplaySpeed: 1500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
       <>
       

       
       
        <Slider {...settings} className=''  >
     {hotDealsData && hotDealsData.map((item,index)=>{
         return(
            <>
             <div key={index} style={{backgroundColor : item.background_color}} className='h-60  py-3 w-48 px-3 rounded-xl space-y-2 flex flex-col justify-center flex-shrink-0 items-center'>
            <img src={item.image} className='w-32' alt="" />
            <p className='text-center text-md font-medium'>{item.name}</p>
        </div>
            </> 
         )
     })}
       
         
         
        </Slider>
      
       </>
        )
    }
    
    export default HotDealsCard; 