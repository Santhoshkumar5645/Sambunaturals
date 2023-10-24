import Reactm, { useEffect } from "react";
import { ScrolltoTop } from "../../Utility";

const AboutUs = (props) => {
  // useEffect(() => {
  //     ScrolltoTop()
  // }, [])

  return (
    <>
      <section>
        <div className="relative max-md:hidden flex  flex-col space-y-3 justify-center  rounded-lg  px-8 mt-3 mx-auto bg-[#EDF6EA] w-[98%] h-60">
          <h1 className="md:text-5xl xl:text-6xl text-primary font-bold ">
            About Us
          </h1>
          <hr className="max-md:hidden  w-60 border-primary border-b-2  mt-3 " />
          <p className=" md:text-3xl lg:text-4xl  max-md:hidden   ">
            Who we Are...?
          </p>
          <img src="/assets/images/aboutleaf10.png" className="absolute max-md:hidden -right-3 top-0 h-16" alt="" />

        </div>

        <p className="md:hidden font-bold tracking-wide font-AVENIR text-center text-xl my-4">
          About <span className="text-primary">Us</span>{" "}
        </p>

        <div className="px-6 md:px-8 text-md text-justify md:mb-16 relative font-AVENIR font-medium space-y-4  md:mx-5 ">
          <div className="max-md:flex md:flex max-md:flex-col-reverse gap-8 mb-6 ">
            <div className="md:w-1/2 space-y-2 md:space-y-12 md:my-8">
              <p className="text-2xl md:hidden font-extrabold">
                Founder’s Note
              </p>
              <p className="text-primary text-justify md:hidden   font-bold text-lg ">
                Greetings from KeeraiKadai!
              </p>
              <p className="text-justify text-md lg:text-lg max-md:hidden">
                I hope that as you browse our website, you will learn more about
                the nutritional benefits of Indian traditional greens which have
                been forgotten over the decades. As a team of young
                professionals sharing a common ideology of re-inventing
                traditional greens and introducing them to the modern diet, we
                aim to deliver healthy, value-added greens to our customers with
                a network of over 1500 farmers from whom we source our greens
                directly. We are a unique establishment that endures to deliver
                fresh and quality produce to our customers within 4 to 6 hours
                directly from our networked farms.
              </p>
              <p className="text-justify text-md lg:text-lg md:hidden">
                I hope that as you browse our website, you will learn more about
                the nutritional benefits of Indian traditional greens which have
                been forgotten over the decades. As a team
                <span onClick={props.state} className="text-primary md:hidden font-semibold">
                  View more..
                </span>
              </p>

              <div
                onClick={props.state}
                className="flex items-center cursor-pointer max-md:hidden gap-4 "
              >
                <p className="md:text-lg text-primary font-semibold">
                  View more
                </p>
                <div className="flex">
                  <img
                    src="/assets/images/greenarrow.png"
                    className="h-4"
                    alt=""
                  />
                  <img
                    src="/assets/images/greenarrow.png"
                    className="h-4"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:-mt-24 z-10 flex  justify-center ">
              <img
                alt=""
                className="max-md:rounded-xl "
                src="/assets/images/aboutmore.png"
              ></img>

            </div>

          </div>
          <img src="/assets/images/aboutleaf1.png" className="absolute -bottom-10 max-md:hidden -right-5 h-16" alt="" />

        </div>

        <div className="md:my-5 max-md:hidden relative">
          <p className="text-center  font-semibold font-AVENIR mr-12 lg:mr-20 md:text-5xl lg:text-6xl text-primary">
            Journey of Keeraikadai
          </p>
          <img src="/assets/images/aboutleaf.png" className="absolute max-md:hidden h-40 -left-24 -top-4" alt="" />
        </div>
        <div className="max-md:hidden">
          <div className="flex justify-center flex-col relative items-center ">
            <img
              src="/assets/images/aboutus1.png"
              className=" w-2/3 h-2/3 z-10 "
              alt=""
            />
                      <img src="/assets/images/aboutleaf2.png" className="absolute max-md:hidden left-0 h-36" alt="" />

            <img
              src="/assets/images/aboutus2.png"
              className=" w-2/3 h-2/3 -mt-2 sm:-mt-5 lg:-mt-10 mr-16 md:mr-28 lg:mr-36 z-0"
              alt=""
            />
                  <img src="/assets/images/aboutleaf3.png" className="absolute right-0 bottom-40 h-32 max-md:hidden" alt="" />
                  <img src="/assets/images/singleleafdown.png" className="absolute  max-md:hidden left-6  bottom-0 " alt="" />

          </div>
          <div className="flex justify-center flex-col relative items-center ">

            <img src="/assets/images/aboutleaf4.png" className="absolute max-md:hidden  left-0 h-28 " alt="" />

            <img
              src="/assets/images/aboutus3.svg"
              className=" w-2/3 h-2/3 -z-10 -mt-8 lg:-mt-16 xl:-mt-20 ml-28 "
              alt=""
            />
            <img
              src="/assets/images/aboutus4.svg"
              className=" w-2/3 h-2/3 -z-20 md:-mt-8 lg:-mt-14 mr-16 md:mr-28 lg:mr-36 "
              alt=""
            />
          </div>

          <div className="flex justify-center  items-center pl-40 relative md:-mt-8 lg:-mt-12">
          <img src="/assets/images/aboutleaf5.png" className="absolute max-md:hidden  right-60 h-80 -top-96" alt="" />
          <img src="/assets/images/aboutleaf6.png" className="absolute max-md:hidden  left-0 h-40" alt="" />


            <img
              src="/assets/images/aboutus5.svg"
              className=" w-2/3 h-2/3  xl:ml-12 xl:mb-1 -z-30 "
              alt=""
            />
          </div>
          <div className="flex relative justify-center items-center md:pr-12 lg:pr-24  xl:pr-40 -mt-1 lg:-mt-2 xl:-mt-3">
            <img
              src="/assets/images/aboutus6.svg"
              className=" w-2/3 h-2/3 max-lg:ml-5"
              alt=""
            />
                    <img src="/assets/images/aboutleaf7.png" className="absolute max-md:hidden  h-48 right-0 top-10" alt="" />

          </div>

        </div>
        <div className="flex justify-center relative items-center max-md:hidden pl-40 -mt-3 lg:-mt-6 xl:-mt-6 md:mb-16">
        <img src="/assets/images/aboutleaf9.png" className="absolute max-md:hidden   left-0 top-0 h-48" alt="" />

          <img
            src="/assets/images/aboutus7.svg"
            className=" w-2/3 h-2/3 "
            alt=""
          />
                              <img src="/assets/images/aboutleaf8.png" className="absolute max-md:hidden bottom-16 lg:bottom-32 left-0 " alt="" />

          <img
            src="/assets/images/greenround.svg"
            className="absolute left-40 lg:left-52 xl:left-64 lg:mb-1 h-10 bottom-0"
            alt=""
          />
        </div>

        {/* mobile responsive  */}

        <div className="flex justify-center font-AVENIR flex-col md:hidden items-center space-y-3 px-6">
          <img src="/assets/Icons/logo.jpg"  className="h-36" alt="" />

          {/* 2017  */}
          <div className="flex justify-center flex-col  items-center space-y-3  ">
            <p className="bg-[#D9D9D94D] text-center text-xl py-2 px-4 rounded-lg">
              2017
            </p>

            <div className="space-y-2">
              <p className="text-primary text-xl font-bold text-center">
                Launch of Keeraikadai.com
              </p>
              <p className="text-justify ">
                Keeraikadai.com was established in 2017 and introduced over 150
                varieties of Keerai aka Spinach. Our first store was launched by
                IT professional and natural farming enthusiast Mr. Sriram Prasad
                G.
              </p>
            </div>
            <img src="/assets/images/2017.png" className="w-3/4 pb-5" alt="" />
          </div>
          {/* 2018  */}
          <div className="flex justify-center flex-col  items-center space-y-3 mt-5">
            <p className="bg-[#D9D9D94D] text-center text-xl py-2 px-4 rounded-lg ">
              2018
            </p>

            <div className="space-y-2">
              <p className="text-primary text-xl font-bold text-center">
                Launch of Keeraikadai.com
              </p>
              <p className="text-justify">
                The first exclusive showroom for greens was launched by
                Keeraikadai.com at Coimbatore, Tamilnadu attracting over 1000
                customers the same year and became a one-stop-store for multiple
                varieties of greens
              </p>
            </div>
            <img src="/assets/images/2018.png" className="w-3/4 pb-5" alt="" />
          </div>

          {/* 2019  */}

          <div className="flex justify-center flex-col  items-center space-y-3 mt-5">
            <p className="bg-[#D9D9D94D] text-center text-xl py-2 px-4 rounded-lg ">
              2019
            </p>

            <div className="space-y-2">
              <p className="text-primary text-xl font-bold text-center">
              Greeny Dip – Soup in a Dip for the First Time Ever!
              </p>
              <p className="text-justify">
              Keeraikadai.com launched the Greeny Dip soups that is the very first of its kind. We were able to develop and deliver six variants of Keerai-based soups that can be consumed in the easiest possible way.

              </p>
            </div>
            <img src="/assets/images/2019.png" className="w-3/4 pb-5" alt="" />
          </div>
           
             {/* 2020  */}

          <div className="flex justify-center flex-col  items-center space-y-3 mt-5">
            <p className="bg-[#D9D9D94D] text-center text-xl py-2 px-4 rounded-lg ">
              2020
            </p>

            <div className="space-y-2">
              <p className="text-primary text-xl font-bold text-center">
              Greeny Meal – Ready to Eat!
              </p>
              <p className="text-justify">
              Ready to Eat curries were developed in five tasty variants that can be carried anywhere and very easily prepared. This made Keerai/Spinach a part of a regular diet for most of our customers.

              </p>
            </div>
            <img src="/assets/images/2020.png" className="w-3/4 pb-5" alt="" />
          </div>

           {/* 2021  */}

           <div className="flex justify-center flex-col  items-center space-y-3 mt-5">
            <p className="bg-[#D9D9D94D] text-center text-xl py-2 px-4 rounded-lg ">
              2021
            </p>

            <div className="space-y-2">
              <p className="text-primary text-xl font-bold text-center">
              Keeraikadai.com in USA
              </p>
              <p className="text-justify">
              Our third branch was launched in January 2021 at North Carolina, USA. This has expanded our scope into the international business of our carefully crafted products

              </p>
            </div>
            <img src="/assets/images/2021.png" className="w-3/4 pb-5" alt="" />
          </div>

          <div className="flex justify-center flex-col  items-center space-y-3 mt-5">
           

            <div className="space-y-2">
              <p className="text-primary text-xl font-bold text-center">
              Expansion into the International Market
              </p>
              <p className="text-justify">
              Keeraikadai.com is now exporting to USA, Canada, Australia, Taiwan, Germany, Dubai, Qatar, Kuwait, Abu Dhabi, Sharjah, Singapore and Malaysia

              </p>
            </div>
            <img src="/assets/images/2021-1.png" className="w-3/4 pb-5" alt="" />
          </div>
          {/* 2022  */}
          <div className="flex justify-center flex-col  items-center space-y-3 mt-5">
            <p className="bg-[#D9D9D94D] text-center text-xl py-2 px-4 rounded-lg ">
              2022
            </p>

            <div className="space-y-2">
             
              <p className="text-justify">
              Greens-enriched healthy snack alternative for children and adults. We are also the trendsetters in developing exclusive Augmented Reality App for Greens where users can simply scan the image, know the potential health benefits and also order through the Keerai Kadai App.   

              </p>
            </div>
            
          </div>
         
         
        </div>
        <div className="flex justify-center flex-col md:hidden  items-center space-y-5 mt-5 mb-10">
          <p className="bg-[#D9D9D94D] text-center text-xl py-2 px-4 rounded-lg ">
              2023
            </p>
            <img src="/assets/images/greenround.svg" className="h-6" alt="" />
            </div>
      </section>
    </>
  );
};

export default AboutUs;
