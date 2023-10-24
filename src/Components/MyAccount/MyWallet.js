import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { LocalStorageService } from "../../Services/LocalStorageService";
import useFetchData from "../../CustomHooks/useFetchData";

const MyWallet = (props) => {
  const [initialAmount, setAmount] = useState("₹");
  const [walletData, setWalletData] = useState();
  const [apiKey, setApiKey] = useState();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const { loading, makeRequest } = useFetchData();

  useEffect(() => {
    getData();
  }, [props.data]);

  const getData = async () => {
    const userType = await LocalStorageService.getItem("userType");
    if (userType === "user") {
      walletHistory();
      getApiKey();
    }
  };

  const getApiKey = async () => {
    const Response = await makeRequest("/payment-apikey", "get", {});
    if (Response.status) {
      setApiKey(Response.data.apikey);
    }
  };

  const walletHistory = async () => {
    const Response = await makeRequest("/user/wallet/history", "post", {});
    if (Response.status) {
      setWalletData(Response.data);
    }
  };
  // Razorpay integration

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

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const modifiedString = initialAmount?.replace("₹", "");
    const payload = {
      wallet_amount: modifiedString,
    };
    const Response = await makeRequest(
      "/user/wallet/recharge",
      "post",
      payload
    );

    if (!Response) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id, currency } = Response.data.order;
    const { email, mobile_number, name } = Response.data.user;


    const options = {
      key: apiKey && apiKey, // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      // currency: currency,
      name: "KEERAIKADAI.COM",
      description: "Test Transaction",
      image: "",
      order_id: id,
      handler: async function (response) {

        const data = {
          // orderCreationId: order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        };

        const payload = data;

        const Response = await makeRequest(
          "/user/wallet/recharge/success",
          "post",
          payload
        );
        if (Response.status) {
          walletHistory();
          setAmount('')
          reset();
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

  return (
    <>
      <div className="w-full md:flex max-md:space-y-10">
        <div className="w-full md:w-7/12 px-5  md:border-r md:border-gray-500  ">
          <div className="flex justify-between">
            <div>
              <p className="text-xl font-semibold ">Your Transactions</p>
              <p className="font-semibold text-sm mt-1">
                For Every purchase your wallet balance will detect
              </p>
            </div>
            {/* <div className="bg-[#BAE5C82E] h-fit p-1">
            <img src="/assets/images/shopfiltericon.png" className="h-5 " alt="" />
          </div> */}
          </div>
          {walletData &&
            walletData.transaction_history.map((values, index) => {
              return <WalletHistory key={index} {...values} />;
            })}

          <hr className=" mt-2 " />
        </div>

        {/* Recharge  */}
        <div className="w-full h-fit md:w-5/12 md:ml-3 rounded-lg   shadow-xl py-5">
          <div className=" px-3 flex justify-between items-center">
            <div>
              <p className="text-sm pb-5">
                {walletData && walletData.user_name}
              </p>
              <p className="text-sm font-medium">Wallet Balance</p>
              <p className="font-semibold text-2xl">
                ₹ {walletData && walletData.wallet_balance}
              </p>
            </div>
            <div>
              <img src="/assets/images/logo.png" className="h-24" alt="" />
            </div>
          </div>
          <hr className="my-3  mt-8 mx-3" />

          {/* <form onSubmit={handleSubmit(displayRazorpay)} > */}
          <div className="pl-3 px-5">
            <input
              type="text"
              {...register("wallet_amount", { required: true })}
              value={initialAmount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-2 border  py-[8px] rounded-sm"
              placeholder="₹"
            />
          </div>

          <div className=" pl-4 py-5 px-5 mt-5 overflow-scroll lg:overflow-hidden flex gap-2 md:gap-4 w-full">
            <p
              onClick={() => setAmount(`₹${100}`)}
              className={`whitespace-nowrap ${
                initialAmount === `₹${100}` ? "bg-[#DEFFAA]" : "bg-[#EBEBEB]"
              } cursor-pointer  w-fit px-2 py-1`}
            >
              ₹ 100{" "}
            </p>
            <p
              onClick={() => setAmount(`₹${200}`)}
              className={`whitespace-nowrap ${
                initialAmount === `₹${200}` ? "bg-[#DEFFAA]" : "bg-[#EBEBEB]"
              }  cursor-pointer w-fit px-2 py-1`}
            >
              ₹ 200{" "}
            </p>
            <p
              onClick={() => setAmount(`₹${300}`)}
              className={`whitespace-nowrap ${
                initialAmount === `₹${300}` ? "bg-[#DEFFAA]" : "bg-[#EBEBEB]"
              } cursor-pointer  w-fit px-2 py-1`}
            >
              ₹ 300{" "}
            </p>
            <p
              onClick={() => setAmount(`₹${400}`)}
              className={`whitespace-nowrap ${
                initialAmount === `₹${400}` ? "bg-[#DEFFAA]" : "bg-[#EBEBEB]"
              } cursor-pointer  w-fit px-2 py-1`}
            >
              ₹ 400{" "}
            </p>
            <p
              onClick={() => setAmount(`₹${500}`)}
              className={`whitespace-nowrap ${
                initialAmount === `₹${500}` ? "bg-[#DEFFAA]" : "bg-[#EBEBEB]"
              } cursor-pointer  w-fit px-2 py-1`}
            >
              ₹ 500{" "}
            </p>
          </div>

          <div className="flex justify-end items-end  mt-3">
            <button
              onClick={displayRazorpay}
              className=" bg-gradient-to-tl from-[#86FD5D]  to-[#47B720] rounded-l-3xl py-2 px-5 text-white flex items-center gap-2"
            >
              Recharge{" "}
              <img src="/assets/svg/recharge.svg" className="h-4" alt="" />
            </button>
          </div>
          {/* </form> */}
        </div>
      </div>
    </>
  );
};

export default MyWallet;

const WalletHistory = (props) => {
  const { amount_text, transaction_date, transaction_time, unique_id, amount, status } =
    props;
  return (
    <div className="flex justify-between mt-8  items-center ">
      <div>
        <p className="font-semibold">{unique_id}</p>
        <p className="text-gray-500 text-xs">
          {transaction_date} | {transaction_time}
        </p>
      </div>
      <div className="flex items-center gap-3 text-lg">
        <p className={`${status === "Credit" ?'text-primary' : 'text-red-600'} text-lg` }><span className={`${status === "Credit" ?'text-primary' : 'text-red-600'}`}>{status === "Credit" ?  "+" : "-"}</span> ₹{amount} </p>
        {status === "Credit" ?  <img src="/assets/svg/upperarrow.svg"  className="h-3" alt="" /> :  <img src="/assets/svg/downarrow.svg"  className="h-3" alt="" />}
      </div>
    </div>
  );
};
