import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import AboutMore from "../Components/About/AboutMore";
import AboutUs from "../Components/About/AboutUs";
import { ScrolltoTop } from "../Utility";

const About = () => {
  useEffect(()=>{
      ScrolltoTop()
  }, [])
  const [aboutMore, setAboutMore] = useState(true);

  return <>{aboutMore ? <AboutUs state={()=>{setAboutMore(false)}} /> : <AboutMore />}</>;
};



export default About;


