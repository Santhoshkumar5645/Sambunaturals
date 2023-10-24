import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import QualityCard from "../Components/Home/QualityCard";
import Subscription from "../Components/Home/Subscription";
import SwiperProduct from "../Components/Home/SwiperProduct";
import Partners from "../Components/Home/Partners";
import Feedback from "../Components/Home/Feedback";
import Banner from "../Components/Home/Banner";
import MediaPartners from "../Components/Home/MediaPartners";
import LocationRegister from "../Components/Home/LocationRegister";
import useFetchData from "../CustomHooks/useFetchData";
import { LocalStorageService } from "../Services/LocalStorageService";
import { ScrolltoTop, getTokenCall } from "../Utility";
import KeeraikadaiSpecial from "../Components/Home/KeeraikadaiSpecial";
import HomeOurProducts from "../Components/Home/HomeOurProducts";
import HomeWhyKeeraikadai from "../Components/Home/HomeWhyKeeraikadai";
import SocialConnection from "../Components/Home/SocialConnection";

const Home = () => {
  const [ourProductsData, setOurProductsData] = useState();

  const { loading, makeRequest } = useFetchData();
  let timeoutId;
  useEffect(() => {
    ScrolltoTop();
    const accessToken = LocalStorageService.getItem('accessToken')
    if(accessToken){
        ourProducts()
    }
    else{
      timeoutId = setTimeout( ourProducts, 3000); // Fetch data after 2 seconds

      return () => {
        clearTimeout(timeoutId); // Clear the timeout when the component is unmounted
      };
    }
   
  }, []);

  const ourProducts = async () => {
    const Response = await makeRequest("/common/our-products", "get", {});
    if (Response.status) {
      setOurProductsData(Response.data);
    }
  };

  

  const firstThreeData = ourProductsData?.slice(0, 3);

  return (
    <>
      <section className="pb-20">
        <Banner />
        <div className="relative">
          <div className="flex max-md:bg-[#D2FF8C85] justify-center shrink-0 md:mt-8 overflow-x-hidden px-5 items-center">
            <QualityCard />
          </div>
        </div>
        <LocationRegister />
        <KeeraikadaiSpecial />
        {/* Our products  */}
        <HomeOurProducts firstThreeData={firstThreeData} />
        {/* <Subscription /> */}
        <Partners />
        <SwiperProduct data={ourProductsData && ourProductsData} />

        <HomeWhyKeeraikadai />

        <MediaPartners />
        <SocialConnection />

        <Feedback />
      </section>
    </>
  );
};

export default Home;
