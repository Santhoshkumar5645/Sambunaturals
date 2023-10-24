import React, {useState, useEffect} from "react";
import RatingModal from "../../Modal/Profile/RatingModal";
import useFetchData from "../../CustomHooks/useFetchData";

const OrderDetails = (props) => {
    const [ratingModal, setRatingModal] = useState(false)
    const [orderDetailsData, setOrderDetailsData] = useState()

    useEffect(()=>{
      getOrderDetails()
  }, [])
   
  
  const { loading, makeRequest } = useFetchData();
  
  
  
  const getOrderDetails = async () => {

    const payload= {
      "order_id": props?.data
  }
  
    const Response = await makeRequest("/user/order-details", "post", payload);
    if(Response.status){
      setOrderDetailsData(Response.data)
  
    }
  
  };

    const RatingModalHandler = () =>{
        setRatingModal(!ratingModal)
    }
  return (
    <>
      <div className="mt-5">
        <div className="flex justify-between w-11/12">
        <p className="text-lg font-semibold">Order Details</p>
        <div onClick={props.state} className="text-sm text-primary flex gap-2 cursor-pointer">
            <img src="/assets/svg/leftarrow.svg" className="h-5" alt="" />
            <p>Back</p>
        </div>
        </div>
        {/* delivery location  */}
         {orderDetailsData?.delivery_location &&
        <div className="text-sm mt-5 space-y-2">
          <p className="font-semibold">Delivery Location</p>
          <div className="flex items-center gap-3">
            <img src="/assets/svg/location.svg" className="h-4" alt="" />
            <p>{orderDetailsData?.delivery_location}</p>
          </div>
        </div>
        }
        {/* Order status  */}
        {(orderDetailsData?.status === "delivered" ? console.log('done') : console.log('error') )}
        <div className="mt-5 space-y-2  text-sm relative">
          <p className="font-semibold">Order Status</p>
          <p className="border-b border-dotted absolute z-10 left-2 -bottom-9 w-5/12"></p>
          <div className="flex text-xs pt-3 z-50 absolute text-primary space-x-20 md:space-x-36">
            <div className="flex justify-center items-center flex-col space-y-1">
            {orderDetailsData?.status === "ordered" | 'confirmed' | 'delivered' ?
              <img src="/assets/svg/tick.svg" className="h-8" alt="" /> : <img src="/assets/svg/empty.svg" alt="" /> }
              <p>Ordered</p>
            </div>
            <div className="flex justify-center items-center flex-col space-y-1">
            {orderDetailsData?.status ==='confirmed' | 'delivered' ?  <img src="/assets/svg/tick.svg" className="h-8" alt="" /> :
            <img src="/assets/svg/empty.svg" className="h-8" alt="" /> } 
              <p>Confirmed</p>
            </div>
            <div className="flex justify-center items-center flex-col space-y-1">
            {orderDetailsData?.status === 'delivered' ?  <img src="/assets/svg/tick.svg" className="h-8" alt="" /> :
            <img src="/assets/svg/empty.svg" className="h-8" alt="" /> }
              <p>Delivered</p>
            </div>
          </div>
        </div>

        {/* order id  */}
           <div className="flex rounded-sm shadow-sm py-3 px-5 mt-24 text-sm text-slate-500 justify-between">
            <div className=" space-y-2">
                <p>Order Id:</p>
                <p>Order Date:</p>
            </div>
            <div className=" space-y-2">
                <p>{orderDetailsData?.order_id}</p>
                <p>{orderDetailsData?.order_date}</p>
            </div>
           </div>
        {/* product details  */}
        <div className="flex bg-[#EBEBEB] flex-col justify-between rounded-xl mt-8 px-5 py-7 w-full md:w-1/2  text-sm ">
          <div className="flex flex-col">
            <div className=" flex justify-between">
              <p className="mb-4 font-semibold text-lg">PRODUCT</p>
              <p className="mb-4 text-lg font-semibold">SUBTOTAL</p>

              {/* <p className="text-center">Aswagandha  X 2</p> */}
            </div>
            {orderDetailsData?.bill_details?.products.map((values)=>{
                return <div className="space-y-2 flex justify-between">
                <p className="text-center">{values.name}</p>
                  <p className="text-center pr-6 text-primary">{values.price}</p>
                </div>
            } )}
            
          </div>
          <hr className="mt-5 mb-3" />
          <div className="flex justify-end space-x-10 items-center mr-7">
            <p className="text-lg">Total</p>
            <p className="text-primary text-lg">{orderDetailsData?.bill_details?.total_amount}</p>
          </div>
        </div>
           {/* products  */}
        {/* <div className="mt-5 ">
            <p className=" font-semibold border-b w-fit">Products</p>
            <div className="flex items-center justify-between rounded-lg px-5 shadow-lg py-5 mt-5">
            <div className="flex items-center gap-5">
                <img src="/assets/images/product.png" className="h-16" alt="" />
                <p>Cookies</p>
            </div>
            <div onClick={RatingModalHandler} className="cursor-pointer">
                <img src="/assets/svg/rating.svg" className="h-8" alt="" />
            </div>
            </div>
        </div> */}
      </div>

      <RatingModal active={ratingModal} Handler={RatingModalHandler} />
    </>
  );
};

export default OrderDetails;
