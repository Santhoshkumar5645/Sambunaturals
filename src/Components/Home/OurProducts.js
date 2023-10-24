import React, { useState } from "react";

const OurProducts = (props) =>{
    const [name, setName] = useState(false)
    return(
        <>

        <div className={`relative ${props.id === 2 && 'md:mt-24'}  flex justify-center md:items-center group font-semibold font-AVENIR border py-2 md:py-4 lg:py-8 px-3 md:px-5 lg:px-10 rounded-2xl border-slate-300 max-md:mx-auto w-1/4`}>
        <div style={{backgroundColor : props.background_color}}  className={` w-[5.3rem] max-md:hidden  min-[400px]:w-28 min-[520px]:w-36  sm:w-48 md:w-48 lg:w-60  xl:w-64 h-10 sm:h-16 md:h-20 group-hover:min-[400px]:h-32  group-hover:h-[5.6rem] group-hover:sm:h-40 group-hover:md:h-44 group-hover:lg:h-56 group-hover:xl:h-64 group-hover:transition-all group-hover:duration-500 hover:delay-75  absolute -z-10 sm:top-5 md:top-8 lg:top-10 rounded-xl `}> </div>
        

            <div  className="space-y-1 md:space-y-3">
            <img src={props.image} className="md:h-52 lg:h-64 xl:h-72 z-50 object-center" alt="" />
            <p className="text-center text-xs md:text-md max-md:hidden">{props.name}</p>

            <p onClick={()=>setName(!name)} className="text-center text-xs md:text-md md:hidden">{name ? props.name : props.name.slice(0, 20)}<span className={`${name  || props.name.length < 20 && 'hidden'}`} >...</span></p>
            </div>
        </div>
        </>
    )
}

export default OurProducts