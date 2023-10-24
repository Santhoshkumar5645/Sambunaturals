import React from 'react'
import OrdersIcon from '../../IconElements/OrdersIcon'
import Orders from './Orders';
import Addresses from './Addresses';
import AccountDetails from './AccountDetails';
import Wishlist from './Wishlist';
import { useNavigate } from "react-router-dom";


const DashboardData=[
  {
    id:1,
    img: "/assets/images/orders.svg",
    greenimg:'/assets/images/ordersgreen.svg',
    title: "orders"
  },
  {
    id:2,
    img: "/assets/images/address.svg",
    greenimg: "/assets/images/addressgreen.svg",
    title: "Address"
  },
  {
    id:3,
    img: "/assets/images/wishlist.svg",
    greenimg: "/assets/images/wishlistgreen.svg",
    title: "wishlist"
  },
  {
    id:4,
    img: "/assets/images/profile.svg",
    greenimg: "/assets/images/profilegreen.svg",
    title: "Account Details"
  },
  {
    id:5,
    img: "/assets/images/logout.svg",    
    greenimg: "/assets/images/logoutgreen.svg",
    title: "Logout"
  }
]

const  Dashboard=() =>{

  const navigate = useNavigate();
  const ComponentToggler = (id) => {
    switch (id) {
      // case 1:
      //   return <Dashboard />;

      case 1:
        return <Orders  />;

        // Handler={LocationModalToggle}

      case 2:
        return <Addresses />;

      case 3:
         return <AccountDetails />;

      case 4:
        return <Wishlist />;

    


      default:
        return "";
    }
  };

  return (

    <>
     <section>
         <p className='max-md:mb-4'>Hello Anderson (not Anderson? <span className='cursor-pointer font-semibold border-b border-black'>Log out</span>)</p>
         <p>From your account dashboard you can view your <span className='cursor-pointer font-semibold text-primary border-b border-primary'>recent orders</span> , manage your <span className='cursor-pointer font-semibold text-primary border-b border-primary'>shipping and billing addresses</span> , and <span className='cursor-pointer font-semibold text-primary  border-primary'>edit your password and account details.</span></p>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-8 mt-5'>
         {DashboardData.map((values)=>{
          return(
            <>
            <div onClick={() => {ComponentToggler(values.id)}} className='cursor-pointer border-gray-100 border-2 group space-y-2 flex justify-center flex-col rounded-2xl md:rounded-xl shadow-xl h-44 md:h-36 px-10'>
                 <img src={values.img} className='h-16 block group-hover:hidden' alt="" />  
                 <img src={values.greenimg}  className='h-16 hidden group-hover:block'  alt="" />
                 <p className='uppercase text-center'>{values.title}</p>

            </div>
            </>
          )
         })}
         </div>
         
     </section>
    
    </>
  )
}

export default Dashboard