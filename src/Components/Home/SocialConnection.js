import React, {useEffect, useState} from 'react'
import TextTransition, { presets } from "react-text-transition";


const Info = [
    "Socially Embedded with the Society Happily.",
    "Reaching Milestones in Every Single Step",
  ];

const SocialConnection = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index) => index + 1),
          3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);
  return (
   <>
     <div className="flex flex-col font-AVENIR justify-center items-center  space-y-2">
          <p className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-AVENIR font-medium">
            Social <span className="text-primary">Connection</span>{" "}
          </p>
          <p className="max-md:hidden">We are featuring in all the mediums.</p>
        </div>
        <div className="md:hidden">
          <p className="text-center">We are featuring in all the mediums.</p>
        </div>
        <div className=" flex justify-center items-center font-AVENIR max-md:px-5 my-4 md:gap-20">
          <div className="md:hidden">
            <p>
              We are featuring in all the mediums. Happy to sharing that all our
              products and greens.
            </p>
          </div>
          <div className="md:w-1/2 max-md:hidden text-center  space-y-4">
            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">We</p>
            <p className="text-primary text-4xl">Sambu Nautrals</p>
            <TextTransition
              springConfig={presets.wobbly}
              className="text-3xl flex justify-center items-center ml-3"
            >
              {Info[index % Info.length]}
            </TextTransition>

            <p className="text-lg mt-2">
              We are featuring in all the mediums. Happy to <br /> sharing that
              all our products and greens.
            </p>
          </div>
          <div className="w-5/6 md:w-2/6">
            <img
              src="/assets/images/grouplogo.png"
              className="h-48  md:h-96"
              alt=""
            />
          </div>
        </div>
   </>
  )
}

export default SocialConnection