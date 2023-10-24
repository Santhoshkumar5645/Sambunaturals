import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { LocalStorageService } from "../Services/LocalStorageService";
import useFetchData from "../CustomHooks/useFetchData";
import Select from "react-select";
import { NotificationService } from "../Service/NotificationService";
import { MultiSelect } from "react-multi-select-component";

const RegisterAddressModal = (props) => {
  const [states, setStates] = useState();
  const [district, setDistrict] = useState();
  const [categories, setCategories] = useState([]);
  const [districtId, setDistrictId] = useState(null);
  const [selected, setSelected] = useState([]);

  

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm();




  // const filteredData = cities?.areas?.filter(item =>  item.city_id === selectedId);


  const { loading, makeRequest } = useFetchData();

  useEffect(() => {
    if (LocalStorageService.getItem("accessToken")) {
      getStates();
      
      getCategories();
     
    }
   
  }, []);

 
  const getStates = async () => {
    
    const Response = await makeRequest("/states", "get", {});
    if (Response.status) {
      setStates(Response.data);
    }
  };

  const getCategories = async () => {
    const Response = await makeRequest("/categories", "get", {});
    if (Response.status) {
      setCategories(Response.data);
    }
  };

  const options = categories?.map((values) => {
    return { label: values.name, value: values.id };
  });



  // console.log(stateId, 'iddd')
  // if(stateId !== "Select State" || null || undefined ){
  //      setDistrictId(stateId)
  //      //  getDistrict(stateId)
  //     }

  const getDistrict = async (stateId) => {  
    // const stateId = watch('state')
    const payload = {
      "state_id": stateId
  }
  
    const Response = await makeRequest(
      "/districts",
      "post",
      payload
    );
  
    
    if (Response.status) {
      setDistrict(Response.data);
      // console.log(Response.data)


      
    }
  };


  const stateId = watch('state')

  useEffect(()=>{
    if(stateId === "Select State" || typeof stateId === 'undefined'){
      // console.log(stateId)
    }
    else{ 
      getDistrict(stateId) 
    }
  
  }, [stateId])


  const onSubmit = async (data) => {

    if(loading) return 0;

    const { address, city, contact, district, email, locality, name, pincode } =   data;

    const payload = {
      name: name,
      email: email,
      mobile_number: contact,
      district_id:  district,
      city_name: city,
      apartment_or_community_name: locality,
      address: address,
      pincode: pincode,
      category_id: selected?.map((values)=>{
        return values.value
      })
    };

    const Response = await makeRequest(
      "/distribution-center/customer-requests",
      "post",
      payload
    );
    if(Response.states){
      NotificationService(Response.message, "success", "top-right", 'testing');
      reset();
      props.Handler()
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
              ? "bg-white rounded-lg  w-full h-full sm:w-2/3  md:w-2/2  lg:w-4/6  sm:h-full md:h-5/6 lg:h-5/6 xl:h-5/6 relative overflow-y-scroll "
              : "hidden"
          }
        >
          <img
            onClick={()=>{
              props.Handler()
              reset()
              reset({ state: 'Select State', district : "Select District"});
              setSelected([])
              setDistrict([])

            }}
            className="right-1 top-1 absolute m-1   cursor-pointer"
            src="/assets/svg/close.svg"
            alt=""
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="  max-md:mt-20 rounded-lg">
              <div className="flex flex-col shrink-0 justify-start space-y-3 md:space-y-2  lg:space-y-2 my-5    items-center ">
                <p className="text-md md:text-xs font-semibold text-center">
                  <span className="font-bold text-md md:text-sm">Note: </span>
                  Register if you are living in Community of minimum 100
                  Residents.
                </p>

                {/* name  */}
                <div className="md:flex w-full px-3   items-center justify-center">
                  <label
                    className="text-xs  w-2/12 font-semibold"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="border w-full lg:w-2/5 mt-2 max-md:mt-2 py-[10px] px-3 rounded-[4px] placeholder:text-sm"
                    type="text"
                    autoComplete="off"
                    name="name"
                    {...register("name", { required: true })}
                    id="name"
                    placeholder="John"
                  />
                  {errors.name && (
                    <span style={{ color: "red", fontSize: 10 }}>
                      {"Name required *"}
                    </span>
                  )}
                </div>
                {/* Contact  */}
                <div className="md:flex w-full px-3   items-center justify-center">
                  <label
                    className="text-xs w-2/12 text-left font-semibold"
                    htmlFor="contact"
                  >
                    Contact
                  </label>
                  <input
                    className="border w-full lg:w-2/5  max-md:mt-2 py-[10px] px-3 rounded-[4px] placeholder:text-sm"
                    type="text"
                    autoComplete="off"
                    name="contact"
                    {...register("contact", { required: true })}
                    id="contact"
                    placeholder="+ 91"
                  />
                  {errors.contact && (
                    <span style={{ color: "red", fontSize: 10 }}>
                      {"Contact required *"}
                    </span>
                  )}
                </div>
                {/* Email  */}
                <div className="md:flex w-full px-3   items-center justify-center">
                  <label
                    className="text-xs w-2/12 text-left font-semibold"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="border w-full lg:w-2/5  max-md:mt-2 py-[10px] px-3 rounded-[4px] placeholder:text-sm"
                    type="email"
                    autoComplete="off"
                    name="email"
                    {...register("email", { required: true })}
                    id="email"
                    placeholder="johndoe@gmail.com"
                  />
                  {errors.email && (
                    <span style={{ color: "red", fontSize: 10 }}>
                      {"Email required *"}
                    </span>
                  )}
                </div>
                {/* State  */}
                <div className="md:flex w-full px-3  text-sm items-center justify-center">
                  <label
                    className="text-xs w-2/12 text-left font-semibold"
                    htmlFor="state"
                  >
                    State
                  </label>
                  <select
                    {...register("state")}
                    name="state"
                    id="state"
                    className="w-full lg:w-2/5 py-2  px-3  rounded-md placeholder:text-xs border text-slate-500 text-sm"
                  >
                    <option selected disabled>
                      Select State
                    </option>

                    {states &&
                      states.map((values, index) => {
                        return (
                          <option
                            key={index}
                            className="accent-primary "
                            value={values.id}
                          >
                            {values.name}
                          </option>
                        );
                      })}
                  </select>
                  {errors.city && (
                    <span style={{ color: "red", fontSize: 10 }}>
                      {"State required *"}
                    </span>
                  )}
                </div>
          
      

                {/* District  */}
                <div className="md:flex w-full px-3  text-sm items-center justify-center">
                  <label
                    className="text-xs w-2/12 text-left font-semibold"
                    htmlFor="district"
                  >
                    District
                  </label>
                  <select
                    {...register("district")}
                    name="district"
                    id="district"
                    className="w-full lg:w-2/5 py-2  px-3  rounded-md placeholder:text-xs border text-slate-500 text-sm"
                  >
                    <option selected disabled>
                      Select District
                    </option>

                    {district?.map((values, index) => {
                        return (
                          <option
                            key={index}
                            className="accent-primary"
                            value={values.id}
                          >
                            {values.name}
                          </option>
                        );
                      })}
                  </select>
                  {errors.district && (
                    <span style={{ color: "red", fontSize: 10 }}>
                      {"District required *"}
                    </span>
                  )}
                </div>
                {/* City */}
                <div className="md:flex w-full px-3   items-center justify-center">
                  <label
                    className="text-xs w-2/12 text-left font-semibold"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    className="border w-full lg:w-2/5  max-md:mt-2 py-[10px] px-3 rounded-[4px] placeholder:text-sm"
                    type="text"
                    autoComplete="off"
                    name="city"
                    {...register("city", { required: true })}
                    id="city"
                    placeholder="Mumbai"
                  />
                  {errors.city && (
                    <span style={{ color: "red", fontSize: 10 }}>
                      {"City required *"}
                    </span>
                  )}
                </div>

                {/* Apartment name */}
                <div className="md:flex w-full px-3   items-center justify-center">
                  <label
                    className="text-xs w-2/12 text-left font-semibold"
                    htmlFor="locality"
                  >
                    Apartment Name or Locality
                  </label>
                  <input
                    className="border w-full lg:w-2/5 max-md:mt-2  py-[10px] px-3 rounded-[4px] placeholder:text-sm"
                    type="text"
                    autoComplete="off"
                    name="locality"
                    {...register("locality", { required: true })}
                    id="locality"
                    placeholder="ABC Apartment"
                  />
                  {errors.locality && (
                    <span style={{ color: "red", fontSize: 10 }}>
                      {"Apartment Name or Locality required *"}
                    </span>
                  )}
                </div>

                {/* Address */}
                <div className="md:flex w-full px-3   items-center justify-center">
                  <label
                    className="text-xs w-2/12 text-left font-semibold"
                    htmlFor="address"
                  >
                    Address
                  </label>
                  <input
                    className="border w-full lg:w-2/5 max-md:mt-2  py-[10px] px-3 rounded-[4px] placeholder:text-sm"
                    type="text"
                    autoComplete="off"
                    name="address"
                    {...register("address", { required: true })}
                    id="address"
                    placeholder="12, ABC Road"
                  />
                  {errors.address && (
                    <span style={{ color: "red", fontSize: 10 }}>
                      {"Address required *"}
                    </span>
                  )}
                </div>

                {/* pincode */}
                <div className="md:flex w-full px-3   items-center justify-center">
                  <label
                    className="text-xs w-2/12 text-left font-semibold"
                    htmlFor="pincode"
                  >
                    Pincode
                  </label>
                  <input
                    className="border w-full lg:w-2/5 max-md:mt-2  py-[10px] px-3 rounded-[4px] placeholder:text-sm"
                    type="text"
                    autoComplete="off"
                    name="pincode"
                    {...register("pincode", { required: true })}
                    id="pincode"
                    placeholder="625005"
                  />
                  {errors.pincode && (
                    <span style={{ color: "red", fontSize: 10 }}>
                      {"Pincode required *"}
                    </span>
                  )}
                </div>
                {/* products  */}
                <div className="md:flex w-full px-3   text-sm items-center justify-center">
                  <label
                    className="text-xs  w-2/12 text-left font-semibold"
                    htmlFor="products"
                  >
                    Product Interested
                  </label>

                  <MultiSelect
                    options={options}
                    value={selected}
                    className="w-full lg:w-2/5   max-md:mt-2 text-black py-[10px]  rounded-[4px] placeholder:text-sm"
                    onChange={setSelected}
                    labelledBy="Select"
                  />
                </div>

                <button disabled={loading}  className="w-full lg:w-3/6  py-2 max-md:mx-3 text-white rounded-md bg-primary disabled:opacity-30">
                  {loading ? 'submitting...': 'submit'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterAddressModal;
