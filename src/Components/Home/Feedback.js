import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = [
  {
    name: "Santhosh Kumar",
    content:
      "I am from Chennai..kindly open a branch good products.the products been really good.  Love this Product.",
    date: "15 days ago",
  },
  {
    name: "Santhosh Kumar",
    content:
      "I am from Chennai..kindly open a branch good products.the products been really good.  Love this Product.",
    date: "15 days ago",
  },
  {
    name: "Santhosh Kumar",
    content:
      "I am from Chennai..kindly open a branch good products.the products been really good.  Love this Product.",
    date: "15 days ago",
  },
  {
    name: "Santhosh Kumar",
    content:
      "I am from Chennai..kindly open a branch good products.the products been really good.  Love this Product.",
    date: "15 days ago",
  },
  {
    name: "Santhosh Kumar",
    content:
      "I am from Chennai..kindly open a branch good products.the products been really good.  Love this Product.",
    date: "15 days ago",
  },
];

function Feedback() {
  var settings = {
    dots: false,
    infinite: true,

    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex flex-col font-AVENIR justify-center items-center space-y-2 my-10">
        <p className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-AVENIR font-medium">
          What Our <span className="text-primary"> Customer Say</span>{" "}
        </p>
        <p className="max-md:hidden">Don’t Take Our Word For It</p>
      </div>
      <div className="">
        <Slider {...settings}>
          {Review.map((item, index) => {
            return (
              <>
                <div key={index} className="rounded-lg font-AVENIR py-8  px-10 md:ml-10 my-20 pt-16 space-y-4 relative bg-[#FFFFFF] shadow-xl  flex justify-center items-center flex-col">
                  <img
                    src="/assets/images/personlogo.png"
                    className="absolute  -top-12 h-24"
                    alt=""
                  />
                  <img
                    src="/assets/images\googlelogo.png"
                    className="absolute left-3 top-3 h-10"
                    alt=""
                  />

                  <p className="text-center font-bold">{item.name}</p>
                  <p className="text-center font-medium ">{item.content}</p>
                  <p className="text-end absolute right-3 text-xs bottom-3 ">
                    {item.date}
                  </p>
                  <img
                    src="/assets/images\ratinglogo.png"
                    className=""
                    alt=""
                  />
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default Feedback;
