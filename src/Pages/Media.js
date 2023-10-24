import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Articles from "../Components/Media/Articles";
import YouTube from "../Components/Media/youtube";
import WebArticles from "../Components/Media/WebArticles";
import useFetchData from "../CustomHooks/useFetchData";
import { ScrolltoTop } from "../Utility";


const Media = () => {
  const [youtubeData, setYoutubeData] = useState()
  const { loading, makeRequest } = useFetchData();

  useEffect(() => {
   youtube()
    ScrolltoTop()
  }, []);

  const youtube =async () =>{
    const Response = await makeRequest('/common/media-youtube', 'get', {})
    if(Response.status){
      setYoutubeData(Response.data)
    }
    
    }

  return (
    <>
      <section className="">
        <p className="md:hidden text-center pt-5 font-bold text-xl">
          Our <span className="text-primary">Media</span>{" "}
        </p>

        <div className="w-[98%] md:bg-[#EDF6EA] relative  h-auto py-10  md:px-6 lg:px-10 mx-auto shrink-0 flex items-center justify-center md:justify-between  rounded-lg mt-3 ">
          <div className="space-y-4 ml-6 lg:ml-16 max-md:hidden">
            <img
              className=" absolute  -left-3 -top-3 rotate-180 max-md:hidden  "
              src="assets/images/groupleaf.png"
            ></img>
            <p className="text-primary tracking-wide font-bold  md:text-5xl xl:text-6xl ">
              Media
            </p>
            <hr className="border-primary border-b md:w-60 lg:w-72" />
            <p className="font-bold text-2xl lg:text-3xl">
              The way of communication
            </p>
            <p className="text-sm lg:text-md text-slate-700">
              Natural health boosting products at keeraikadai ,will lead you a
              happy life
            </p>
          </div>
          <div className="flex justify-center  relative shrink-0">
            <img
              src="/assets/images/mediabackground.png"
              alt=""
              className="w-full max-md:h-80  md:w-4/6 "
            />
            <img
              src="/assets/images/media1.png"
              alt=""
              className="h-12 md:h-16 -top-5 absolute rotate rotate-animation"
            />
            <img
              src="/assets/images/media2.png"
              alt=""
              className="h-12 md:h-16 absolute right-0 md:right-16 top-10 rotate rotate-animation"
            />
            <img
              src="/assets/images/media3.png"
              alt=""
              className="h-8 md:h-10  absolute bottom-10 right-0 md:right-10 rotate rotate-animation"
            />
            <img
              src="/assets/images/media4.png"
              alt=""
              className="h-10 md:h-16 absolute -bottom-5 rotate rotate-animation "
            />
            <img
              src="/assets/images/media5.png"
              alt=""
              className="h-16 md:h-20 absolute left-0 md:left-14 bottom-10  rotate rotate-animation"
            />
            <img
              src="/assets/images/media6.png"
              alt=""
              className="h-10  md:h-14 absolute left-0 md:left-12 top-10 rotate rotate-animation"
            />
          </div>
          <img
            className="absolute -right-3 -bottom-3   max-md:hidden "
            src="assets/images/groupleaf.png"
          ></img>
        </div>

        {/* CM Award section  */}

        <div className="my-10  md:px-12">
          <p className="uppercase px-2 text-primary font-bold text-sm text-center max-md:leading-6 md:text-xl  mb-6">
            TANSEED 3.0 Grantee & Recognised by the H'ble Chief Minister of TN,
            Thiru. MK Stalin{" "}
          </p>
          <div className="flex items-center gap-3 md:gap-6 px-6">
            <div className="">
              <img src="/assets/images/award1.png" className="" alt="" />
            </div>
            <div className="space-y-2  md:space-y-4  h-4/6">
              <img
                src="/assets/images/award2.png"
                className="h-4/6 w-full"
                alt=""
              />
              <img src="/assets/images/award3.png" className="h-3/5" alt="" />
            </div>
          </div>
        </div>

        {/* minister award  */}

        <div className="flex max-md:flex-col relative  items-center justify-center gap-8 md:pr-16 px-5 py-12">
          <img
            src="/assets/images/ministeraward.png"
            className="w-4/6 md:w-3/6"
            alt=""
          />
          <div className="space-y-4">
            <p className="text-primary md:text-md lg:text-lg xl:text-2xl font-semibold uppercase text-center">
              Awarded for “Contribution towards Food Innovation” at Thozhil
              Vazhamai Award 2022 by H’ble Minister of Electricity & Prohibition
              & Excise{" "}
            </p>
            <p className="text-primary text-xl lg:text-2xl font-bold uppercase text-center">
              Thiru. Senthil Balaji.
            </p>
          </div>

          <img src="/assets/images/multipleleafs.png" className="absolute h-64 -bottom-10 right-0 max-md:hidden" alt="" />
        </div>

        {/* Articles  */}
       
        <Articles />

        {/* youtube  */}

        <div className="flex justify-center items-center pt-10   gap-2">
          <img src="/assets/images/mediayoutube.png" className="h-10" alt="" />
          <p className="text-xl lg:text-3xl">YouTube</p>
        </div>

        <div className=" flex overflow-x-scroll scrollbar-hide overflow-hidden pt-20 sm:pt-28 md:pt-40 lg:pt-48 xl:pt-52 gap-10 px-8">
          {youtubeData && youtubeData.map((values,index)=>{
            return  <YouTube key={index} {...values} />
          })}
         
         
        </div>

        {/* <p className=" border-green-800 py-3 md:my-8 border-b-2" /> */}

      

        <div className="flex justify-center items-center py-10 relative  gap-2">
          <img src="/assets/images/webarticles.svg" className="h-10" alt="" />
          <p className="text-xl lg:text-3xl">Web articles</p>
          <img src="/assets/images/mediaside5.png" className="absolute left-0 h-24 max-md:hidden" alt="" />
          <img src="/assets/images/multipleleafs.png" className="absolute h-64 -bottom-40 right-0 max-md:hidden" alt="" />

        </div>

        <WebArticles />
      </section>
    </>
  );
};

export default Media;
