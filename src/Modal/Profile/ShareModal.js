import React, { useState } from 'react'
import {
    FacebookMessengerShareButton,
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    LinkedinShareButton,
    InstapaperShareButton,
  } from "react-share";



function ShareModal(props) {
     const [copyData, setCopyData] = useState(true)
    const linkData = 'https://www.keeraikadai.com/'  //live url
    const copyLink = ()=>{
        return navigator.clipboard.writeText(linkData)
    } 
     

  return (
    <>
      <div className={props.active ? 'fixed z-50 inset-0 bg-black/50 flex justify-center items-center' : 'hidden'}>
                <div className={props.active ? 'w-5/6 sm:w-2/3 md:w-3/5 lg:w-2/5 h-2/6 md:h-2/6 flex justify-center flex-col bg-white relative space-y-6 pb-8 rounded-md' : 'hidden'}>

                <img
            onClick={props.Handler}
            className="right-3 top-3 absolute h-8 cursor-pointer"
            src="/assets/svg/close.svg"
            alt=""
          />                    
                   
                    <p className='text-center font-bold  text-lg'>Share</p>

                    <div onClick={copyLink} className='cursor-pointer mx-4 md:mx-8 lg:mx-12 rounded-sm border-b  border-gray-200  p-1 text-[6px] md:text-xs flex items-center justify-around'>
                       <p className='underline  pl-2 text-[#9C9C9C]'> {linkData}</p>
                       <img src="/assets/svg/copy.svg" className='h-5' alt="" />
                       {/* <button  className='text-white bg-primary py-1 px-3 '>{copyData ? "Copy": "Copied"}</button> */}
                    </div>
                    <div className='flex px-8 justify-around  mt-8 items-center  gap-5'>
                    <WhatsappShareButton url={linkData} >
                        <img src="/assets/images/whatsappshare.png" className='h-12' alt="" />
                        
                    </WhatsappShareButton>
                    <FacebookShareButton url={linkData} >
                       <img src="/assets/images/facebookshare.png" className='h-10' alt="" />

                    </FacebookShareButton >
                   
                     {/* <LinkedinShareButton url={linkData} >
                     <img src="/assets/images/linkedinshare.png" className='h-12' alt="" />

                     </LinkedinShareButton> */}

                     <TwitterShareButton url={linkData}>
                     <img src="/assets/images/twittershare.png" className='h-12' alt="" />

                     </TwitterShareButton>
                     

                     <a url={linkData} href="https://www.instagram.com/" target='_blank'><img src="/assets/images/instagramshare.png" className='h-12' alt="insta" /></a>

                   

                     

                    </div>
                    
                </div>
            </div>
    
    </>
  )
}

export default ShareModal