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
             Refund Policy
          </h1>
          <hr className="max-md:hidden  w-60 border-primary mt-4" />
          <p className=" lg:text-2xl  font-bold  max-md:hidden mt-3   ">
            HOME / REFUND POLICY
          </p>
          <img
            className="absolute -right-3 -bottom-3   max-md:hidden "
            src="assets/images/groupleaf.png"
          ></img>
        </div>

        <div className="px-6 md:px-12 xl:text-lg  lg:text-md text-justify   my-8 md:my-16  font-AVENIR font-medium space-y-4  md:mx-10 ">
          <h1 className="text-primary font-semibold md:font-medium text-2xl md:text-3xl">Returns / Exchange</h1>
          
            <p>
            We only provide an exchange for damaged products. To be eligible for exchange, the customer should contact the support within 48 hours from the date of the product received and provide the required billing details and images of the product damaged. The final decision to provide the exchange is under the discretion of the keeraikadai.com management.
            </p>
            
         
           

          <h1 className="text-primary font-semibold md:font-medium text-2xl md:text-3xl pt-4">
          Refunds (if applicable)
          </h1>
          
            <p>
            We only provide refunds to customers who have mistakenly made the order twice. In this case, the customer can contact us and claim a refund for the duplicate order placed within 48 hours.. The duplicate order must be within 12 hours and must contain the same products with the same quantity to qualify. The final decision to provide the refund is under the sole discretion of the keeraikadai.com management.
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
          

          <h1 className="text-primary font-semibold md:font-medium text-2xl md:text-3xl pt-4">
          Late or missing refunds (if applicable)
          </h1>

          <p>
          If any product has not been delivered due to logistical or any error from our end. We shall replace the order/product.
          </p>


          <h1 className="text-primary font-semibold md:font-medium text-2xl md:text-3xl pt-4">
          Shipping
          </h1>
          <p>Once we approve a product exchange for a damaged product. To return your product, you should mail your product to: KeeraiKadai ventures pvt ltd, Door no 374, Ward 7, 1st street paravai Main Road Paravai, Madurai 625402</p>
        </div>
      </section>
      {/* </div> */}
    </>
  );
};

export default ShippingPolicy;
