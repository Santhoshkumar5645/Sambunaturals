import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useScroll } from "react-spring";
import useFetchData from "../../CustomHooks/useFetchData";
import { LocalStorageService } from "../../Services/LocalStorageService";
import { Loader } from "../../Utility";

const bannerData = [
  {
    img: "/assets/banner/banner1.png",
  },
  {
    img: "/assets/banner/banner2.png",
  },
  {
    img: "/assets/banner/banner3.png",
  },
];

const Banner = () => {
  const [homeBannerData, setHomeBannerData] = useState();
  const { loading, makeRequest } = useFetchData();

  const slider = useRef(null);

  const settings = {
    dots: false,
    // centerMode: true,
    infinite: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 8000,
    cssEase: "linear",
  };
  
  let timeoutId;

  useEffect(() => {
    homeBanner();
    // const accessToken = LocalStorageService.getItem("accessToken");
    // if (accessToken) {
      
    // } else {
    //   timeoutId = setTimeout(homeBanner, 3000); // Fetch data after 2 seconds

    //   return () => {
    //     clearTimeout(timeoutId); // Clear the timeout when the component is unmounted
    //   };
    // }
  }, []);

  const homeBanner = async () => {
    const Response = await makeRequest("/common/home-top-banners", "get", {});
    if (Response.status) {
      setHomeBannerData(Response.data);
    }
  };

  return (
    <>
    {
      loading ? <Loader /> :
      <div className="max-md:h-full">
        <Slider ref={slider} {...settings}>
          {homeBannerData &&
            homeBannerData.map((values, index) => {
              return (
                <div key={index}>
                  {values.file_type === "image" ? (
                    <img src={values.file_url} className="" alt="" />
                  ) : (
                    <video controls width="">
                      <source src={values.file_url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              );
            })}
        </Slider>
        {homeBannerData?.length !== 0 && (
          <>
            <ArrowNext
              Handler={() => {
                slider?.current?.slickNext();
              }}
            />
            <ArrowPrev
              Handler={() => {
                slider?.current?.slickPrev();
              }}
            />
          </>
        )}
      </div>
    }
      
    </>
  );
};

const ArrowNext = (props) => {
  return (
    <>
      <div
        onClick={props.Handler}
        className=" cursor-pointer absolute top-40 md:inset-y-1/2 right-0  rounded-full flex justify-center items-center "
      >
        <img
          src="/assets/banner/rightarrow.png"
          className="h-10 md:h-20"
          alt="arrow"
        />
      </div>
    </>
  );
};

const ArrowPrev = (props) => {
  return (
    <>
      <div
        onClick={props.Handler}
        className=" cursor-pointer absolute top-40 md:inset-y-1/2  left-0   rounded-full flex justify-center items-center "
      >
        <img
          src="/assets/banner/leftarrow.png"
          className="h-10 md:h-20"
          alt="arrow"
        />
      </div>
    </>
  );
};

export default Banner;
