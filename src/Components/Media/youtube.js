import React from "react";
import { a } from "react-spring";


const YouTube = (props) =>{
    return(
        <>

<div 
          
     className="bg-[#74A02F] cursor-pointer justify-center flex-col relative w-7/12  flex max-[500px]:pt-16 pt-32 sm:pt-32 md:pt-24 lg:pt-48 xl:pt-60 shrink-0  md:pb-5 px-2 pb-3 md:px-4 rounded-lg">
        
<a href={props.youtube_url} target="blank">
        <img src={props.youtube_thumbnail_image}  className="ml-2 md:ml-3  inset-0 z-20 -top-10 sm:-top-20 md:-top-36 lg:-top-44 xl:-top-44 pr-5 md:pr-10   absolute" alt="" />
        {/* ml-2 md:ml-3  inset-0 z-20 -top-10 sm:-top-20 md:-top-36 lg:-top-44 xl:-top-44 pr-5 md:pr-10   absolute */}
            <p className="text-white text-center max-md:hidden lg:text-md  md:pt-10 lg:pt-0">{props.description}</p>
            {/* சென்னையில் பொறியியல் பட்டதாரிகள் இணைந்து கீரைக்கடையை தொடங்கியுள்ளனர். 3 ஆயிரத்துக்கும் மேற்பட்ட விவசாயிகளை ஒருங் கிணைந்து 120 வகையான கீரைகளை விற்பனை செய்யும் இந்த கீரைக்கடை */}
            <p className="md:hidden text-white text-center font-semibold font-AVENIR text-lg sm:text-xl">We are keeraikadai</p>
            </a>
        </div>
     
        </>
    )
}

export default YouTube