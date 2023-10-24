import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import useFetchData from "../CustomHooks/useFetchData";

const PickupPointModal = (props) => {
  const [pickupSlotData, setPickupSlotData] = useState();
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { loading, makeRequest } = useFetchData();

  useEffect(() => {
    // storeAddressData()
  }, [props.id]);


  const storeAddressData = async () => {
    const payload = {
      distribution_center_id: props.id,
    };
    const Response = await makeRequest(
      "/user/distribution-center/store",
      "post",
      payload
    );
    if (Response.status) {
      props.Handler();
      props.checkout();
      reset()
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
              ? "bg-white  rounded-lg  w-auto md:py-10  lg:w-4/6   h-auto   relative "
              : "hidden"
          }
        >
          <img
            onClick={props.Handler}
            className="right-1 top-1 absolute m-1  cursor-pointer"
            src="/assets/svg/close.svg"
            alt=""
          />
          <div className="flex items-center justify-center">
            <img src="/assets/images/phonelottie.png" className="h-28" alt="" />
          </div>
          <div className="md:bg-[#D9D9D938] md:mx-12 lg:mx-20 xl:mx-40 rounded-lg">
            <div className="flex flex-col max-sm:space-y-2  py-5 px-5 mb-3 md:px-10 lg:px-20 ">
              {/* </form> */}
              <form onSubmit={handleSubmit(storeAddressData)}>
                <p className="text-left mt-2 text-sm">Choose Delivery Points</p>
                <div className="bg-white p-3 rounded-md my-3">
                  {props.data &&
                    props.data.map((values, index) => {
                      return (
                        <>
                          <div key={index} className="flex  gap-3">
                            <input
                              {...register("sun")}
                              type="radio"
                              name="weather"
                              className="accent-primary"
                              value="sun"
                              id="field-sun"
                            />
                            <label
                              htmlFor="field-sun"
                              className="text-xs space-y-1 my-2"
                            >
                              <p className="font-bold">{values.name}</p>
                              <p>{values.address}</p>
                              <p className="text-red-500 text-[10px]">
                                <span className="text-black">
                                  {" "}
                                  Available on :
                                </span>{" "}
                                {values.delivery_days}
                              </p>
                            </label>
                          </div>
                        </>
                      );
                    })}
                </div>

                <button className="w-full  py-2 text-white rounded-md bg-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PickupPointModal;

const PickDate = () => {
  return (
    <>
      <div className="text-[10px] bg-primary rounded-sm text-white w-fit px-2 py-1">
        <p className="text-center text-[14px]">23</p>
        <p>May</p>
      </div>
    </>
  );
};

const SlotTime = () => {
  return (
    <>
      <div className="text-[10px] bg-primary rounded-sm text-white w-fit px-2 mt-1 py-1">
        <p className="text-center">Morning</p>
        <p>(6.00 AM- 9.00 Am)</p>
      </div>
    </>
  );
};
