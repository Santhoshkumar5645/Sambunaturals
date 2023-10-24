import React, { useState } from "react";
import RatingModal from "./RatingModal";
import { useForm } from "react-hook-form";
import axios from "axios";
import { LocalStorageService } from "../../Services/LocalStorageService";
import useFetchData from "../../CustomHooks/useFetchData";
import { NotificationService } from "../../Service/NotificationService";

const AddLocationModal = (props) => {
  const [addressType, setAddressType] = useState("Home");
  const [saveSuccess, setSuccessSave] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [ratingModal, setRatingModal] = useState(false);

  const { loading, makeRequest } = useFetchData();

  const RatingModalHandler = () => {
    setRatingModal(!ratingModal);
  };

  const addLocation = async (data) => {
    const { full_address, house_number, house_floor, landmark, area, city, pincode } = data;

    const payload = {
      full_address: full_address,
      house_number: house_number,
      house_floor: house_floor,
      landmark: landmark,
      address_type: addressType,
      area: area,
      city: city,
      pincode: pincode
    };

    const Response = await makeRequest(
      "/user/address/add-new",
      "post",
      payload
    );
    if (Response.status) {
      setSuccessSave(Response.status);
      props.getAddressHandler();
      NotificationService(Response.message, "success", "top-center");
      props.Handler();
    }

    reset();
  };

  return (
    <>
      <div
        className={
          props.active
            ? "fixed z-50 bg-black/30 w-full inset-0 flex justify-center items-center"
            : "hidden"
        }
      >
        <div
          className={
            props.Handler
              ? "md:w-2/5 h-auto bg-white rounded-lg relative py-6 "
              : "hidden"
          }
        >
          <img
            onClick={() => {
              props.Handler();
              reset();
            }}
            className="right-3 top-3 absolute h-8 cursor-pointer"
            src="/assets/svg/close.svg"
            alt=""
          />
          <div className="px-8 space-y-2 ">
            {/* <div className='flex gap-3 '>
            <img src="/assets/svg/pin.svg" className='h-5' alt="" />
            <p className='font-semibold'>Avinashi</p>
            </div>
            <p>20, Sterling street, Coimbatore Road, Alagumalai, TamilNadu, India </p> */}
            <p className="font-semibold text-lg">Save us</p>
            <div className="flex gap-5">
              <p
                onClick={() => setAddressType("Home")}
                className={`${
                  addressType === "Home"
                    ? "bg-primary text-white py-2 px-4"
                    : "text-black py-2 px-4"
                }`}
              >
                Home
              </p>
              <p
                onClick={() => setAddressType("Office")}
                className={`${
                  addressType === "Office"
                    ? "bg-primary text-white py-2 px-4"
                    : "text-black py-2 px-4"
                }`}
              >
                Office
              </p>
              <p
                onClick={() => setAddressType("Others")}
                className={`${
                  addressType === "Others"
                    ? "bg-primary text-white py-2 px-4"
                    : "text-black py-2 px-4"
                }`}
              >
                Other
              </p>
            </div>
            <form onSubmit={handleSubmit(addLocation)}>
              <div className="md:flex w-full pt-2   items-center justify-center">
                <input
                  className="border w-full  max-md:mt-2  py-2 px-3 rounded-[4px] placeholder:text-sm"
                  type="text"
                  autoComplete="off"
                  name="address"
                  {...register("full_address", { required: true })}
                  id="address"
                  placeholder="Full Address"
                />
              </div>
              {errors.full_address && (
                <span style={{ color: "red", fontSize: 10 }}>
                  {"address  required *"}
                </span>
              )}
              <div className="md:flex w-full pt-2   items-center justify-center">
                <input
                  className="border w-full  max-md:mt-2  py-2 px-3 rounded-[4px] placeholder:text-sm"
                  type="text"
                  autoComplete="off"
                  name="flatno"
                  {...register("house_number", { required: true })}
                  id="flatno"
                  placeholder="House/Flat/Block No"
                />
              </div>
              {errors.house_number && (
                <span style={{ color: "red", fontSize: 10 }}>
                  {"House/Flat/Block No required *"}
                </span>
              )}

              <div className="md:flex w-full pt-2   items-center justify-center">
                <input
                  className="border w-full  max-md:mt-2  py-2 px-3 rounded-[4px] placeholder:text-sm"
                  type="text"
                  autoComplete="off"
                  name="floor"
                  {...register("house_floor", { required: true })}
                  id="floor"
                  placeholder="Floor"
                />
              </div>
              {errors.house_floor && (
                <span style={{ color: "red", fontSize: 10 }}>
                  {"floor No required *"}
                </span>
              )}

              <div className="md:flex w-full pt-2   items-center justify-center">
                <input
                  className="border w-full  max-md:mt-2  py-2 px-3 rounded-[4px] placeholder:text-sm"
                  type="text"
                  autoComplete="off"
                  name="landmark"
                  {...register("landmark", { required: true })}
                  id="landmark"
                  placeholder="Landmark"
                />
              </div>
              {errors.landmark && (
                <span style={{ color: "red", fontSize: 10 }}>
                  {"Landmark required *"}
                </span>
              )}
              <div className="md:flex w-full pt-2   items-center justify-center">
                <input
                  className="border w-full  max-md:mt-2  py-2 px-3 rounded-[4px] placeholder:text-sm"
                  type="text"
                  autoComplete="off"
                  name="area"
                  {...register("area", { required: true })}
                  id="area"
                  placeholder="Area"
                />
              </div>
              {errors.landmark && (
                <span style={{ color: "red", fontSize: 10 }}>
                  {"Area required *"}
                </span>
              )}

              <div className="md:flex w-full pt-2   items-center justify-center">
                <input
                  className="border w-full  max-md:mt-2  py-2 px-3 rounded-[4px] placeholder:text-sm"
                  type="text"
                  autoComplete="off"
                  name="city"
                  {...register("city", { required: true })}
                  id="city"
                  placeholder="City"
                />
              </div>
              {errors.landmark && (
                <span style={{ color: "red", fontSize: 10 }}>
                  {"City required *"}
                </span>
              )}
               <div className="md:flex w-full pt-2   items-center justify-center">
                <input
                  className="border w-full  max-md:mt-2  py-2 px-3 rounded-[4px] placeholder:text-sm"
                  type="text"
                  autoComplete="off"
                  name="pincode"
                  {...register("pincode", { required: true })}
                  id="pincode"
                  placeholder="Pincode"
                />
              </div>
              {errors.landmark && (
                <span style={{ color: "red", fontSize: 10 }}>
                  {"Pincode required *"}
                </span>
              )}
              <div onClick={() => saveSuccess && props.Handler}>
                
                <button className="bg-primary mt-3 text-white py-2 w-full">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <RatingModal active={ratingModal} Handler={RatingModalHandler} />
    </>
  );
};

export default AddLocationModal;
