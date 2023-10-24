import React, { useState } from 'react'

const FaqItem = () => {
    const [faqAnswer, setFaqAnswer] = useState(false)
  return (
    <>
      <div className='border-b border-primary'>
        <p onClick={()=>setFaqAnswer(!faqAnswer)} className='px-4 py-2 md:py-3 text-md' >+ What is the best way to consume Bone Strenghtening combo?</p>
        {
            faqAnswer &&
            <p className='px-4 pb-2  text-md'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae dolor molestias temporibus officiis voluptatum sit beatae quas odio, et labore.</p>

        }
      </div>
    </>
  )
}

export default FaqItem