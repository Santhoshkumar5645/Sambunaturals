import React, {useEffect} from "react";
import ReactDOM from "react-dom";



const ShippingPolicy = () => {

  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}, [])


  return (
    <>
      <section className="">
      <div className="relative flex flex-col justify-center rounded-lg items-center mt-6 md:mt-3 mx-3 md:mx-auto bg-[#EDF6EA] md:w-[98%] h-44 md:h-80">
          <img
            className=" absolute  -left-3 -top-3 rotate-180 max-md:hidden  "
            src="assets/images/groupleaf.png"
          ></img>
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-primary font-semibold md:font-bold ">
             Shipping Policy
          </h1>
          <hr className="max-md:hidden  w-60 border-primary mt-4" />
          <p className=" lg:text-2xl  font-bold  max-md:hidden mt-3   ">
            HOME / SHIPPING POLICY
          </p>
          <img
            className="absolute -right-3 -bottom-3   max-md:hidden "
            src="assets/images/groupleaf.png"
          ></img>
        </div>

        <div className="px-6 md:px-12 xl:text-lg  lg:text-md text-justify   my-8 md:my-16  font-AVENIR font-medium space-y-4  md:mx-10 ">
          <h1 className="text-primary font-semibold md:font-medium text-2xl md:text-3xl">Returns</h1>
          <p className="space-y-2">
            <p>
              You have 7 calendar days to return an item from the date you
              received it.
            </p>
            <p>
              To be eligible for a return, your item must be unused and in the
              same condition that you received it.
            </p>
            <p>Your item must be in the original packaging.</p>
            Your item needs to have a receipt or proof of purchase.
          </p>
          <p className="">
            <p>For queries</p>
            Email
            <span class="underline underline-offset-8">: greenydip@gmail.com</span>
          </p>

          <h1 className="text-primary font-semibold md:font-medium text-2xl md:text-3xl py-4">
            Refunds
          </h1>
          <p className="space-y-2">
            <p>
              Once we receive your item, we will inspect it and notify you that
              we have received your returned item.
            </p>
            {/* <div class="lg:flex float-right ">
<img class="  sm:hidden md:hidden lg:hidden xl:hidden lg w-10  text-white float-right" src="assets/images/whatsup.png"
      alt="assets/images/whatsup.png"></img>
</div> */}
            <p>
              We will immediately notify you of the status of your refund after
              inspecting the item.
            </p>
            <p>
              If your return is approved, we will initiate a refund to your
              credit card (or original method of payment).
            </p>
            You will receive the credit within a 3-5 business day, depending on
            your card issuers’ policies.
          </p>

          <p className="py-4">For more information</p>
          <div className="">
            <p>Contact  <span className="ml-8">  : +91 9047750005 </span></p>
            <p>Whatsapp  <span className="ml-4"> : +91 9047750005 </span> </p>
           
              <p>Email     <span class="underline ml-14 underline-offset-8">: greenydip@gmail.com</span></p>
          </div>

          <h1 className="text-primary font-semibold md:font-medium text-2xl md:text-3xl py-4">
            Contact Us
          </h1>

          <p>
            If you have any other questions on how to return your item to us,
            Contact us.: +91 9047750005
          </p>
        </div>
      </section>
      {/* </div> */}
    </>
  );
};

export default ShippingPolicy;
