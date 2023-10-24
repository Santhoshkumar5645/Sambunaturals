import React, { useEffect, useState } from 'react'
import RegisterAddressModal from '../../Modal/RegisterAddressModal'
import axios from 'axios'
import { get } from 'react-hook-form'
import { LocalStorageService } from '../../Services/LocalStorageService'
import useFetchData from "../../CustomHooks/useFetchData";


const LocationRegister = () => {
  const [addressModal, setAddressModal] = useState(false)

  const AddressModalHandler = () => {
    setAddressModal(!addressModal)

  }



  return (
    <>
      <div className='md:border-2 mx-6 max-md:py-5 md:mx-20 mt-4 md:mt-12 rounded-2xl max-md:bg-[#D9D9D93B] md:border-primary  flex items-center justify-around font-AVENIR'>
        <img src="/assets/images/addaddress.png" className='h-48 max-md:hidden' alt="" />
        <img src="/assets/images/locationaddress.png" className='md:hidden' alt="" />
        <div className='space-y-2 md:space-y-3 flex flex-col justify-center items-center'>
          <p className='md:text-2xl lg:text-3xl font-semibold md:hidden'>Get your  orders at native place</p>
          <p className='font-semibold text-lg max-md:hidden text-center'>Get Farm Fresh Greens and Cut Vegetables at your nearest Location <br />
            Register with us now for latest updates</p>
          <button onClick={AddressModalHandler} className='bg-primary max-md:test-sm max-md:whitespace-nowrap text-white px-6 py-2 md:py-3 rounded-md'>Register your Location</button>
        </div>
      </div>
      <RegisterAddressModal active={addressModal} Handler={(AddressModalHandler)} />

    </>
  )
}

export default LocationRegister