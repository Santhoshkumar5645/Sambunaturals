import React from "react";

const WhyKeeraikadaiCard=(props) =>{
   
    return(
        <>
        <div className="md:bg-gradient-to-br relative rounded-xl font-bold space-y-8 group font-AVENIR text-center from-[#EDEDED]  to-[#EBEBEB00] md:hover:bg-gradient-to-t max-md:bg-[#D2FF8C7A] md:hover:from-[#74A02F42] hover:to-[#74A02F5E]  px-5 py-8 md:py-16">
            <img src={props.img} className="h-[3.2rem] absolute transition-all duration-700 -top-5 left-0 group-hover:rotatecard" alt="" />
            <div className="flex gap-1 justify-center text-xl"> 
            <p>{props.heading}</p>
            <p className="text-primary">{props.heading1}</p>

            </div>
            <p>{props.text}</p>
        </div>
        </>
    )
}

export default WhyKeeraikadaiCard