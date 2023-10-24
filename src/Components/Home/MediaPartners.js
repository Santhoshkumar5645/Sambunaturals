import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MediaPartnersData = [
  "/assets/partners/sponsor1.png",
  "/assets/partners/sponsor2.png",
  "/assets/partners/sponsor3.png",
  "/assets/partners/sponsor4.png",
  "/assets/partners/sponsor5.png",
];

const MediaPartners = () => {
  const settings = {
    dots: false,
    fade: false,
    className: "center",
    // centerMode: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" bg-[#EDEDED61] mb-10 pl-20">
        <Slider {...settings}>
          {MediaPartnersData.map((values, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-evenly h-36"
              >
              
                <img
                  src={values}
                  className="w-40 h-40 object-contain "
                  alt=""
                />
              </div>
            );
          })}
          {/* <img src="/assets/images/approve2.png"  className="h-28 md:h-40 object-contain" alt="" />
           
            <img src="/assets/images/approve1.png" className="h-28 md:h-40 object-contain" alt="" />

            <img src="/assets/images/approve3.png"  className="h-28 md:h-40 object-contain" alt="" />
            
            <img src="/assets/images/approve2.png"  className="h-28 md:h-40 object-contain" alt="" />
           
            <img src="/assets/images/approve1.png" className="h-28 md:h-40 object-contain" alt="" />

            <img src="/assets/images/approve3.png"  className="h-28 md:h-40 object-contain" alt="" /> */}

          {/* {
            SponsersData.map((item, index) => 
            return(<img key={index} src={item.img} alt="" /> ) 
           }  
            )
          } */}
        </Slider>
      </div>
    </>
  );
};

export default MediaPartners;
