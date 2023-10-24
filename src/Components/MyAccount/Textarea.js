import React from 'react'

function Textarea(props) {

  const CustomeError = props.error;
  const InputName = props.inputname;

  return (
    <>
      <div {...props.register(props.inputname, props.validationSchema)} className='flex flex-col items-start gap-1'>
        <label for={props.id} className='text-[#6A3051] font-sato-medium text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] capitalize'>{props.label}</label>
        <textarea id={props.id} rows={props.rows} class={`border-[0.5px] font-sato-regular  placeholder:text-[#6A3051]/40 w-full text-paragraph border-paragraph focus:outline-none rounded-[10px] p-3 bg-[#F1D7FF]  capitalize ` } placeholder={props.placeholder} name={props.inputname}></textarea>
        {CustomeError && CustomeError[InputName]?.type === "required" && (
          <span className='capitalize font-sato-regular' style={{color:'red'}}>{CustomeError[InputName]?.message}</span>
        )}
      </div>
    </>
  )
}

export default Textarea