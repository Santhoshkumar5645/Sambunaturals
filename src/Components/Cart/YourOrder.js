import React, { useEffect, useState } from "react";
import PickupPointModal from "../../Modal/PickupPointModal";
import { useForm, Controller } from "react-hook-form";
import { LocalStorageService } from "../../Services/LocalStorageService";
import useFetchData from "../../CustomHooks/useFetchData";
import Coupon from "./Coupon";
import SelectCityAreaModal from "../../Modal/SelectCityAreaModal";
import { useContext } from "react";
import { CartContext } from "../../Contextapi/AppContext";
import { NotificationService } from "../../Service/NotificationService";
import DeliveryAddressChangeModal from "../../Modal/Cart/DeliveryAddressChangeModal";
import WelcomeModal from "../../Modal/Login/WelcomeModal";

const YourOrder = (props) => {
  const [selectCityAreaModal, setSelectCityAreaModal] = useState(false);
  // COUPON SECTION
  const [couponModal, setCouponModal] = useState(false);
  const [coupon, setCoupon] = useState();
  const [selectedCoupon, setSelectedCoupon] = useState("");

  // DELIVERY ADDRESS
  const [chooseAddressModal, setChooseAddressModal] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState();

  const [slot, setSlot] = useState();
  const [checkoutData, setCheckoutdata] = useState();
  const [product, setProduct] = useState();
  const [radio, setRadio] = useState();
  const [paymentType, setPaymentType] = useState();
  const [dcId, setDcId] = useState();
  const [deliveryMethod, setDeliveryMethod] = useState();
  const [date, setDate] = useState();
  const [checkDate, setCheckDate] = useState();

  const [time, settime] = useState();
  const [placeOrderData, setPlaceOrderData] = useState();
  const [apiKey, setApiKey] = useState();
  const [welcomeModal, setWelcomeModal] = useState(false);
  // newly added
  const [apartmentUser, setApartmentUser] = useState(false);
  const [doorNumber, setDoorNumber] = useState();
  const [floor, setFloor] = useState();
  const [block, setBlock] = useState();

  const WelcomeModalHandler = () => {
    setWelcomeModal(!welcomeModal);
  };

  const getAddress = (data) => {
    setDeliveryAddress(data);
  };

  const selectCityAreaModalHandler = () => {
    setSelectCityAreaModal(!selectCityAreaModal);
  };
  const CouponModalHandler = () => {
    setCouponModal(!couponModal);
  };

  const ChooseAddressModalHandler = () => {
    setChooseAddressModal(!chooseAddressModal);
  };

  const { SetCartData, CartData } = useContext(CartContext);

  const { loading, makeRequest } = useFetchData();

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const userType = LocalStorageService.getItem("userType");
    if (userType === "user") {
      checkout();
    }
  }, [CartData, selectedCoupon]);

  useEffect(() => {
    getApiKey();

    const userType = LocalStorageService.getItem("userType");
    if (userType === "guest" || !userType) {
      setWelcomeModal(true);
    } else {
      setWelcomeModal(false);
    }
  }, []);

  const OutofStockCheck = async (dat) => {
    const cart = LocalStorageService.getItem("new_cart");
    const array1 = cart;
    const array2 = dat;

    const commonItems = array2
      ? array1.filter(
          (item1) =>
            !array2.some(
              (item2) =>
                item1.attribute_id === item2.attribute_id &&
                item1.id === item2.id
            )
        )
      : array1.slice();
    // console.log(commonItems.length, "sorted", array1.length, "from cart");
    if (commonItems.length !== array1.length) {
      LocalStorageService.setItem("new_cart", commonItems);
      SetCartData(commonItems);
    }
  };

  const checkout = async (couponDT) => {
    const distribution_center_id = await LocalStorageService.getItem(
      "Distribution_id"
    );
    const cart = await LocalStorageService.getItem("new_cart");
    let coupon = "";
    if (selectedCoupon.length !== 0) {
      coupon = selectedCoupon;
    }
    const payload = {
      distribution_center_id:
        distribution_center_id === null
          ? "40586698a2a70120f52082d0495726e97b23b54cbabb226e99f336bbb893db07c565aa6292a353008e8eb9"
          : distribution_center_id,
      coupon_id: coupon,
      products: cart?.map((values) => {
        return {
          id: values.id,
          attribute_id: values.attribute_id,
          quantity: values.count,
          price: values.price,
        };
      }),
    };
    setProduct(cart);

    const Response = await makeRequest("/user/order/checkout", "post", payload);
    if (Response.status) {
      if (Response.data.greens_flag) {
        setDeliveryMethod(Response.data.delivery_types[0].id);
      }
      setCheckoutdata(Response.data);
      OutofStockCheck(Response.data.cart_remove_products);
      if (Response.data.pickup_location === null) {
        selectCityAreaModalHandler();
      } else {
        dateTimeSlot(Response.data?.pickup_location?.id);
        setDcId(Response.data.pickup_location.id);
      }
    }
  };

  const dateTimeSlot = async (locationId) => {
    const distribution_center_id = locationId;
    const payload = {
      distribution_center_id: distribution_center_id,
    };
    const Response = await makeRequest(
      "/distribution-center/delivery-slots",
      "post",
      payload
    );
    if (Response.status) {
      setSlot(Response.data);
    }
  };

  function formatDate(date) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  }

  // INFO Coupooun Section
  useEffect(() => {
    if (couponModal) {
      couponData();
    }
  }, [couponModal]);

  const couponData = async () => {
    const id = LocalStorageService.getItem("Distribution_id");
    const payload = {
      distribution_center_id:
        id === null
          ? "40586698a2a70120f52082d0495726e97b23b54cbabb226e99f336bbb893db07c565aa6292a353008e8eb9"
          : id,
    };

    const Response = await makeRequest("/user/coupons", "post", payload);
    if (Response.status) {
      setCoupon(Response.data.coupons);
    }
  };

  const CouponHandler = async (couponId) => {
    const id = LocalStorageService.getItem("Distribution_id");
    const payload = {
      distribution_center_id:
        id === null
          ? "40586698a2a70120f52082d0495726e97b23b54cbabb226e99f336bbb893db07c565aa6292a353008e8eb9"
          : id,
      coupon: couponId,
      order_value: checkoutData && checkoutData.cart_summary.order_value.value,
    };

    const Response = await makeRequest(
      "/user/order/apply-coupon",
      "post",
      payload
    );
    if (Response.status) {
      setSelectedCoupon(Response.data?.coupon?.id);

      NotificationService(Response.message, "success", "top-right");
      setCouponModal(false);
      // checkout(couponId);
    }
  };

  const getApiKey = async () => {
    const Response = await makeRequest("/payment-apikey", "get", {});
    if (Response.status) {
      setApiKey(Response.data.apikey);
    }
  };

  // apartmentUser && NotificationService('Please provide floor number', 'error', 'top-right')
  const placeOrder = async () => {
    const cart = await LocalStorageService.getItem("new_cart");

    const payload = {
      distribution_center_id: dcId && dcId,
      coupon_id: "",
      address_id: deliveryAddress ? deliveryAddress?.id : "",
      delivery_type: deliveryMethod && deliveryMethod,
      delivery_date: date ? date : "",
      delivery_slot: time ? time : "",
      platform: "web",
      wallet_amount: checkoutData && checkoutData.wallet_amount,
      payment_method_id: paymentType && paymentType,
      appartment_user: apartmentUser.toString(),
      appartment_door_number: doorNumber ? doorNumber : "",
      appartment_floor_number: floor ? floor : "",
      appartment_block_number: block ? block : "",
      products: cart.map((values) => {
        return {
          id: values.id,
          attribute_id: values.attribute_id,
          quantity: values.count,
          price: values.price,
        };
      }),
    };

    const Response = await makeRequest("/user/place-order", "post", payload);
    if (Response.status) {
      setPlaceOrderData(Response.data);
      const responseData = Response.data;
      if (Response.message === "Order placed") {
        NotificationService(Response.message, "success", "top-right");
        SetCartData([]);
        LocalStorageService.setItem("new_cart", []);
      } else {
        displayRazorpay(responseData);
      }
    }
  };

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay(data_construct) {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    console.log(placeOrderData);
    const { amount, id, currency } = data_construct?.order;
    const { email, mobile_number, name } = data_construct?.user;

    const options = {
      key: apiKey && apiKey, // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      // currency: currency,
      name: "KEERAIKADAI.COM",
      description: "Test Transaction",
      image: "",
      order_id: id,
      handler: async function (response) {
        console.log(response);
        const data = {
          // orderCreationId: order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        };

        const payload = data;

        const Response = await makeRequest(
          "/user/place-order/online-payment/verify",
          "post",
          payload
        );
        if (Response.status) {
          NotificationService(Response.message, "success", "top-right");
          SetCartData([]);
          LocalStorageService.setItem("new_cart", []);

          // checkout()
        }
      },
      prefill: {
        name: name,
        email: email,
        contact: mobile_number,
      },
      notes: {
        address: "Soumya Dey Corporate Office",
      },
      theme: {
        color: "#65a30d",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  let Total = checkoutData && checkoutData.cart_summary?.delivery_charge?.value;

  return (
    <>
      <div className="w-full md:border md:bg-[#DDDDDD45] rounded-lg md:pb-10 md:mb-10 font-AVENIR">
        <p className="text-xl font-bold text-center uppercase my-5  max-md:hidden">
          Your Order
        </p>

        {/*payment details  */}
        <div className="flex flex-col justify-between rounded-xl  bg-white mx-5 md:mx-10 text-sm md:px-8 py-4 ">
          <div className="flex flex-col">
            <div className="space-y-1 flex justify-between">
              <p className="mb-4 font-semibold text-lg">PRODUCT</p>
              <p className="mb-4 text-lg font-semibold">SUBTOTAL</p>
            </div>
            {product &&
              product.map((values, index) => {
                Total += values.price * values.count;

                return (
                  <div
                    key={index}
                    className="flex items-center  justify-between"
                  >
                    <p className="pr-5 mt-2">
                      {values.name} X {values.count}
                    </p>

                    <p className=" mr-7  text-primary">
                      {values.price * values.count}
                    </p>
                  </div>
                );
              })}
            {checkoutData &&
              checkoutData.cart_summary?.delivery_charge?.value !== 0 && (
                <div className="flex mt-4 justify-between">
                  <p>Delivery Charge</p>
                  <p className="mr-7 text-primary">
                    {checkoutData &&
                      checkoutData.cart_summary?.delivery_charge?.value}
                  </p>
                </div>
              )}
          </div>
          <hr className="mt-5 mb-3" />
          <div className="flex justify-end space-x-10 items-center mr-5">
            <p className="text-lg">Total</p>
            <p className="text-primary text-lg">
              {Total === checkoutData?.cart_summary?.order_value?.value
                ? checkoutData && checkoutData?.cart_summary?.order_value?.value
                : Total}
            </p>
          </div>
        </div>

        {/* Apply coupon  */}
        <div className="bg-primary mt-5 flex justify-between  md:mx-10 py-3 md:py-2 px-3   font-AVENIR">
          <div className="flex gap-2 items-center">
            <img src="/assets/svg/coupon.svg" className="h-6" alt="" />
            <p className="text-white text-sm">Add coupon for discount</p>
          </div>
          <div
            onClick={CouponModalHandler}
            className="bg-white rounded-sm cursor-pointer text-[10px] pt-[4px] text-primary px-2"
          >
            Apply
          </div>
        </div>

        {/* select delivery type  */}
        {checkoutData && checkoutData.greens_flag
          ? checkoutData?.delivery_types.map((values, index) => {
              <div key={index}>{() => setDeliveryMethod(values.id)}</div>;
            })
          : checkoutData &&
            checkoutData.delivery_types.map((values, index) => {
              return (
                <>
                  <Controller
                    key={index}
                    name="radioOption"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Please select one option" }}
                    render={({ field }) => (
                      <>
                        <label
                          htmlFor={values.id}
                          className=" mt-5 rounded-t-xl bg-white md:mx-10 flex items-center justify-between px-8 py-5 font-AVENIR"
                        >
                          <div className="flex items-center gap-3">
                            {values.title === "Door Delivery" ? (
                              <img
                                src="/assets/svg/door.svg"
                                className=""
                                alt=""
                              />
                            ) : (
                              <img
                                src="/assets/svg/store.svg"
                                className=""
                                alt=""
                              />
                            )}
                            <div className="">
                              <p className="text-[15px]">
                                {values.title ===
                                "Pickup From Store / Apartment"
                                  ? "Select Delivery Point"
                                  : values.title}
                              </p>
                              <p className="text-xs">
                                {" "}
                                {values.title === "Door Delivery"
                                  ? "( Delivery within 2 or 3 working days )"
                                  : ""}
                              </p>
                            </div>
                          </div>

                          <input
                            id={values.id}
                            value={values.id}
                            {...field}
                            onChange={() => {
                              setRadio(values.key);
                              setDeliveryMethod(values.id);
                            }}
                            type="radio"
                            className="accent-primary w-4 h-4"
                          />
                        </label>
                      </>
                    )}
                  />
                </>
              );
            })}

        {/* Pickup location  */}
        {radio === 1 || (checkoutData && checkoutData.greens_flag) ? (
          <>
            <div className="flex flex-col space-y-3 mt-5 rounded-xl bg-white mx-5 md:mx-10 text-sm md:px-8 md:py-4">
              <p className="text-lg font-bold ">
                Delivery Location
                <span
                  onClick={selectCityAreaModalHandler}
                  className="text-sm cursor-pointer ml-2 text-primary font-normal"
                >
                  Change
                </span>{" "}
              </p>
              <div className="space-y-2 md:space-y-1">
                <p>City</p>
                <p className="font-bold text-[15px]">
                  {checkoutData && checkoutData?.pickup_location?.city}
                </p>
              </div>
              <div className="space-y-2 md:space-y-1">
                <p>Area</p>
                <p className="font-bold text-[15px]">
                  {checkoutData && checkoutData?.pickup_location?.area}
                </p>
              </div>
              <div className="space-y-2 md:space-y-1">
                <p>Delivery Point</p>
                <p className="font-bold text-[15px]">
                  {checkoutData && checkoutData?.pickup_location?.address}
                </p>
              </div>
            </div>

            {/* Select date  */}
            <div className=" space-y-3 mt-5 rounded-t-xl  mx-3 md:mx-10 text-sm relative">
              <p className="text-sm font-semibold">
                Shipment Delivery Charges :
                <span className="text-primary"> Free</span>
              </p>
              <select
                {...register("date_slots")}
                name="city"
                className="w-full   py-2  px-8 rounded-md placeholder:text-sm   text-sm"
                onChange={(event) => setDate(event.target.value)}
              >
                <option selected disabled>
                  Select Date
                </option>
                {checkoutData &&
                  checkoutData?.pickup_location?.id &&
                  slot &&
                  slot.map((values, index) => {
                    return (
                      <option
                        key={index}
                        className="accent-primary"
                        value={values.delivery_date}
                      >
                        {formatDate(values.delivery_date)}
                      </option>
                    );
                  })}
              </select>
              {errors.date_slots && (
                <span style={{ color: "red", fontSize: 10 }}>
                  {"date_slots required *"}
                </span>
              )}

              <img
                src="/assets/svg/timer.svg"
                className="absolute top-[30px] h-4 left-3"
                alt=""
              />
            </div>

            {/* Slot  */}
            {date && (
              <div className="flex items-center gap-2 mt-5 rounded-t-xl  mx-3 md:mx-10 text-sm">
                <p className="font-semibold">Slot</p>
                {slot &&
                  slot.map((values, index) => {
                    return (
                      <div className="flex items-center  gap-4" key={index}>
                        {" "}
                        {date === values.delivery_date &&
                          values.time_slots?.map((item, index) => {
                            return (
                              <SlotTime
                                key={index}
                                {...item}
                                setTimeHandler={settime}
                              />
                            );
                          })}
                      </div>
                    );
                  })}

                {/* <SlotTime /> */}
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col space-y-3  rounded-xl mx-5 md:mx-10 text-sm  mt-3">
            <div className="">
              <p className="text-md font-bold ">
                Delivery Address
                <span
                  onClick={ChooseAddressModalHandler}
                  className="text-xs ml-3 cursor-pointer text-primary font-normal"
                >
                  Change
                </span>{" "}
              </p>
            </div>
            {deliveryAddress ? (
              <div className=" mt-5 rounded-t-xl bg-white  flex flex-col items-left space-y-2 justify-left px-8 py-5 font-AVENIR  ">
                <div className="flex gap-5 items-center ">
                  <img
                    src="/assets/svg/addresspin.svg"
                    className="h-7"
                    alt=""
                  />
                  <div>
                    <p className="text-lg font-semibold">
                      {deliveryAddress?.type}
                    </p>
                    <p className="text-slate-500">
                      {deliveryAddress?.full_address}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        )}

        {radio === 1 ||
          (checkoutData && checkoutData.greens_flag && (
            <Controller
              key=""
              name="apartmentUser"
              control={control}
              defaultValue=""
              rules={{ required: "Please select one option" }}
              render={({ field }) => (
                <>
                  <label
                    htmlFor="apartment"
                    className=" mt-5 rounded-t-xl bg-white md:mx-10 flex items-center justify-between px-8 py-5 font-AVENIR"
                  >
                    <div className="flex items-center gap-3">
                      <p className="text-[15px]">I am an Apartment User</p>
                    </div>
                    <input
                      id="apartment"
                      value={apartmentUser}
                      {...field}
                      onChange={() => {
                        setApartmentUser(true);
                      }}
                      type="radio"
                      className="accent-primary"
                    />
                  </label>
                </>
              )}
            />
          ))}

        {apartmentUser ? (
          <div className="py-5 space-y-5 mx-5 md:mx-10">
            <p className=" text-sm text-primary ">
              ( Please select the following details for Doorstep Delivery )
            </p>

            <input
              type="text"
              value={doorNumber}
              onChange={(e) => setDoorNumber(e.target.value)}
              className="py-2 px-3 text-sm placeholder:text-sm outline-none border bg-white rounded-md w-full"
              placeholder="Door Number - For Ex: 111A "
            />
            <input
              type="text"
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
              className="py-2 px-3 text-sm placeholder:text-sm outline-none border bg-white rounded-md w-full"
              placeholder="Floor - For Ex: 10 or 10A"
            />
            <input
              type="text"
              value={block}
              onChange={(e) => setBlock(e.target.value)}
              className="py-2 px-3 text-sm placeholder:text-sm outline-none border rounded-md bg-white w-full"
              placeholder="Block - For Ex: 1 or A Block or 1B"
            />
          </div>
        ) : (
          ""
        )}

        <div className="flex justify-around items-center space-y-3 mt-5 rounded-t-xl bg-white mx-3 md:mx-10 text-sm px-8 pb-3 max-md:hidden">
          <img src="/assets/svg/customercare.svg" className="h-16" alt="" />
          <p className="text-primary bg-[#C2FF631F] py-3 px-10 mx-5 font-AVENIR text-[15px]">
            Order before 10.00 AM for next day delivery of Farm Fresh Greens &
            Veggies. <br />
            Contact : +91 90477 50005
          </p>
        </div>

        {/* payment method */}
        <p className="mx-5 md:mx-10 pt-5 font-bold  text-primary">Payments</p>

        {checkoutData &&
          checkoutData.payment_methods.map((values, index) => {
            return (
              <>
                <Controller
                  key={index}
                  name="paymentOption"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Please select one option" }}
                  render={({ field }) => (
                    <>
                      {/* <div  className=" mt-5 rounded-t-xl bg-white md:mx-10 flex items-center justify-between px-8 py-5 font-AVENIR  "> */}
                      <label
                        htmlFor={values.id}
                        className=" mt-5 rounded-t-xl bg-white md:mx-10 flex items-center justify-between px-8 py-5 font-AVENIR"
                      >
                        <div className="flex items-center gap-3">
                          {values.title === "Pay with wallet" ? (
                            <img
                              src="/assets/svg/wallet.svg"
                              className="h-6"
                              alt=""
                            />
                          ) : (
                            <img
                              src="/assets/svg/razorpay.svg"
                              className="h-6"
                              alt=""
                            />
                          )}
                          <p className="text-[15px]">
                            {values.title}
                            <span className="text-primary text-xl ml-2">
                              {" "}
                              {values.title === "Pay with wallet"
                                ? `₹ ${
                                    checkoutData && checkoutData.wallet_amount
                                  }`
                                : ""}
                            </span>{" "}
                          </p>
                        </div>
                        <input
                          id={values.id}
                          value={values.id}
                          {...field}
                          // disabled={values.title === "Pay with wallet" ? `₹ ${checkoutData && checkoutData.wallet_amount === 0 }` : ''}
                          disabled={
                            values.title === "Pay with wallet" &&
                            checkoutData &&
                            checkoutData.wallet_amount === 0
                          }
                          // {checkoutData && checkoutData.wallet_amount  === 0 && shouldDisableRadioButton}
                          onChange={() => {
                            // values.title === "Pay with wallet"
                            //   ? checkoutData &&
                            //     checkoutData.wallet_amount === 0 &&
                            //     NotificationService(
                            //       "Wallet is empty",
                            //       "error",
                            //       "top-right"
                            //     )
                            //   :
                            setPaymentType(values.id);
                          }}
                          // values.title === "Pay with wallet" ? `₹ ${checkoutData && checkoutData.wallet_amount === 0 && NotificationService('Wallet is empty', 'success', 'top-right') : setPaymentType(values.id)}
                          type="radio"
                          className="accent-primary"
                        />
                      </label>

                      {/* <input type="radio" className="accent-primary" name="" id="delivery" /> */}
                      {/* </div> */}
                    </>
                  )}
                />
              </>
            );
          })}

        <hr className="my-4 mx-5 md:mx-10 max-md:hidden" />
        <p className="text-[15px] px-10 font-AVENIR max-md:hidden">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>
        <div className="mx-5 md:mx-10 font-AVENIR my-5">
          <button
            disabled={loading}
            onClick={() => {
              if (apartmentUser) {
                if(!doorNumber || !floor || !block){
                if (!doorNumber) {
                  NotificationService(
                    "Please provide door number",
                    "error",
                    "top-right"
                  );
                }
                if (!floor) {
                  NotificationService(
                    "Please provide floor number",
                    "error",
                    "top-right"
                  );
                }
                if (!block) {
                  NotificationService(
                    "Please provide block ",
                    "error",
                    "top-right"
                  );
                }
               }else {
                  placeOrder();
                }
              } else {
                placeOrder();
              }
            }}
            className="w-full rounded-sm text-[15px]  bg-primary text-white uppercase py-3 md:py-2 disabled:opacity-70"
          >
            {loading ? "loading..." : "place order"}
          </button>
        </div>
      </div>

      <SelectCityAreaModal
        checkout={checkout}
        active={selectCityAreaModal}
        Handler={selectCityAreaModalHandler}
      />
      <DeliveryAddressChangeModal
        active={chooseAddressModal}
        Handler={ChooseAddressModalHandler}
        getAddress={getAddress}
      />
      <Coupon
        active={couponModal}
        Handler={CouponModalHandler}
        C_DATA={coupon}
        couponSubmit={CouponHandler}
      />
      <WelcomeModal
        checkout={checkout}
        from="cart"
        active={welcomeModal}
        Handler={WelcomeModalHandler}
      />
    </>
  );
};

export default YourOrder;

const SlotTime = (props) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const { time, title, setTimeHandler } = props;

  return (
    <>
      <div className="text-sm  rounded-sm font-semibold  flex items-center gap-2 w-fit   ">
        <Controller
          name="timeSlot"
          control={control}
          defaultValue=""
          rules={{ required: "Please select one option" }}
          render={({ field }) => (
            <>
              <div className="flex items-center gap-4 font-AVENIR  ">
                <input
                  id={title}
                  value={time}
                  {...field}
                  onChange={() => setTimeHandler(time)}
                  type="radio"
                  className="accent-primary w-5 h-5"
                />
                <label htmlFor={title} className="flex items-center gap-3">
                  <div className="">
                    <p className="text-[15px]">{title}</p>
                    <p className="text-[10px]">({time})</p>
                  </div>
                </label>
              </div>
            </>
          )}
        />
      </div>
    </>
  );
};
