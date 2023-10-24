import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { LocalStorageService } from '../../Services/LocalStorageService'
import useFetchData from "../../CustomHooks/useFetchData";
import { NotificationService } from "../../Service/NotificationService";

const RatingModal = (props) => {
  const [ratingSuccess, setRatingSuccess] = useState(false)
  const [rating,setRating] = useState(0)
  // const [starColor, setStarColor] = useState(false)
  // const ratingHandler= (id)=>{
  //    setRating()
  //    setStarColor(true)

  // }
  // useEffect(()=>{
       
  // }, [])

  const { loading, makeRequest } = useFetchData();


     const feedback = async () => {
      const userFeedback = props.textValue

      const payload = {
        "feedback":  userFeedback,
        "star_rating": rating
    }
      
    const Response = await makeRequest("/user/feedback", "post", payload);
    if (Response.status) {   
    }
  
    };
  return (
    <>
    <div  className={props.active ? 'fixed z-50 bg-black/30 w-full inset-0 flex justify-center items-center': 'hidden'}>
        <div  className={props.Handler ? 'w-5/6 md:w-3/6 lg:w-2/6  md:h-2/6 bg-white rounded-lg relative flex flex-col space-y-5 justify-center items-center py-3' : 'hidden'}>
        {/* <img
            onClick={props.Handler}
            className="right-3 top-3 absolute h-8 cursor-pointer"
            src="/assets/svg/close.svg"
            alt=""
          /> */}

          {ratingSuccess ? <>
             <div className='flex justify-center items-center flex-col space-y-2'>
              <img src="/assets/svg/thank.svg" className='h-24' alt="" />
              <p><span className='text-primary'>Thanks</span>, we got our response</p>
              <p onClick={props.Handler} className='bg-primary py-2 px-4 w-fit cursor-pointer text-white'>Done</p>
              </div>
          </> : 
          <>
           <p className='font-bold text-lg'>Rate our Product</p>   
           <div className='flex   gap-1'>
          
             
             {[...Array(5)].map((star, index) => {
                 index += 1;
               return (
          <button
            type="button"
            key={index}
            className={index <= rating ? "text-yellow-600" : "text-slate-200"}
            onClick={() => setRating(index)}
          >
             {/* <img src="/assets/svg/whitestar.svg" className={index <= rating ? "bg-yellow-600" : "fill-slate-300"} alt="" /> */}
            <span className="text-6xl ">&#9733;</span>
          </button>
        );
      })}
             
             {/* <img onClick={()=>ratingHandler(3)} src="/assets/svg/whitestar.svg" alt="" />
             <img src="/assets/svg/whitestar.svg" alt="" />
             <img src="/assets/svg/whitestar.svg" alt="" /> */}
           </div>
           <div onClick={()=>feedback()}><button onClick={()=>setRatingSuccess(!ratingSuccess)} className='bg-primary py-2 mt-3 px-5 text-white rounded-sm'>Submit</button></div>
           </>

        }
           
            
        </div>
      </div>
    </>
  )
}

export default RatingModal