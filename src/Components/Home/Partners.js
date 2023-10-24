import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../Style/common.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
// import 'animate.css/source/attention_seekers/rubberBand.css'

const SponsersData = [
    '/assets/images/approve1.png',
    '/assets/images/approve2.png',
    '/assets/images/approve3.png',
    '/assets/images/approve1.png',
    '/assets/images/approve2.png',
    '/assets/images/approve3.png',
    '/assets/images/approve1.png',
    '/assets/images/approve2.png',
    '/assets/images/approve3.png',
   
]

const Partners = () => {
  const settings = {
    dots: false,
    fade: false,
    className: "center",
    centerMode: true,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    
      <div className="md:flex max-md:flex-col bg-[#EDEDED61] justify-center items-center">
        <div className="w-2/2 md:w-5/12    max-md:pt-4 ">
          <p className="text-lg md:text-xl text-center lg:text-2xl ">Approved By Reliable Organisations</p>
        </div>
        <div className="  md:w-7/12 ">
        <Swiper
          effect={"coverflow"}
          spaceBetween={0}
          initialSlide={true}
          grabCursor={true}
          centeredSlides={true}
          
          loop={true}
          slidesPerView={"2"}
          autoplay={
                {
              disableOnInteraction: false,
            }
            
          }
          coverflowEffect={{
            rotate: 2,
            stretch: 0,
            depth: 150,
            modifier: 2,
          }}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          className=" "
        >
          {SponsersData?.map((values, index) => {
            return   <SwiperSlide key={index} className="pl-10 sm:pl-20 md:pl-10 lg:pl-16 xl:pl-20   ">
                <img className="h-28 md:h-40 object-contain" src={values} alt="" />
                 
              </SwiperSlide>
              
           
           
          })}
        </Swiper>
          {/* <Slider {...settings}>
            
           
           
            <img src="/assets/images/approve2.png"  className="h-28 md:h-40 object-contain" alt="" />
           
            <img src="/assets/images/approve1.png" className="h-28 md:h-40 object-contain" alt="" />

            <img src="/assets/images/approve3.png"  className="h-28 md:h-40 object-contain" alt="" />
            
            <img src="/assets/images/approve2.png"  className="h-28 md:h-40 object-contain" alt="" />
           
            <img src="/assets/images/approve1.png" className="h-28 md:h-40 object-contain" alt="" />

            <img src="/assets/images/approve3.png"  className="h-28 md:h-40 object-contain" alt="" />
            

         
           
          </Slider> */}
        </div>
      </div>
    </>
  );
};

export default Partners;
