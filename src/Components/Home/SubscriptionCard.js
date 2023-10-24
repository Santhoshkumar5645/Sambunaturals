import React from "react";

const SubscriptionCard = () => {
  return (
    <>
      <div className="bg-white font-AVENIR  flex flex-col space-y-2 lg:space-y-3  xl:space-y-4 group">
        <div className="bg-gradient-to-br from-[#3564AB] to-[#00CAD7]  w-24 group-hover:w-full rounded-br-[3rem] group-hover:rounded-none  group-hover:transition-all group-hover:duration-500 hover:delay-75 text-white font-bold tracking-wider flex pl-4 py-3 lg:py-5 xl:py-8">
          Weekly
        </div>
        <p className=" text-center text-xl shrink-0 lg:text-3xl">
          ₹199 <span className="text-sm lg:text-lg"> /Week</span>
        </p>
        <div className="space-y-1  lg:space-y-3 mb-2 text-xs lg:text-sm px-2 lg:px-3 xl:px-6">
          <div className="flex  gap-2">
            <img src="/assets/images/tickicon.png" alt="" />
            <p className="xl:shrink-0">Monthly basis Contains</p>
          </div>
          <div className="flex gap-2">
            <img src="/assets/images/tickicon.png" alt="" />
            <p className="xl:shrink-0">Monthly basis Contains</p>
          </div>
          <div className="flex gap-2 ">
            <img src="/assets/images/dashicon.png" alt="" />
            <p className="xl:shrink-0">Monthly basis Contains</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-[#3468AD] to-[#04C3D4] rounded-3xl py-1 lg:py-2 px-4 lg:px-6 text-white">
            Purchase
          </button>
        </div>
      </div>
    </>
  );
};

export default SubscriptionCard;
