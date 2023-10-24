import React, { useState } from 'react'
import RatingModal from './RatingModal'
import { useForm } from "react-hook-form";

const FeedbackModal = (props) => {
    const [ratingModal, setRatingModal] = useState(false)
    const [textarea, setTextarea] = useState()

    const RatingModalHandler = () =>{
        if(textarea && textarea.length > 1){
          setRatingModal(!ratingModal)
           
        }
        else{
              
              alert('Enter atleast 10 characters')
        }
         
       
    }

    // const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();


 
  return (
    <>

    {
      ratingModal ? <RatingModal textValue={textarea} active={ratingModal} Handler={RatingModalHandler} />  : 
    
      <div  className={props.active ? 'fixed z-50 bg-black/30 w-full inset-0 flex justify-center items-center': 'hidden'}>
        <div  className={props.Handler ? 'md:w-2/5 md:h-3/6 bg-white rounded-lg relative' : 'hidden'}>
        <img
            onClick={props.Handler}
            className="right-3 top-3 absolute h-8 cursor-pointer"
            src="/assets/svg/close.svg"
            alt=""
          />
            <div className='p-10'>
               <p>Say Something?</p>
                <textarea  value={textarea} onChange={(event)=>setTextarea(event.target.value) } className='bg-[#D9D9D93D] w-full mt-5 p-2' name="" id="" cols="30" rows="6"></textarea>
                
               <div onClick={!textarea ? ()=> props.active :  props.Handler }  className='flex justify-end'> <button onClick={RatingModalHandler} className='bg-primary text-white py-2 w-3/6 text-sm rounded-sm  mt-3'>Continue </button></div>
               </div>
               
        </div>

      </div>
        }
      
    </>
  )
}

export default FeedbackModal
