import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import useFetchData from "../CustomHooks/useFetchData";
import PickupPointModal from "./PickupPointModal";


const SelectCityAreaModal = (props ) => {
    const [pickupPointModal, setPickupPointModal] = useState(false);
    const [citiesData, setCitiesData] = useState();
    
    const [distributionId, setDistributionId] = useState();
    const [distributionData, setDistributionData] = useState()
    

   
  
    const PickupPointModalHandler = () => {
        setPickupPointModal(!pickupPointModal);
      };

    const {
        register,
        handleSubmit,
        control,
        watch,
        reset,
        formState: { errors },
      } = useForm();

      const selectedId = watch('city');
     
    
      const { loading, makeRequest } = useFetchData();

      useEffect(() => {
        // getStates()
        getCities();
       


      }, []);
    
      const areaDistribution = async (data) => {
        const payload = {
          area_id: data.area,
        };
        const Response = await makeRequest(
          "/area/distribution-centers",
          "post",
          payload
        );
        if(Response.status){

            setDistributionId(Response.data.distribution_centers[0].id)
            // sendDataToParentOnClick(Response.data.distribution_centers[0].id)
            setDistributionData(Response.data.distribution_centers)
            // console.log(Response.data.distribution_centers)
            PickupPointModalHandler()

            props.Handler()
            reset()
            
        }
      };


    
      const getCities = async () => {
        const Response = await makeRequest(
          "/order-delivery/cities-and-areas",
          "get",
          {}
        );
        if (Response.status) {
          setCitiesData(Response.data);
        }
      };

      // const sendDataToParentOnClick = (id) => {
      //   // Call the callback function from props to send data to the parent
      //   props.sendDataToParent(id);
      // };

      const filteredData = citiesData?.areas?.filter(item =>  item.city_id === selectedId);


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
              ? "bg-white  rounded-lg  w-full md:py-10  lg:w-4/6   h-auto  relative "
              : "hidden"
          }
        >
          <img
            onClick={()=>{
              props.Handler()
              
              reset({ area : "Area"});
              
            }}
            className="right-1 top-1 absolute m-1  cursor-pointer"
            src="/assets/svg/close.svg"
            alt=""
          />
          <div className="flex items-center justify-center">
            <img src="/assets/images/phonelottie.png" className="h-28" alt="" />
          </div>
          <div className="md:bg-[#D9D9D938] md:mx-12 lg:mx-20 xl:mx-40  rounded-lg">
            <div className="flex flex-col max-sm:space-y-2  py-5 px-5 mb-3 md:px-10 lg:px-20 ">
             
              <p className="text-left my-1 text-sm">City</p>
              <form className="space-y-2" onSubmit={handleSubmit(areaDistribution)}>
                <select
                  {...register("city")}
                  name="city"
                  className="w-full  py-2  px-3  rounded-md placeholder:text-xs border text-slate-500 text-sm"
                  defaultValue='City'
                >
                  <option   disabled>
                    City
                  </option>

                  {citiesData &&
                    citiesData?.cities?.map((values, index) => {
                      return (
                        <option key={index} className="accent-primary" value={values.id}>
                          {values.name}
                        </option>
                      );
                    })}
                </select>
                {errors.city && (
                  <span style={{ color: "red", fontSize: 10 }}>
                    {"City required *"}
                  </span>
                )}
                <p className="text-left text-sm  my-1">Area</p>

                <Controller
                  name="area" // This should match the name you use to register the field in the useForm hook.
                  control={control}
                  defaultValue="Area" // Set a default value if needed.
                  rules={{ required: true }} // Add any validation rules if required.
                  render={({ field }) => (
                    <select
                      className="w-full  py-2 mb-5  px-3 rounded-md placeholder:text-sm border text-slate-500 text-sm"
                      {...field}
                    >
                      <option  disabled>
                        Area
                      </option>
                      {filteredData &&
                        filteredData.map((values) => {
                           
                          return (
                            <option
                              className="accent-primary"
                              value={values.id}
                            >
                              {values.name}
                            </option>
                          );
                        })}
                    </select>
                  )}
                />

                {/* </select> */}
                <button className="w-full  py-2 text-white rounded-md bg-primary">
                  Submit
                </button>
              </form>
              
              
             
            </div>
          </div>
        </div>
      </div>
       <PickupPointModal checkout={props.checkout} id={distributionId && distributionId} data={distributionData&& distributionData}
        active={pickupPointModal}
        Handler={PickupPointModalHandler}
      />
    </>
  )
}

export default SelectCityAreaModal