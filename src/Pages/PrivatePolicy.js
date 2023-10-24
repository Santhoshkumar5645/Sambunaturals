import React, {useEffect} from "react";
import ReactDOM from "react-dom";
const PrivatePolicy = () => {

  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}, [])

const paymentData  = [
  "Security:We are committed to ensure that your information is secure. In order to prevent unauthorized access or disclosure we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.",
  "Controlling your personal information: We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so.",
  "In case if you gave any queries do contact us on the details provided below:-",
 ]


  return (
    <>
 
      <section className="">
        <div className="relative flex flex-col justify-center rounded-lg items-center mt-6 md:mt-3 mx-3 md:mx-auto bg-[#EDF6EA] md:w-[98%] h-44 md:h-80">
          <img
            className=" absolute  -left-3 -top-3 rotate-180 max-md:hidden  "
            src="assets/images/groupleaf.png"
          ></img>
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-primary font-semibold md:font-bold ">
            Privacy Policy
          </h1>
          <hr className="max-md:hidden  w-60 border-primary  mt-3" />
          <p className=" lg:text-2xl font-bold  max-md:hidden  mt-3 ">
            HOME / PRIVACY POLICY
          </p>
          <img
            className="absolute -right-3 -bottom-3   max-md:hidden "
            src="assets/images/groupleaf.png"
          ></img>
        </div>
     
      <div className="px-6 md:px-12 xl:text-lg  lg:text-md  text-justify  my-8 md:my-10 font-AVENIR font-medium space-y-4  md:mx-10  ">

        {/* <div class="lg:flex float-right ">
          <img
            class="  sm:hidden  lg w-10  text-white float-right"
            src="assets/images/whatsup.png"
            alt="assets/images/whatsup.png"
          ></img>
        </div> */}
     
        {/* <h1 className="text-primary font-semibold md:font-normal text-2xl md:text-3xl ">
        Privacy & Policy
        </h1> */}

        <p>
        Sambu Oil is committed to ensure that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement?
        </p>

        {paymentData.map((values, index)=>{
  return   <div key={index} className="flex  gap-1">
     <img src="assets/images/termsarrow.png" className="lg:w-7 h-7 sm:w-3 "  alt="" />
     <p>{values}</p>
   </div>
})}
           <h1 className="text-primary font-semibold md:font-normal text-2xl md:text-3xl mt-8">
           Contact Information
        </h1>

        <p>  Ponmaran Illam <br />
101, Erode Main Road, Muthugoundanpudur, <br />
Salangapalayam P.O., <br />
Erode, Tamilnadu - 638 455.

</p>
      
      </div>

       </section>
    </>
  );
};

export default PrivatePolicy;
