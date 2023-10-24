import React from 'react'
import { useNavigate } from "react-router";


function TopNavbar() {

   

    const navigate = useNavigate();

    const SocialLinks = [
        {
            title:"facebook",
            image:"assets/images/facebook.png",
            link:"https://www.facebook.com/keeraikadaifarm",
        },
        {
            title:"twitter",
            image:"assets/images/twitter.png",
            link:"https://twitter.com/keerai_kadai",
        },
        {
            title:"instagram",
            image:"assets/images/instagram.png",
            link:"https://www.instagram.com/keeraikadai/",
        },
        {
            title:"linkedin",
            image:"assets/images/linkedin.png",
            link:"https://www.linkedin.com/company/keeraikadai/",
        },
        {
            title:"youtube",
            image:"assets/images/youtube.png",
            link:"https://www.youtube.com/c/KeeraiKadai",
        },
    ]

  return (
    <>
   <div className='px-2 py-1 bg-primary w-full  justify-between hidden sm:hidden md:flex lg:flex'>
    <ul className='flex gap-x-2 items-center'>
        <li><p className='text-xs text-white'>ceo@keeraikadai.com</p></li>
        <li><p className='text-white'>|</p></li>
        <li><p className='text-xs text-[#FAFF00] font-bold '>Free Shipping for Orders above 200 INR.</p></li>
    </ul>

    <ul className='flex gap-x-2 items-center pr-10'>
        {SocialLinks.map((item, index)=>
        <li key={index}><img onClick={()=>window.open(item.link, '_blank')} className='h-4 w-auto cursor-pointer' key={index} src={item.image} alt={item.title} /></li>
        )}
        <li onClick={()=>navigate('./investor')}><p className='text-xs text-[#FAFF00] cursor-pointer font-bold '>Become an Investor</p></li>
    </ul>

   </div>
   <header>
    <img src="" alt="" />
   </header>
    
    </>
  )
}

export default TopNavbar