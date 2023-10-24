import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../Style/common.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

const SwiperProduct = (props) => {
  return (
    <>
    <div className="relative flex justify-center font-AVENIR gap-3 items-center my-10">
         
          <div className="flex flex-col justify-center items-center">
            <p className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-AVENIR font-medium">
            Exclusive <span className="text-primary">Products</span>{" "}
            </p>
            <p className="max-md:hidden">Get Offer in Combo Packs</p>
          </div>
        </div>
      <div className="py-5 md:py-10  md:mx-6 md:px-10">
        <Swiper
          effect={"coverflow"}
          spaceBetween={50}
          initialSlide={true}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"3"}
          autoplay={
            //     {
            //   disableOnInteraction: false,
            // }
            true
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
          {props.data?.map((values, index) => {
            return (
              <SwiperSlide key={index} className="">
                <img className="object-contain md:h-72" src={values.image} alt="" />
                 
              </SwiperSlide>
              
            );
           
          })}
        </Swiper>
      </div>
     
      <div className="flex justify-center w-full mb-5 md:-ml-2 lg:-ml-2 xl:-ml-2">
        <img
          className="w-10 md:w-auto lg:w-auto xl:w-auto"
          src="/assets/svg/slidershade.svg"
          alt=""
        />
       
      </div>
    </>
  );
};

export default SwiperProduct;

