import React, { useEffect, useState } from "react";
import Dashboard from "../Components/MyAccount/Dashboard";
import Orders from "../Components/MyAccount/Orders";
import Wishlist from "../Components/MyAccount/Wishlist";
import SavedAddresses from "../Components/MyAccount/SavedAddresses";
import { useNavigate } from "react-router-dom";
import MyWallet from "../Components/MyAccount/MyWallet";
import ReferFriend from "../Components/MyAccount/ReferFriend";
import Feedback from "../Components/MyAccount/Feedback";
import WelcomeModal from "../Modal/Login/WelcomeModal";
import EditProfile from "../Components/MyAccount/EditProfile";
import axios from "axios";
import { LocalStorageService } from "../Services/LocalStorageService";
import useFetchData from "../CustomHooks/useFetchData";
import { NotificationService } from "../Service/NotificationService";
import LogoutConfirmationModal from "../Modal/LogoutConfirmationModal";

function Profile() {
  const [Toggler, setToggle] = useState(1);
  const [welcomeModal, setWelcomeModal] = useState(false);
  const [profileData, setProfileData] = useState();
  const [logoutModal, setLogoutModal] = useState(false);
  const { loading, makeRequest } = useFetchData();

  // const userType =  LocalStorageService.getItem('userType');

  const WelcomeModalHandler = () => {
    setWelcomeModal(!welcomeModal);
  };
  const LogoutModalHandler = () => {
    setLogoutModal(!logoutModal);
  };

  useEffect(() => {
    const userType = LocalStorageService.getItem("userType");
    if (userType === "guest" || !userType) {
      setWelcomeModal(true);
    } else {
      setWelcomeModal(false);
      userProfile();
    }
    //  userProfile()
  }, []);

  const navigate = useNavigate();
  const ComponentToggler = (id) => {
    switch (id) {
      // case 1:
      //   return <Dashboard />;

      case 1:
        return <MyWallet data={userProfile} />;

      case 2:
        return <ReferFriend />;

      case 3:
        return <SavedAddresses />;

      case 4:
        return <Feedback />;

      case 5:
        return <Orders />;

      case 6:
        return <Wishlist />;

      case 8:
        return <EditProfile call={userProfile} data={profileData} />;

      default:
        return "";
    }
  };

  const userProfile = async () => {
    const id = await LocalStorageService.getItem("Distribution_id");
    const payload = {
      distribution_center_id: id,
    };

    const Response = await makeRequest("/user/profile", "post", payload);

    if (Response.status) {
      setProfileData(Response.data.user);
    }
  };

  return (
    <>
      <section>
        <div className="relative flex flex-col justify-center rounded-lg items-center mt-6 md:mt-3 mx-3 md:mx-auto bg-[#EDF6EA] md:w-[98%] h-44 md:h-80 ">
          <img
            className=" absolute  -left-3 -top-3 rotate-180 max-md:hidden  "
            src="assets/images/groupleaf.png"
          ></img>
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-primary font-semibold md:font-bold ">
            My Profile
          </h1>
          <hr className="max-md:hidden  w-60 border-primary mt-4" />
          <p className=" lg:text-2xl  font-bold  max-md:hidden mt-3   ">
            HOME / My Profile
          </p>
          <img
            className="absolute -right-3 -bottom-3   max-md:hidden "
            src="assets/images/groupleaf.png"
          ></img>
        </div>

        {/* sections */}

        <div className="md:flex gap-6  px-5 md:px-10 py-10 font-AVENIR">
          <div className="w-full md:w-3/12 md:bg-[#D9D9D926] md:p-5 ">
            {/* md:border-r  border-primary md:h-80 */}
            <div className=" flex items-center gap-5">
              <div className="relative">
                <img
                  src={profileData && profileData?.profile_photo}
                  className="md:h-24 lg:h-16 w-16"
                  alt=""
                />
                <img
                  onClick={() => {
                    setToggle(8);
                  }}
                  src="/assets/svg/edit.svg"
                  className="absolute h-5 bottom-0 right-0 cursor-pointer"
                  alt=""
                />
              </div>
              <div>
                <p className="text-xl font-semibold">
                  {profileData && profileData.name}
                </p>
                <p className="text-sm">
                  {profileData && profileData.contact_number}
                </p>
              </div>
            </div>
            <p className="text-2xl font-extrabold max-md:hidden mt-5">
              {" "}
              Profile
            </p>
            {/* <hr className='w-full md:w-10/12  my-2 max-md:hidden border-primary' /> */}

            <div className="flex flex-col gap-y-3 md:gap-y-5 mt-5 font-medium  items-start ">
            
              <div
                onClick={() => {
                  setToggle(1);
                }}
                className={`${
                  Toggler === 1
                    ? " rounded-md w-full max-md:py-3 px-2  text-primary "
                    : "w-full max-md:py-3 px-2 "
                } flex items-center gap-3 max-md:bg-gray-100`}
              >
                <img
                  src="/assets/svg/profilewallet.svg"
                  className="h-7"
                  alt=""
                />
                {/* <img src="/assets/svg/" alt="" /> */}
                <p className=" text-md cursor-pointer">My Wallet</p>
              </div>
              <div
                onClick={() => {
                  setToggle(2);
                }}
                className={`${
                  Toggler === 2
                    ? " rounded-md w-full max-md:py-3 px-2  text-primary "
                    : "w-full max-md:py-3 px-2 "
                } flex items-center max-md:bg-gray-100 gap-3`}
              >
                <img
                  src="/assets/svg/profilefriend.svg"
                  className="h-7"
                  alt=""
                />
                <p className=" text-md cursor-pointer">Refer a friend</p>
              </div>
              <div
                onClick={() => {
                  setToggle(3);
                }}
                className={`${
                  Toggler === 3
                    ? " rounded-md w-full max-md:py-3 px-2  text-primary "
                    : "w-full max-md:py-3 px-2 "
                } flex items-center max-md:bg-gray-100 gap-3`}
              >
                <img
                  src="/assets/svg/profileaddress.svg"
                  className="h-7"
                  alt=""
                />
                <p className=" text-md cursor-pointer">Manage Addresses</p>
              </div>
             

              <div
                onClick={() => {
                  setToggle(4);
                }}
                className={`${
                  Toggler === 4
                    ? " rounded-md w-full max-md:py-3 px-2 text-primary "
                    : "w-full max-md:py-3 px-2 "
                } flex max-md:bg-gray-100 items-center gap-3`}
              >
                <img
                  src="/assets/svg/profilefeedback.svg"
                  className="h-7"
                  alt=""
                />
                <p className=" text-md cursor-pointer">Feedbacks</p>
              </div>

              <div
                onClick={() => {
                  setToggle(5);
                }}
                className={`${
                  Toggler === 5
                    ? " rounded-md w-full max-md:py-3 px-2 text-primary "
                    : "w-full max-md:py-3 px-2 "
                } flex max-md:bg-gray-100 items-center gap-3`}
              >
                <img
                  src="/assets/svg/profileorder.svg"
                  className="h-7"
                  alt=""
                />
                <p className=" text-md cursor-pointer">Order Details</p>
              </div>

              <div
                onClick={() => {
                  setToggle(6);
                }}
                className={`${
                  Toggler === 6
                    ? " rounded-md w-full max-md:py-3 px-2 text-primary "
                    : "w-full max-md:py-3 px-2 "
                } flex max-md:bg-gray-100 items-center gap-3`}
              >
                <img
                  src="/assets/svg/profilefavorite.svg"
                  className="h-7"
                  alt=""
                />
                <p className=" text-md cursor-pointer">Favorites</p>
              </div>

             
              <div
                onClick={() => {
                  LogoutModalHandler();
                }}
                className={`${
                  Toggler === 8
                    ? " rounded-md w-full max-md:py-3 px-2  text-primary "
                    : "w-full max-md:py-3 px-2 "
                } flex max-md:bg-gray-100 items-center gap-3`}
              >
                {/* <img src="/assets/svg/whitelogout.svg" className='h-7 md:hidden' alt="" /> */}
                <img
                  src="/assets/svg/profilelogout.svg"
                  className="h-7 "
                  alt=""
                />
                <p className=" text-md cursor-pointer">Logout</p>
              </div>

            
            </div>
          </div>

          <div className="w-12/12 md:w-10/12 max-md:mt-8">
            {ComponentToggler(Toggler)}
          </div>
        </div>
      </section>
      <WelcomeModal
        from='profile'
        data={userProfile}
        active={welcomeModal}
        Handler={WelcomeModalHandler}
      />
      <LogoutConfirmationModal
        active={logoutModal}
        Handler={LogoutModalHandler}
      />
    </>
  );
}

export default Profile;
