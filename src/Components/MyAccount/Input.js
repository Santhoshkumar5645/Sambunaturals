import React from 'react'



function Input(props) {
    const CustomeError = props.error;
    const InputName = props.inputname;
    return (
        <>
            <div className='flex flex-col items-start gap-1 mt-2 font-AVENIR'>
                <label for={props.id} className=' text-sm md:text-md capitalize '>{props.label}</label>
                <input {...props.register(props.inputname, props.validationSchema)} id={props.id} className='w-full  appearance:none  border-[0.5px]  text-paragraph border-paragraph  focus:outline-none rounded-md py-[9px] mt-2 border-gray-500 text-md' placeholder={props.placeholder} type={props.type} name={props.inputname} max={props.max} min={props.min} />

                {CustomeError && (
                    <span style={{color:"red",fontSize:12,fontWeight:400}} className='capitalize '>{CustomeError[InputName]?.message}</span>
                )}
               
            </div>
        </>
    )
}

export default Input