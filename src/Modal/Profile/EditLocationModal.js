import React, { useEffect, useState } from "react";
import useFetchData from "../../CustomHooks/useFetchData";
import { NotificationService } from "../../Service/NotificationService";

const EditLocationModal = (props) => {
  const [addressType, setAddressType] = useState();
  const [address, setAddress] = useState()
  const [houseNumber, setHouseNumber] = useState()
  const [floor, setFloor] = useState()
  const [landmark, setLandmark] = useState()
  const [area, setArea] = useState()
  const [city, setCity] = useState()
  const [pincode, setPincode] = useState()


  const { loading, makeRequest } = useFetchData();


  useEffect(()=>{
    setAddressType(props.data?.type)
    setAddress(props.data?.full_address)
    setHouseNumber(props.data?.house_number)
    setFloor(props.data?.house_floor)
    setLandmark(props.data?.landmark)
    setArea(props.data?.area)
    setPincode(props.data?.pincode)
    setCity(props.data?.city)
    

},[props.data])

  const editLocation = async () => {

    const payload = {
      address_id: props.data?.id,
      full_address: address,
      house_number: houseNumber,
      house_floor: floor,
      landmark: landmark,
      address_type: addressType,
      area: area,
      city: city,
      pincode: pincode
    };

    const Response = await makeRequest("/user/address/update", "post", payload);
    if (Response.status) {
      NotificationService(Response.message, 'success', 'top-right')
      props.Handler()
      props.getAddressHandler()
      
    }

    
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
              ? "md:w-2/5 h-auto bg-white rounded-lg relative py-6"
              : "hidden"
          }
        >
          <img
            onClick={()=>{
             
              props.Handler()
              props.getAddressHandler()
              
            }}
            className="right-3 top-3 absolute h-8 cursor-pointer"
            src="/assets/svg/close.svg"
            alt=""
          />
          <div className="px-8 space-y-2 ">
           
        
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
          
                <input
                  className="border w-full  max-md:mt-2  py-2 px-3 rounded-[4px] placeholder:text-sm"
                  type="text"
                  name="address"
                  value={address}
                  
                  onChange={(e)=>setAddress(e.target.value)}
                  id="address"
                  placeholder="Full Address"
                />
                
              <div className="md:flex w-full pt-2   items-center justify-center">
                <input
                  className="border w-full  max-md:mt-2  py-2 px-3 rounded-[4px] placeholder:text-sm"
                  type="text"
                  autoComplete="off"
                  name="flatno"
                  value={houseNumber && houseNumber}
                  onChange={(e)=>setHouseNumber(e.target.value)}
                  id="flatno"
                  placeholder="House/Flat/Block No"
                />
              
              </div>

              <div className="md:flex w-full pt-2   items-center justify-center">
                <input
                  className="border w-full  max-md:mt-2  py-2 px-3 rounded-[4px] placeholder:text-sm"
                  type="text"
                  autoComplete="off"
                  name="floor"
                  value={floor}
                  onChange={(e)=>setFloor(e.target.value)}
                  id="floor"
                  placeholder="Floor"
                />
               
              </div>

              <div className="md:flex w-full pt-2   items-center justify-center">
                <input
                  className="border w-full  max-md:mt-2  py-2 px-3 rounded-[4px] placeholder:text-sm"
                  type="text"
  
                  name="landmark"
                  value={landmark}
                  onChange={(e)=>setLandmark(e.target.value)}
                  id="landmark"
                  placeholder="Landmark"
                />
                
              </div>
              <div className="md:flex w-full pt-2   items-center justify-center">
                <input
                  className="border w-full  max-md:mt-2  py-2 px-3 rounded-[4px] placeholder:text-sm"
                  type="text"
  
                  name="area"
                  value={area}
                  onChange={(e)=>setArea(e.target.value)}
                  id="area"
                  placeholder="area"
                />
                
              </div>
              <div className="md:flex w-full pt-2   items-center justify-center">
                <input
                  className="border w-full  max-md:mt-2  py-2 px-3 rounded-[4px] placeholder:text-sm"
                  type="text"
  
                  name="city"
                  value={city}
                  onChange={(e)=>setCity(e.target.value)}
                  id="city"
                  placeholder="City"
                />
                
              </div>
              <div className="md:flex w-full pt-2   items-center justify-center">
                <input
                  className="border w-full  max-md:mt-2  py-2 px-3 rounded-[4px] placeholder:text-sm"
                  type="text"
  
                  name="pincode"
                  value={pincode}
                  onChange={(e)=>setPincode(e.target.value)}
                  id="pincode"
                  placeholder="pincode"
                />
                
              </div>
              <div >
                <button onClick={()=>editLocation()} className="bg-primary mt-3 text-white py-2 w-full">
                  Save
                </button>
              </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default EditLocationModal;
