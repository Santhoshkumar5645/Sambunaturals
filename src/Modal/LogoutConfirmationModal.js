import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LocalStorageService } from '../Services/LocalStorageService'
import { NotificationService } from '../Service/NotificationService'
import useFetchData from '../CustomHooks/useFetchData'

const LogoutConfirmationModal = (props) => {

    const navigate= useNavigate()
    const { loading, makeRequest } = useFetchData();


    const logout=async () =>{
        const userType =await LocalStorageService.getItem('userType')
        if(userType === 'user'){
          LocalStorageService.removeItem('userType')
          LocalStorageService.removeItem('accessToken')
          LocalStorageService.removeItem('refreshToken')
          LocalStorageService.setItem('new_cart', [])

          
        }
        
       getToken()
       
        NotificationService('Logout Successfully', 'success', 'top-right')
      }


      const getToken = async () => {


        if (await LocalStorageService.getItem('accessToken') === null) {
    
          const Response = await makeRequest('/auth/get-token', 'get', {})
          if (Response.status) {
            LocalStorageService.setItem('accessToken', Response.data.accessToken)
            LocalStorageService.setItem('userType', 'guest')
            LocalStorageService.setItem('refreshToken', Response.data.refreshToken)
          }
        }
    
      }
  return (
    <>
      <div className={props.active ? 'fixed z-50 bg-black/60 w-full inset-0 flex justify-center items-center' : 'hidden'}>
        <div className={props.Handler ? 'w-5/6  md:w-2/6 h-auto bg-white rounded-lg   ' : 'hidden'}>
        
                 <div className='font-AVENIR flex justify-center items-center flex-col py-10 space-y-3'>
                    <img className='h-32' src="/assets/images/logoutemoji.png" alt="" />
                    <p>Are you sure, wanna logout?</p>
                    <div className='flex gap-8'>
                        <button onClick={()=>{
                            logout()
                             navigate('/')
                        }} className='border-2 h-7 text-primary border-primary px-4 text-sm'>Yes</button>
                        <button onClick={()=>props.Handler()} className='h-7 text-white bg-primary px-4 text-sm'>No</button>
                    </div>
                 </div>
        </div>

      </div>

    </>
   
  )
}

export default LogoutConfirmationModal