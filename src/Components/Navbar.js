import React, { useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import CartIcon from "../IconElements/Navbar Icons/CartIcon";
import Logo from "../IconElements/Navbar Icons/Logo";
import MenuIcon from "../IconElements/Navbar Icons/MenuIcon";
import MobileCartIcon from "../IconElements/Navbar Icons/MobileCartIcon";
import MyAccountIcon from "../IconElements/Navbar Icons/MyAccountIcon";
import SearchIcon from "../IconElements/Navbar Icons/SearchIcon";
import NavbarModal from "../Modal/Mobile/NavbarModal";
import { useNavigate } from "react-router";
import useFetchData from "../CustomHooks/useFetchData";
import { LocalStorageService } from "../Services/LocalStorageService";
import { NotificationService } from "../Service/NotificationService";

const Navbar = (props) => {
  const [navbarModal, setNavbarModal] = useState(false);
  const [searchIcon, setSearchIcon] = useState(false);
  const [search, setSearch] = useState([]);
  const [searchResult, setSearchResult] = useState();
  const [dropdown, setDropdown] = useState(false);
  const [notificationShown, setNotificationShown] = useState(false);

  const navigate = useNavigate();
  const { loading, makeRequest } = useFetchData();

  const NavbarModalTrigger = () => {
    setNavbarModal(!navbarModal);
  };

  useEffect(() => {
    const userType = LocalStorageService.getItem('userType')
    if (search?.length >= 3) {
      // searchApi() 
      if(userType === 'user'){
        searchResultApi();
      }
      setDropdown(!dropdown);
    }
    if(search?.length > 3 && userType === 'guest' && !notificationShown){
      NotificationService('You are in Guest Mode! Please Login!', 'error', 'top-center')
      setNotificationShown(true);
     }
  
  }, [search]);




 

  


  const ExternalLink = {
    amazon:
      "https://www.amazon.in/stores/Greeny+Dip/page/55C8B85F-5029-412D-98EA-B6CF02A76EF0?ref_=ast_bln",
  };

  const searchApi = async () => {
    const Response = await makeRequest("/search?keyword=" + search, "get", {});

    if (Response.status) {
    }
  };

  const searchResultApi = async () => {
    
    const Response = await makeRequest(
      "/search-result?keyword=" + search,
      "get",
      {}
    );
    if (Response.status) {
      setSearchResult(Response.data.products);
      if(search?.length >3){
        setDropdown(true);
      }
     
    }
  };

  return (
    <>
      <header>
        <div
          onClick={() => setDropdown(false)}
          className="w-full flex items-center justify-around pt-2 shadow-md"
        >
          <div>
            {/* <Logo /> */}
            <img
              onClick={() => navigate("/")}
              src="/assets/Icons/logo.jpg"
              className="h-24 py-1 cursor-pointer"
              alt=""
            />
          </div>
          <div>
            <h4
              onClick={() => navigate("/")}
              className="text-primary md:hidden font-semibold text-xl"
            >
              KeeraiKadai
            </h4>
            <div className="hidden font-semibold md:flex md:space-x-5 lg:space-x-12 md:ml-8 lg:ml-10 xl:ml-16 ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-bold"
                    : "text-gray-500 font-light"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-bold"
                    : "text-gray-500 font-light"
                }
                to="/about"
              >
                About us
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-bold"
                    : "text-gray-500 font-light"
                }
                to="/shop"
              >
                Shop
              </NavLink>
              {/* <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-bold"
                    : "text-gray-500 font-light"
                }
                to="/shop"
              >
                Combo
              </NavLink> */}
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-bold"
                    : "text-gray-500 font-light"
                }
                to="/nutraceuticals"
              >
                Nutraceuticals
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-bold"
                    : "text-gray-500 font-light"
                }
                to="https://www.amazon.in/stores/Greeny+Dip/page/55C8B85F-5029-412D-98EA-B6CF02A76EF0?ref_=ast_bln"
                target="_blank"
              >
                Amazon
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-bold"
                    : "text-gray-500 font-light"
                }
                to="/media"
              >
                Media
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-bold"
                    : "text-gray-500 font-light"
                }
                to="contact"
              >
                Contact us
              </NavLink>
            </div>
          </div>
          <div>
            <div className="hidden md:flex md:gap-3 relative lg:gap-6 md:items-center font-AVENIR">
              {/* <img src="/assets/svg/whitearrow.svg" className="absolute z-50 top-8" alt="" /> */}
              {dropdown  && (
                <div className="bg-white w-80 -left-10 rounded-lg shadow-xl h-auto z-50 top-10 mt-5  absolute">
                  {searchResult && searchResult.length === 0 && ( 
                    <p className="text-center py-4 text-red-500 flex justify-center items-center gap-4 border-b border-[#444C5A]shadow-sm">
                      <img src="/assets/svg/cross.svg" className="h-4" alt="" />
                      Not found
                    </p>
                  )}
                  {searchResult &&
                    searchResult.map((values, index) => {
                      return (
                        <>
                          <p key={index}
                            onClick={() => {
                              navigate("/productdetail", { state: values });
                              setDropdown(false);
                              setSearch("");
                            }}
                            className="text-center cursor-pointer py-4 hover:text-white  border-b border-[#444C5A] hover:bg-primary shadow-sm"
                          >
                            {values.name}
                          </p>
                        </>
                      );
                    })}
                </div>
              )}
              {/* <div
                onClick={() => setSearchIcon(!searchIcon)}
                className={` ${
                  searchIcon &&
                  "transition-all bg-[#8fdca933] pl-2 w-40 duration-500"
                }  rounded-2xl py-2  flex gap-2    `}
              >
                <SearchIcon />
                <input
                  type="text"
                  placeholder=""
                  className={`${searchIcon ? "bg-[#8fdca933] w-32 outline-none " : 'hidden'} `}
                />
              </div> */}
              {/* <p onClick={()=>setSearchIcon(!searchIcon)} className="cursor-pointer"><SearchIcon  /></p> */}
              <p className="cursor-pointer absolute left-2 ">
                <SearchIcon />
              </p>

              <input
                type="text"
                className="border py-1 md:w-32 lg:w-40 xl:w-48  pl-10 outline-none rounded-sm bg-[#F8F8F8]"
                value={search}
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />

              <img
                onClick={() => navigate("/profile")}
                src="/assets/Icons/wallet.svg"
                className={` ${searchIcon && "hidden"} h-5 cursor-pointer`}
                alt=""
              />

              <p
                onClick={() => navigate("/cart")}
                className={` ${
                  searchIcon && "hidden"
                } relative h-5 cursor-pointer`}
              >
                <span className="bg-primary text-white m-0  p-0 rounded-full w-6 h-6 pt-[1px] text-[10px] -top-6 -right-5 absolute text-center flex justify-center items-center">
                  {props.data?.length}
                </span>
                <CartIcon />
              </p>
              <p
                onClick={() => navigate("/profile")}
                className={` ${searchIcon && "hidden"} h-5 cursor-pointer`}
              >
                <MyAccountIcon />
              </p>
            </div>
            <div className="md:hidden flex gap-5 items-center relative">
              <p className="bg-primary text-white rounded-full w-5 h-5 text-[12px] -top-4 left-3 absolute text-center mt-1">
                {props.data?.length}
              </p>

              <p onClick={() => navigate("/cart")} className="cursor-pointer">
                <MobileCartIcon />
              </p>
              <p
                onClick={() => setNavbarModal(true)}
                className="cursor-pointer delay-500 max-md:transition-all"
              >
                {" "}
                <MenuIcon />
              </p>
            </div>

            <NavbarModal active={navbarModal} Handler={NavbarModalTrigger} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
