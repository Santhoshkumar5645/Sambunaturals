import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import useFetchData from "../../CustomHooks/useFetchData";

const Articles = () => {
  const [articleData, setArticleData] = useState();

  const { loading, makeRequest } = useFetchData();

  useEffect(() => {
    article();
  }, []);

  const article = async () => {
    const Response = await makeRequest("/common/articals", "get", {});
    if (Response.status) {
      setArticleData(Response.data);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center py-6 gap-2">
        <img src="/assets/images/articlelogo.png" className="h-8" alt="" />
        <p className="text-xl lg:text-3xl">Articles</p>
      </div>
      <div className="md:bg-[#74A02F]  py-5 md:py-10 rounded-md mx-6 px-3 md:px-10">
        <Swiper
          effect={"coverflow"}
          spaceBetween={10}
          initialSlide={true}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"3"}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
          }}
          //   pagination={{el:'', clickable:true}}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          className=" "
        >
          <div style={{ display: "flex" }} className=" md:space-x-8">
            {articleData &&
              articleData.map((values, index) => {
                return (
                  <SwiperSlide key={index} className="">
                    <img src={values.image} className="" alt="" />
                  </SwiperSlide>
                );
              })}
          </div>
     
        </Swiper>
      </div>
    </>
  );
};

export default Articles;
