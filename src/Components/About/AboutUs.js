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
          <img
            src="/assets/images/aboutleaf10.png"
            className="absolute max-md:hidden -right-3 top-0 h-16"
            alt=""
          />
        </div>

        <p className="md:hidden font-bold tracking-wide font-AVENIR text-center text-xl mt-8">
          About <span className="text-primary">Us</span>{" "}
        </p>

        <div className="px-6 md:px-8 text-md text-justify  relative font-AVENIR font-medium space-y-4  md:mx-5 ">
          <div className="max-md:flex md:flex max-md:flex-col-reverse gap-8 mb-6 ">
            <div className="md:w-1/2 space-y-4 md:space-y-5 md:my-8 text-justify text-md lg:text-lg ">
             
              <p className="">
                By the natural way, we practice traditional wood press method to
                extract edible oils from the handpicked quality seeds which
                retains its nutritional value. Our products are in the form of
                purest, unrefined and unadulterated that comes in natural and
                traditional way.
              </p>

              <p>
                Ponmaran Illam, manufacturer of traditional wood pressed /
                marachekku oils in the brand name Sambu brings you the
                traditional healthy oils that are rich in vitamins, proteins and
                minerals at an affordable price without compromising on quality.
                Let's make our family healthier and stronger.
              </p>

              <p>
                100% Natural, Rich in Vitamins and Nutrients, No chemicals, No
                preservatives.
              </p>

              <p>
                In 2015, we started with 1 Marachekku with no workers, with aim
                of 100% pure products with reasonable price. Now we have 14
                employees also we have the same aim and we going the same path.
                Presently we are selling Edible Oils, Non-Edible Oils, Cereals,
                Pulses, Cane Sugar, Millets, Spices, Personal Care items, etc,.
                with 100% purity. Mostly all the products we are manufacturing
                ourselves and also proceeding from favours who are 100% organic
                cultivations. Our growth is the support of the valued customers
                like you and we need support in future also.
              </p>

             
            </div>
            <div className="md:w-1/2 z-10 flex  justify-center ">
              <img
                alt=""
                className="max-md:rounded-xl "
                src="/assets/images/about.jpeg"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
