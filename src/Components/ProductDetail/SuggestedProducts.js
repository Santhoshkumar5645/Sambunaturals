import React from 'react'
import ProductCard from '../Shop/ProductCard'
import { ScrolltoTop } from '../../Utility'
import SuggestedProductCard from './SuggestedProductCard'

const SuggestedProducts = (props) => {
   
  return (
    <>
       <div className='w-full flex flex-col mt-5 px-5 md:px-10 container mx-auto md:flex font-AVENIR'>
        <p className='text-xl md:text-2xl font-bold  text-center my-10'>Related <span className='text-primary'>Products</span> </p>
        <div className="grid gap-3  md:gap-8 grid-cols-2 md:grid-cols-3 mx-auto container  lg:grid-cols-3 xl:grid-cols-4">
          {props.data && props.data?.map((values, index) => {
            return (
            <div>   <SuggestedProductCard key={index}   {...values}
             
              />
              </div>  
            )
          })}

        </div>
       </div>
    </>
  )
}

export default SuggestedProducts

// onClick={()=>{
//   window.location.reload() 
//     ScrolltoTop()
// }}