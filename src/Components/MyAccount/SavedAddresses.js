import React, { useState, useEffect } from "react";
import AddLocationModal from "../../Modal/Profile/AddLocationModal";
// import EditAddress from "./EditAddress";
import axios from "axios";
import EditLocationModal from "../../Modal/Profile/EditLocationModal";
import { LocalStorageService } from "../../Services/LocalStorageService";
import useFetchData from "../../CustomHooks/useFetchData";
import { NotificationService } from "../../Service/NotificationService";


const SavedAddresses = () => {
  const [addLocation, setAddLocation] = useState(false);
  const [editLocation, setEditLocation] = useState(false)
  const [editAddress, setEditAddress] = useState(false);
  const [addressData, setAddressData] = useState();
  const [selectedAddress, setSelectedAddress] = useState()

  const [dropdown, setDropdown] = useState(false)

  const[id, setId] = useState()

  const { loading, makeRequest } = useFetchData();

  const SetAddLocationHandler = () => {
    setAddLocation(!addLocation);
  };

  const SetEditLocationHandler = () => {
    setEditLocation(!editLocation);
  };

  useEffect(() => {
    getAddress();
  }, []);

  const getAddress = async () => {
    const Response = await makeRequest('/user/address/manage', 'post', {})
    if(Response.status){
      setAddressData(Response.data.addresses);
    }
   
  };

  const deleteAddress = async (id) => {
    const payload = {
      "address_id": id
  };
  const Response = await makeRequest('/user/address/delete', 'post', payload)
  getAddress()
  if(Response.status){ 
   
    NotificationService(Response.message, 'success', 'top-right')
    }
  
  };

  const showMenu  = (item)=> {
    if(id === item){
      setEditAddress(!editAddress)

    }
    else{
      setEditAddress(true)
      setId(item)
     
      
    }
  }


 
  return (
    <>
    
      <div onClick={()=>setEditAddress(!editAddress)} className="max-md:shadow-md p-5 rounded-md">
        {addressData &&
          addressData.map((values, index) => {
            return (
              <div key={index}   className="flex items-center justify-between relative">
                <div className="flex gap-5 items-center my-3 ">
                  <img src={`/assets/svg/${values.type}.svg`} alt="" />
                  <div>
                    <p className="text-lg font-semibold">{values.type}</p>
                    <p className="text-slate-500">{values.full_address}</p>
                  </div>
                </div>
                <img
                  onClick={()=>{
                    setSelectedAddress(values)
                     
                    showMenu(values.id)
                  
                  }}
                  key={values.id}
                  className="cursor-pointer"
                  src="/assets/svg/threedot.svg"
                  alt=""
                />
                  {
                    
                    editAddress && id  === values.id  ? <div className="absolute font-semibold rounded-md shadow-lg py-3 px-5 space-y-1 right-5 ">
       
                    <p onClick={()=>{
                       
                      setEditLocation(true)
                      }} className="cursor-pointer text-center" >Edit</p>
                    <hr className="text-black font-semibold w-full border-black" />
                    <p onClick={()=>deleteAddress(values.id)} className="cursor-pointer">Delete</p>
                  </div> : <p className="hidden"></p> 
                  }

              </div>
                 
            );
         
          })}
        
      {addressData?.length === 3 ? '' :
        <button
          onClick={()=>{SetAddLocationHandler()
             setEditAddress(false)}}
          className="bg-primary text-white py-2 px-10 text-sm mt-4"
        >
          Add location +
        </button>
        } 
      </div>

      <AddLocationModal active={addLocation} getAddressHandler={getAddress} Handler={SetAddLocationHandler} />
      <EditLocationModal data={selectedAddress} getAddressHandler={getAddress} active={editLocation}   Handler={SetEditLocationHandler} />
    </>
  );
};

export default SavedAddresses;

