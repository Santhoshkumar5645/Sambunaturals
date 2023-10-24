import React, { useState } from 'react'
import ShareModal from '../../Modal/Profile/ShareModal'

const ReferFriend = () => {
  const [shareModal, setShareModal] = useState(false)
  const ShareModalHandler = () =>{
    setShareModal(!shareModal)
  }
  return (
    <>
    <div className='flex flex-col justify-center items-center space-y-3'>
      <img src="/assets/images/referfriend.png" className='h-72' alt="" />
      <p className='md:font-semibold max-md:text-center max-md:text-primary text-lg'>Invite people to Keeraikadai . Let them enjoy our Healthy  Products.</p>
      <div onClick={ShareModalHandler} className='bg-primary text-white cursor-pointer text-sm flex items-center gap-3 py-2 px-8  rounded-sm'>
        <img src="/assets/svg/share.svg" className='h-4' alt="" />
        <p >Invite Friends with link</p>
      </div>
    </div>

    <ShareModal active={shareModal} Handler={ShareModalHandler} />
    </>
  )
}

export default ReferFriend