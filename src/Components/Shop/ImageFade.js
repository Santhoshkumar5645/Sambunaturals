import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetchData from '../../CustomHooks/useFetchData';



const ImageFade = () =>{
 const [image, setImage] = useState()
 const { loading, makeRequest } = useFetchData();

  useEffect(() => {
   
    imageFade()
  }, []);
  
 
const imageFade =async () =>{
const Response = await makeRequest('/common/shop-banner', 'get', {})
if(Response.status){
  setImage(Response.data)
}

}

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    autoplaySpeed: 1500,
      }

    return(
        <> 
         
   
      <div className="max-md:w-10/12  md:w-9/12">
        
        <Slider {...settings}>
          {image && image.map((values, index)=>{
            return  <img key={index} src={values.image} className="" alt="" />
          })}
          

         
          {/* <img src="/assets/images/slider2.png" className="" alt="" /> */}

          
        </Slider>
      </div>
        
        </>
    )
}

export default ImageFade