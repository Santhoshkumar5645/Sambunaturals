import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useFetchData from '../../CustomHooks/useFetchData';
import { NotificationService } from '../../Service/NotificationService';

const Coupon = (props) => {

  const [coupon, setCoupon] = useState()

  return (
    <>

      <div
        className={
          props.active
            ? "bg-black/30 z-50 fixed inset-0 flex justify-center items-center"
            : "hidden"
        }
      >
        <div
          className={
            props.active
              ? "bg-white  rounded-lg  overflow-y-scroll  w-full h-full sm:w-2/3  md:w-2/2  lg:w-4/6  sm:h-full  lg:h-[88%]  relative "
              : "hidden"
          }
        >
          <img
            onClick={()=>{props.Handler()
               setCoupon('')}}
            className="right-1 top-1 absolute m-1  cursor-pointer"
            src="/assets/svg/close.svg"
            alt=""
          />
          <div className='px-5 md:px-12 flex max-md:flex-col pt-16 md:pt-10'>
          <input type="text" value={coupon} onChange={(e)=>setCoupon(e.target.value)} className='py-2 w-full md:w-1/2 shadow-md px-3 outline-none ' placeholder='Enter Coupon Code' />
          <button onClick={()=> props.couponSubmit(coupon)} className='bg-primary text-white text-sm w-fit mt-2 py-2 px-6  font-semibold'>Apply</button>
          </div>
          
          <div className='max-md:pt-16 max-md:px-3 md:p-10 font-AVENIR'>
            <p className='px-3 '>Available Coupons</p>
          { props.C_DATA?.length === 0 && 
             <div className='flex justify-center mt-10 items-center flex-col space-y-3 font-AVENIR'>
              <img src="/assets/images/emptycoupon.png" className='h-60' alt="" />
              <p className='font-semibold'>No Coupons</p>
              <p>There is no coupons yet</p>
             </div>
          }
            {props.C_DATA && props.C_DATA.map((values, index) => {
              return <div key={index} className='w-full shadow-lg flex items-start justify-between mt-10 px-5 py-4 border border-slate-100 relative'>
                <div className='space-y-2'>
                  <p className='text-lg font-medium'>{values.title}</p>
                  <p className='text-xs text-primary'>{values.description}</p>
                </div>


                <div className='max-md:space-y-6'>
                  <p className='text-xs border py-1 px-4 w-fit h-fit bg-[#BAE5C82E] md:absolute md:inset-x-1/2 lg:inset-x-1/3'>{values.code}</p>

                  <button onClick={()=>{
                     props.couponSubmit(values.code)
                     setCoupon('')
                  }} className='bg-primary py-1 md:py-2 px-6 text-sm rounded-md text-white'>Apply</button>
                </div>
              </div>
            })}

          </div>

        </div>
      </div>
    </>
  )
}

export default Coupon