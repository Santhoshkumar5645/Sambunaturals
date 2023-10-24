import React from "react";
import ReactDOM from "react-dom";
import Logo from "../IconElements/Navbar Icons/Logo";
import { useNavigate } from "react-router";
import { motion } from 'framer-motion'

const Footer = () =>{
   
    const navigate = useNavigate();

    const SocialLinks ={
        linkedin:'https://www.linkedin.com/company/keeraikadai/',
        youtube:'https://www.youtube.com/c/KeeraiKadai',
        facebook: 'https://www.facebook.com/SambuNaturals/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0',
        twitter: 'https://twitter.com/keerai_kadai',
        instagram: 'https://www.instagram.com/sambu_naturals_oils/'
        // whatsapp:"https://wa.me/919372746310?text=Hello%2C%20I'd%20like%20to%20contact%20someone%20regarding%20an%20MBA%20query!",
        // call:' +919004305262'
      }
      const LocationRedirect = (url) =>{
        window.open(url, '_blank')
      }


    return(
        <>
        {/* bg-[#F7F9F3] */}
          <footer className="grid grid-cols-1 md:grid-cols-3 max-md:gap-6 justify-center gap-4 lg:gap-8 max-md:text-slate-500 relative  bg-[#F7F9F3] py-7 px-5 w-full rounded-t-lg font-AVENIR font-semibold">
              <div className="flex flex-col justify-center space-y-4 items-center relative">
                <p className="text-primary text-lg text-center mb-3 pb-6 md:pb-14">About us</p>
                <img src="assets/images/groupleaf.png " className="absolute top-4 h-16 right-14" alt="" />
                 <img src="/assets/Icons/sambu_logo.png" className="h-24" alt="" />
                 <p className= "text-center text-sm lg:text-md md:text-left"><span className="text-primary">Sambu Naturals</span>  is a one-stop store that provides multiple varieties of greens and natural food products. </p>
              </div>
              <div className="flex flex-col justify-around   ">
                  <p className="pb-6 md:pb-12 -mt-2 text-black text-lg text-center ">Important Links</p>
                  <div className="flex justify-center  gap-8 md:gap-2 lg:gap-10  text-sm lg:text-md">
                    <div className="space-y-6 md:space-y-5 ml-4 lg:ml-8 ">
                        <p onClick={()=> navigate('/')} className="cursor-pointer">Home</p>
                        <p onClick={()=> navigate('/about')} className="cursor-pointer">About Us</p>
                        {/* <p>Our Team</p> */}
                        <p onClick={()=> navigate('/shop')} className="cursor-pointer">Buy Our Products</p>
                        <p onClick={()=> navigate('/profile')} className="cursor-pointer">My Account</p>

                        <p onClick={()=> navigate('/cart')} className="cursor-pointer">My cart</p>
                    </div>
                    <div className="space-y-4 shrink-0"> 
                        {/* <p onClick={()=> navigate('/media')}  className="cursor-pointer">Media</p> */}
                        <p  onClick={()=> navigate('/contact')} className="cursor-pointer">Get In Touch</p>
                        <p onClick={()=> navigate('/privacypolicy')} className="cursor-pointer">Privacy Policy</p>
                        <p  onClick={()=> navigate('/terms')} className="shrink cursor-pointer" >Terms & Conditions</p>
                        {/* <p onClick={()=> navigate('/shippingpolicy')} className="cursor-pointer">Shipping Policy</p> */}
                        {/* <p onClick={()=> navigate('/refundpolicy')} className="cursor-pointer">Refund policy</p> */}
                    </div>
                  </div>
              </div>
              <img src="assets/images/groupleaf.png" className="absolute bottom-0 md:left-48 lg:left-60 xl:left-80 max-lg:hidden" alt="" />
{/* 
              <div className="flex justify-center flex-col items-center">
                 <p className="text-center text-black text-lg pb-6 md:pb-12">Social</p>
                 <img src="/assets/images/footerimg.png" className="w-64 lg:w-72 h-48 lg:h-52  object-fit" alt="" />
              </div> */}

              <div className="">
              <p className="text-center text-black text-lg pb-6 md:pb-12">Address</p>
              <p className="text-center text-sm lg:text-md  md:text-left md:pl-8">Ponmaran Illam 101, Erode Main Road, Muthugoundanpudur, Salangapalayam P.O., Kavindapadi, Erode, <br /> Tamilnadu - 638 455.</p>
               <div className="pl-8 flex max-md:justify-center gap-3 md:gap-1 lg:gap-3 mt-4">
                <img onClick={() => {LocationRedirect(SocialLinks.facebook)}} className="cursor-pointer"  src="assets/images/facebook.png" alt="" />
                {/* <img onClick={() => {LocationRedirect(SocialLinks.twitter)}} className="cursor-pointer" src="assets/images/twitter.png" alt="" /> */}
                <img onClick={() => {LocationRedirect(SocialLinks.instagram)}} className="cursor-pointer" src="assets/images/instagram.png" alt="" />
                {/* <img onClick={() => {LocationRedirect(SocialLinks.linkedin)}} className="cursor-pointer" src="assets/images/linkedin.png" alt="" /> */}
                {/* <img onClick={() => {LocationRedirect(SocialLinks.youtube)}} className="cursor-pointer" src="assets/images/youtube.png" alt="" /> */}
               </div>
              </div>
              <img src="assets/images/twoleafshop.png" className="absolute right-0 top-0 h-20 max-md:hidden " alt="" />

          </footer>
          <motion.div initial={{x:-500}} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 150, delay:5  }} className='fixed bottom-5 left-0  bg-[#74A02F]/50 pl-2 md:pl-3  rounded-r-full shadow-md select-none'>
      <a href="https://api.whatsapp.com/send/?phone=98429 97700&text=&type=phone_number&app_absent=0" target={'_blank'}><img draggable={false} className='h-16 md:h-16' src="/assets/svg/whatsapp.svg" alt="whp" /></a>
    </motion.div>
        </>
    )
}

export default Footer;