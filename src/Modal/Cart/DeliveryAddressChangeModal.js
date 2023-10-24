import React, { useState, useEffect } from "react";
import useFetchData from "../../CustomHooks/useFetchData";
import { NotificationService } from "../../Service/NotificationService";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LocalStorageService } from "../../Services/LocalStorageService";

const DeliveryAddressChangeModal = (props) => {
  const [addressData, setAddressData] = useState();

  const { loading, makeRequest } = useFetchData();

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()

  useEffect(() => {
    const userType = LocalStorageService.getItem('userType')
    if(userType === 'user'){
    getAddress();
  }
  }, []);

  const getAddress = async () => {
    const Response = await makeRequest("/user/address/manage", "post", {});
    if (Response.status) {
      setAddressData(Response.data.addresses);
    }
  };

  return (
    <>
      <div
        className={
          props.active
            ? "bg-black/30 z-50 fixed inset-0 flex justify-center items-center"
            : "hidden"
        }
      >
        <div
          className={
            props.active
              ? "bg-white  rounded-lg   w-[600px] h-auto max-md:py-6 md:h-[400px]     relative "
              : "hidden"
          }
        >
          <img
            onClick={props.Handler}
            className="right-1 top-1 absolute m-1  cursor-pointer"
            src="/assets/svg/close.svg"
            alt=""
          />

          <div className="flex px-5 md:px-12 lg:px-20  md:pt-20 justify-center items-start flex-col">
            {addressData &&
              addressData.map((values, index) => {
                return (
                  <Controller
                  key={index}
                    name="chooseAddress"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Please select one option" }}
                    render={({ field }) => (
                      <>
                        <div className="w-5/6 rounded-t-xl bg-white md:mx-10 flex items-center justify-between px-8 py-5 font-AVENIR  ">
                          <label
                            htmlFor={values.id}
                            className="flex gap-5 items-center "
                          >
                            <img
                              src={`/assets/svg/${values.type}.svg`}
                              className="h-7"
                              alt=""
                            />
                            <div>
                              <p className="text-lg font-semibold">
                                {values.type}
                              </p>
                              <p className="text-slate-500">
                                {values.full_address}
                              </p>
                            </div>
                          </label>
                          <input
                            id={values.id}
                            value={values.id}
                            {...field}
                            // disabled={values.title === "Pay with wallet" ? `₹ ${checkoutData && checkoutData.wallet_amount === 0 && NotificationService('Wallet is empty', 'success', 'top-right')}` : ''}
                            // {checkoutData && checkoutData.wallet_amount  === 0 && shouldDisableRadioButton}
                            onChange={() =>{
                              props.getAddress(values)
                              props.Handler()
                            } }
                            // values.title === "Pay with wallet" ? `₹ ${checkoutData && checkoutData.wallet_amount === 0 && NotificationService('Wallet is empty', 'success', 'top-right') : setPaymentType(values.id)}
                            type="radio"
                            className="accent-primary"
                          />
                        </div>
                       
                      </>
                    )}
                  />
                );
              })}
               <button onClick={()=>navigate('/profile')} className="text-white  md:mx-16 bg-primary py-2 px-6">
                          Add Address +
                        </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryAddressChangeModal;
