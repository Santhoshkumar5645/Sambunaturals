import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Map from "../Components/Contact/Map";
import { ScrolltoTop } from "../Utility";
import useFetchData from "../CustomHooks/useFetchData";
import { useForm, Controller } from "react-hook-form";
import { NotificationService } from "../Service/NotificationService";

const Contact = () => {
   const [info, setInfo] = useState()
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
   ScrolltoTop()
   contactInfo()

  }, [])
   
  const contactInfo =async () =>{
    const Response = await makeRequest('/contact-us/get-basic-info', 'post', {})
    if(Response.status){
          setInfo(Response.data)
    }

  }
  

  const onSubmit = async (data) => {
   
   const payload = data
  
    const Response = await makeRequest('/contact-us/insert-contact-info', 'post', payload)
    reset()
    NotificationService(Response.message, 'success', 'top-right')
    if(Response.states){
     
      
      
    }
  }

  return (
    <>
      <section>
        <div className="w-[98%] bg-[#EDF6EA] max-md:hidden h-auto py-10  md:px-6 lg:px-10 mx-auto shrink-0 flex items-center justify-center  rounded-lg mt-3 ">
          <div className="space-y-4">
            <p className="text-primary font-semibold md:text-5xl xl:text-6xl ">
              Get in Touch
            </p>
            <p className="ml-2 text-md lg:text-lg text-slate-700">
              we are always available for our reliable customers,be free to
              contact
            </p>
          </div>
          <div className="flex justify-end relative shrink-0">
            <img
              src="/assets/images/contactus-globe.png"
              alt=""
              className=" md:w-4/6 "
            />
            <img
              src="/assets/images/globe1.png"
              alt=""
              className="h-20 absolute -top-8  right-28 rotate rotate-animation"
            />
            <img
              src="/assets/images/globe2.png"
              alt=""
              className="h-20 absolute  top-12 -right-5 rotate rotate-animation"
            />
            <img
              src="/assets/images/globe3.png"
              alt=""
              className="h-20 absolute   bottom-8 rotate rotate-animation"
            />
            <img
              src="/assets/images/globe4.png"
              alt=""
              className="h-20 absolute  -bottom-8 right-36 rotate rotate-animation "
            />
            <img
              src="/assets/images/globe5.png"
              alt=""
              className="h-20 absolute   bottom-16 left-32 rotate rotate-animation"
            />
            <img
              src="/assets/images/globe6.png"
              alt=""
              className="h-20 absolute   left-36 top-10 rotate rotate-animation"
            />
          </div>
        </div>

        <div className="flex gap-8 w-[98%] mx-auto mt-5 max-md:flex-col max-md:px-5">
          {/* input box  */}
          <p className="text-2xl tracking-wide font-semibold text-center md:hidden">Contact <span className="text-primary">us</span> </p>

          <div className="lg:w-1/2 md:w-2/4  max-md:px-6 max-md:rounded-lg max-md:shadow-xl">
            <div className="flex max-md:hidden">
              <p className="uppercase font-semibold shrink-0 text-2xl">send us email</p>
              <hr className="w-52 ml-3 mt-6" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
            <div className="flex flex-wrap max-md:flex-col mt-5">
              <div className="p-2 2/2 md:w-1/2">
                <div className="space-y-2">
                  <label htmlFor="name" className=" text-md text-gray-500">
                    Your Name
                  </label>
                  <input
                    className="border w-full mt-2 max-md:mt-2 py-[9px] px-3 rounded-[4px] placeholder:text-sm"
                    type="text"
                    autoComplete="off"
                    name="name"
                    {...register("name", { required: true })}
                    id="name"
                    // placeholder="santhosh@gamil.com"
                  />
                  {errors.name && (
                    <span style={{ color: "red", fontSize: 10 }}>
                      {"Name required *"}
                    </span>
                  )}
                </div>
              </div>
              <div className="p-2 2/2 md:w-1/2">
                <div className="space-y-2">
                  <label htmlFor="email" className=" text-md text-gray-500">
                    Your Email
                  </label>
                  <input
                    className="border w-full mt-2 max-md:mt-2 py-[9px] px-3 rounded-[4px] placeholder:text-sm"
                    type="email"
                    autoComplete="off"
                    name="email"
                    {...register("email", { required: true })}
                    id="email"
                    // placeholder="santhosh@gamil.com"
                  />
                  {errors.email && (
                    <span style={{ color: "red", fontSize: 10 }}>
                      {"Email required *"}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap max-md:flex-col">
                <div className="p-2  md:w-1/2">
                  <div className="space-y-2">
                    <label htmlFor="mobile" className=" text-md text-gray-500">
                      Phone Number
                    </label>
                    <input
                    className="border w-full mt-2 max-md:mt-2 py-[9px] px-3 rounded-[4px] placeholder:text-sm"
                    type="text"
                    autoComplete="mobile"
                    name="mobile"
                    {...register("mobile", { required: true })}
                    id="mobile"
                    // placeholder="santhosh@gamil.com"
                  />
                  {errors.name && (
                    <span style={{ color: "red", fontSize: 10 }}>
                      {" Phone Number required *"}
                    </span>
                  )}
                  </div>
                </div>
                <div className="p-2 md:w-1/2">
                  <div className="space-y-2">
                    <label htmlFor="company" className=" text-md text-gray-500">
                      Company
                    </label>
                    <input
                    className="border w-full mt-2 max-md:mt-2 py-[9px] px-3 rounded-[4px] placeholder:text-sm"
                    type="text"
                    autoComplete="company"
                    name="company"
                    {...register("company", { required: true })}
                    id="company"
                    // placeholder="santhosh@gamil.com"
                  />
                  {errors.name && (
                    <span style={{ color: "red", fontSize: 10 }}>
                      {"Company required *"}
                    </span>
                  )}
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="space-y-2">
                    <label htmlFor="message" className=" text-md text-gray-500">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      {...register("message", { required: true })}
                      className="w-full rounded-lg max-md:shadow-xl md:rounded   md:border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                    {errors.message && (
                    <span style={{ color: "red", fontSize: 10 }}>
                      {"Message required *"}
                    </span>
                  )}
                  </div>
                  <button className="py-2 px-4 max-md:hidden bg-slate-200 text-black mt-3">Ask Question</button>
                  <button className="flex justify-end md:hidden"><img src="/assets/images/contactsend.png" className="my-3 " alt="" /></button>
                </div>


              </div>
            </div>
            </form>
          </div>
          {/* contact details  */}
          <div className="w-2/2 md:w-1/2 md:text-sm lg:text-md xl:text-lg max-md:hidden">
            <div className="flex">
              <p className="uppercase shrink-0 font-semibold text-2xl">
                send us email
              </p>
              <hr className="w-52 ml-3 mt-6" />
            </div>
            <div className="flex max-md:flex-col mt-6 gap-5 md:gap-4 lg:gap-10 font-AVENIR">
              <div className="flex md:gap-2 lg:gap-5 items-center">
                <div> <img src="/assets/images/contactmobile.png" alt="" /></div>
                <div>
                <a href="https://api.whatsapp.com/send/?phone=9047750005&text=&type=phone_number&app_absent=0" target={'_blank'}><p className="cursor-pointer" >Whats App : {info?.basicInfo?.whatsapp}</p></a>
                  <p className="cursor-pointer" onClick={() => {
                      window.open("tel:" + " 90477 50005");
                    }}>Contact us : {info?.basicInfo?.mobile}</p>
                </div>
              </div>
              <div  className="flex  md:gap-2 lg:gap-5 items-center">
                <img src="/assets/images/contactemail.png" alt="" />
                <p className="">Email: {info?.basicInfo?.email} </p>
              </div>
            </div>

            <div className="flex items-center mt-5 gap-5 font-AVENIR">
              <img src="/assets/images/contactlocation.png" alt="" />
              <p>Head Office : {info?.basicInfo?.address}</p>
            </div>

            <div className="flex mt-5">
              <p className="uppercase font-semibold text-2xl">
                branches
              </p>
              <hr className="w-56 ml-3 mt-6" />
            </div>
            {info && info.branches?.map((values, index)=>{
              return  <div key={index} className="flex items-center mt-3 gap-5">
              <img src="/assets/images/contactlocation.png" alt="" />
              <p className="font-AVENIR">{values.address}</p>
            </div>
            })}
          
          </div>

        </div>


        {/* mobile contact section  */}
        <div className="flex font-AVENIR justify-center mx-5 mt-5 rounded-lg py-5  items-start text-xl flex-col md:hidden space-y-4 bg-primary text-white">
          <div className=""><p className=" ml-4">Contact info</p></div>

          <div className="flex justify-center items-start  gap-3 px-3" >
            <img src="/assets/images/mobilelocation.png" className="h-8 mt-2" alt="" />
            <p>Ponmaran Illam 101, Erode Main Road, Muthugoundanpudur, Salangapalayam P.O., Kavindapadi, Erode, Tamilnadu - 638 455.</p>
          </div>
          <div className="flex justify-center items-center ml-1 gap-5 px-3" >
            <img src="/assets/images/mobilewhite.png" className="h-8 " alt="" />
            <p>+91 9842997700, 9952846456, 9087016838</p>
          </div>
          <div className="flex justify-center items-center  gap-5 px-3" >
            <img src="/assets/images/mobileemail.png" className="h-8 " alt="" />
            <p>sambunatureoil@gmail.com</p>
          </div>
        </div>

        {/* mobile branches  */}

        <div className="my-5 md:hidden">
          <p className="text-center tracking-wide font-semibold text-2xl">Branches</p>
          <img src="/assets/images/branchimage.png" className="mx-auto w-2/3 mt-2" alt="" />
        </div>

        {/* map section  */}

        <div className="mt-10 mb-5 space-y-5" >
          <p className="text-center text-2xl max-md:hidden">Reach <span className="text-primary">Sambu Naturals </span> Directly</p>
          {/* <img src="/assets/images/mapimage.png" className="h-64 w-full" alt="" /> */}
        </div>


        

      </section>

      <div className="flex justify-center mb-10">

          <div className="w-screen ">
            <iframe src="https://www.google.com/maps/embed?11.4156368,77.5748171,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba96ac0d22b30dd:0xbbecd9084e97cdc6!8m2!3d11.4156316!4d77.5794305!16s%2Fg%2F11dym5z792?entry=ttu"  allowFullScreen="" loading="lazy" height='460' referrerPolicy="no-referrer-when-downgrade" style={{width:'100%'}}></iframe>
          </div>
        </div>
    </>
  );
};

export default Contact;

{
  /* <div className="w-6/12">
           

            <div className="border-r border-slate-400">
            <div className="flex gap-10 mt-6 ">
              <div className="space-y-2">
                <p className="text-slate-500 text-lg">Your Name</p>
                <input type="text" className="border py-1  px-12 border-slate-400" />
              </div>
              <div className="space-y-2">
                <p className="text-slate-500 text-lg">Your Mail</p>
                <input type="text" className="border py-1 px-12 border-slate-400" />
              </div>
            </div>

            <div className="flex gap-10 mt-6 max-md:flex-row">
              <div className="space-y-2 ">
                <p className="text-slate-500 text-lg">Phone Number</p>
                <input type="text" className="border py-1 px-12 border-slate-400" />
              </div>
              <div className="space-y-2">
                <p className="text-slate-500 text-lg">Company</p>
                <input type="text" className="border py-1 px-12 border-slate-400" />
              </div>
            </div>
            
            <div className="space-y-2 mt-5 ">
            <p className="text-slate-500 text-lg">Your Message</p>
             <textarea name="" id="" cols="30" rows="5" className="border mr-5 px-44 border-slate-400"></textarea>
            </div>*/
}
