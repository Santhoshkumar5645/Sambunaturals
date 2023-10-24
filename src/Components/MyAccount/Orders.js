import React, { useState, useEffect } from "react";
import OrderDetails from "./OrderDetails";
import useFetchData from "../../CustomHooks/useFetchData";



const CompletedData = [
  {
    id: 1,
    order_id: "Keerai01234",
    order_date: "12.02.2022",
  },
  {
    id: 2,
    order_id: "Keerai01234",
    order_date: "12.02.2023",
  },
  {
    id: 3,
    order_id: "Keerai01234",
    order_date: "12.02.2023",
  },
];

function Orders() {
  const [Toggler, setToggle] = useState(1);
  const [orderHistory, setOrderHistory] = useState();

  useEffect(() => {
    getOrderHistory();
  }, []);

  const { loading, makeRequest } = useFetchData();

  const getOrderHistory = async () => {
    const Response = await makeRequest("/user/order-history", "post", {});
    if (Response.status) {
      setOrderHistory(Response.data);
    }
  };


  const ComponentToggler = (id) => {
    switch (id) {
      case 1:
        return <OnProcess data={orderHistory?.current_orders} />;

      case 2:
        return <Completed data={orderHistory?.completed_orders} />;

      case 3:
        return <OrderDetails />;

      default:
        return "";
    }
  };

  return (
    <>
      {(orderHistory?.length === 0) &&
      (orderHistory?.length === 0) ? (
        <div className="flex justify-center mt-10 items-center flex-col space-y-3 font-AVENIR">
          <img src="/assets/images/emptyorder.png" className="h-60" alt="" />
          <p className="font-semibold">No Orders yet</p>
          <p>You have no active orders yet</p>
        </div>
      ) : (
        <div>
          <div className="flex gap-10">
            <div
              onClick={() => {
                setToggle(1);
              }}
              className={
                Toggler === 1
                  ? "text-primary  whitespace-nowrap border-b-2 border-primary "
                  : " text-black"
              }
            >
              <p className="capitalize tracking-wider font-extrabold text-xl cursor-pointer">
                Current
              </p>
            </div>
            <div
              onClick={() => {
                setToggle(2);
              }}
              className={
                Toggler === 2
                  ? "text-primary   whitespace-nowrap  border-b-2 border-primary"
                  : "text-black "
              }
            >
              <p className="capitalize font-extrabold text-xl tracking-wider cursor-pointer">
                Completed
              </p>
            </div>
          </div>

          <div>{ComponentToggler(Toggler)}</div>
        </div>
      )}
    </>
  );
}

export default Orders;

const OnProcess = (props) => {
  const [orderDetail, setOrderDetail] = useState(false);
  const [id, setId] = useState();

  return (
    <>
      {orderDetail ? (
        <OrderDetails data={id} state={() => setOrderDetail(!orderDetail)} />
      ) : (
        <>
          {props?.data?.map((values, index) => {
            const {
              order_date,
              order_id,
              order_status,
              order_time,
              order_total,
              otp,
            } = values;

            return (

              <div key={index} className="border font-AVENIR text-sm flex relative items-center py-3 px-3 md:px-6  rounded-lg mt-8 max-md:w-fit md:shadow-lg border-gray-700">
                <div className="space-y-3 md:flex md:py-2 md:gap-10 lg:gap-36 max-md:justify-between items-center w-full ">
                  <div className="flex  justify-between max-md:pb-4">
                    <p className="font-semibold">{order_id}</p>
                    <div className="flex items-center text-sm md:absolute md:right-8 md:top-3">
                      <p>OTP:</p>
                      <p className="bg-[#35AB3930] text-xs px-1 mx-1 w-fit">
                        {otp}
                      </p>
                    </div>
                  </div>
                  <p className="rounded-lg w-fit text-[10px]  px-3 bg-[#348F4126]">
                    {order_status}
                  </p>
                  <div className="flex gap-5  md:gap-12 text-xs">
                    <div className="space-y-2">
                      <p className="text-gray-500 whitespace-nowrap">
                        Ordered Date
                      </p>
                      <div className="flex gap-1 items-center ">
                        <img
                          src="/assets/images/orderdate.svg"
                          className="h-3"
                          alt=""
                        />
                        <p>{order_date}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-500 whitespace-nowrap">
                        Ordered Time
                      </p>
                      <div className="flex gap-1 items-center">
                        <img
                          src="/assets/images/ordertime.svg"
                          className="h-3"
                          alt=""
                        />
                        <p>{order_time}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-500 whitespace-nowrap">
                        Order Amount
                      </p>
                      <p>₹ {order_total}</p>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => {
                    setOrderDetail(!orderDetail);
                    setId(order_id);
                  }}
                  className="pl-4 md:pl-8 shrink-0 md:w-24 mt-4 cursor-pointer"
                >
                  <img src="/assets/images/rightarrow.svg" className="shrink-0 w-fit" alt="" />
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

const Completed = (props) => {
  return (
    <>
      {props.data?.map((values, index) => {
        return (
          <div key={index} className="flex justify-between  px-3 md:px-6 py-8 mt-5 border shadow-lg  rounded-lg w-full">
            <div className="md:px-8 flex gap-5 items-center ">
              <p className="font-bold">{values.order_id}</p>
              <p className="text-xs">{values.order_date}</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="/assets/images/right.svg" className="h-6" alt="" />
              <p className="capitalize">{values.order_status}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
