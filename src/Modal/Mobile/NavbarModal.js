import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router";
import useFetchData from "../../CustomHooks/useFetchData";

const NavbarModal = (props) => {
  const [searchShow, setSearchShow] = useState(false);
  const [search, setSearch] = useState([]);
  const [searchResult, setSearchResult] = useState();

  const navigate = useNavigate();
  const { loading, makeRequest } = useFetchData();

  useEffect(() => {
    if (search?.length >= 3) {
      // searchApi()
      setSearchShow(true);
      searchResultApi();
    }
  }, [search]);

  const searchResultApi = async () => {
    const Response = await makeRequest(
      "/search-result?keyword=" + search,
      "get",
      {}
    );
    // /search-result?keyword=Carrot
    if (Response.status) {
      console.log(Response.data, "search");
      setSearchResult(Response.data.products);
    }
  };

  return (
    <>
      <div
        className={
          props.active ? " fixed delay-700 max-md:transition-all inset-0 z-50 bg-black/20 md:hidden" : "hidden"
        }
      >
        <div
          className={
            props.active
              ? "bg-white delay-700 max-md:transition-all absolute z-50 top-0 right-0 left-28 bottom-40 w-full h-full rounded-xl md:hidden"
              : "hidden"
          }
        >
          <div className="my-10 ml-5  rounded-sm relative  flex gap-2   ">
            <img
              src="/assets/images/navbarsearchicon.png"
              className="absolute top-2 left-2 "
              alt=""
            />
            <input
              type="text"
              placeholder="Search Product"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-green-100 outline-none py-2 pl-10 pr-6 text-black"
            />
          </div>

          {searchShow & search.length > 2 ? (
            searchResult?.map((values) => {
              return (
                <p
                  onClick={() => {
                    navigate("/productdetail", { state: values });
                    setSearch("");
                    props.Handler()
                  }}
                  className="text-center mr-28 cursor-pointer py-4 hover:text-white  border-b border-[#444C5A] hover:bg-primary shadow-sm"
                >
                  {values.name}
                </p>
              );
            })
          ) : (
            <div className=" text-xl text-center mr-28 space-y-4 ">
              <p
                onClick={() => {
                  navigate("/");
                  props.Handler();
                }}
                className="border-y py-3"
              >
                Home
              </p>

              <p
                onClick={() => {
                  navigate("/about");
                  props.Handler();
                }}
                className="border-b pb-3"
              >
                About Us
              </p>
              <p
                onClick={() => {
                  navigate("/shop");
                  props.Handler();
                }}
                className="border-b pb-3"
              >
                Shop
              </p>
              {/* <div onClick={()=>navigate('/shop')} className="flex items-center justify-center gap-3 border-b pb-3">
                    <p>Combo’s</p>
                    <p className="text-[15px] bg-primary px-2 py-0 text-white">New</p>
                    </div> */}
              <a
                href="https://www.amazon.in/stores/Greeny+Dip/page/55C8B85F-5029-412D-98EA-B6CF02A76EF0?ref_=ast_bln"
                target="_blank"
              >
                {" "}
                <div className="flex items-center justify-center gap-3 border-b py-4">
                  <p>Amazon</p>
                  <p className="text-[15px] bg-primary px-2  text-white">
                    Cash on Payment
                  </p>
                </div>
              </a>
              <p
                onClick={() => {
                  navigate("/nutraceuticals");
                  props.Handler();
                }}
                className="border-b pb-3"
              >
                Nutraceuticals
              </p>
              <p
                onClick={() => {
                  navigate("/media");
                  props.Handler();
                }}
                className="border-b pb-3"
              >
                Media
              </p>
              <p
                onClick={() => {
                  navigate("/contact");
                  props.Handler();
                }}
                className="border-b pb-3"
              >
                Contact Us
              </p>
              <p
                onClick={() => {
                  navigate("/profile");
                  props.Handler();
                }}
                className="border-b pb-3"
              >
                My Profile
              </p>
            </div>
          )}
        </div>

        <div
          onClick={props.Handler}
          className="opacity-25 fixed inset-0 z-10 bg-black md:hidden"
        ></div>
      </div>
    </>
  );
};

export default NavbarModal;

// const SearchDataShow = (props) =>{
//     return(
//         <>
//             <p onClick={()=>{
//                           navigate('/productdetail', {state: values})
//                           setSearch('')
//                           }} className="text-center cursor-pointer py-4 hover:text-white  border-b border-[#444C5A] hover:bg-primary shadow-sm">{props.name}</p>
//         </>
//     )
// }
