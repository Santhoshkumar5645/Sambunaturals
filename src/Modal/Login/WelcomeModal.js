import React, { useState } from 'react'
import SigninModal from './SigninModal'
import { useNavigate } from 'react-router-dom'
import { LocalStorageService } from '../../Services/LocalStorageService'

const WelcomeModal = (props) => {
  const [signinModal, setSigninModal] = useState(false)

  const navigate = useNavigate()
 

  const SigninModalHandler = () =>{
    setSigninModal(!signinModal)
  }
  return (
    <>
     <div  className={props.active ? 'fixed z-50 bg-black/60 w-full inset-0 flex justify-center items-center': 'hidden'}>
        <div  className={props.Handler ? 'w-5/6 h-3/6 md:w-2/6 md:h-2/5 bg-white rounded-lg relative flex justify-center items-center' : 'hidden'}>
        <img
            onClick={()=>{
              props.Handler()
              navigate('/')
            }}
            className="right-3 top-3 absolute h-8 cursor-pointer"
            src="/assets/svg/close.svg"
            alt=""
          />
          <div className='flex justify-center items-center flex-col space-y-3'>
                      <img src="/assets/Icons/sambu_logo.png" className="h-32 py-1" alt="" />

          {/* <p className='text-primary text-md font-semibold'>Nurturing Health in Nature's way</p> */}
          <p className='w-full' ><button onClick={()=>{
            SigninModalHandler()
            props.Handler()
          
            }} className='w-full py-2 text-white bg-primary rounded-md text-sm'>Sign in</button></p>
          </div> 
        </div>

      </div>
      <SigninModal checkout={props.checkout} from={props.from} data={props.data} active={signinModal} Handler={SigninModalHandler}  />
    </>
  )
}

export default WelcomeModal