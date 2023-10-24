import React, { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import ProductCard from "../Components/Shop/ProductCard";
import HotDealsCard from "../Components/Shop/HotDealsCard";
import TextTransition, { presets } from 'react-text-transition';
import ImageFade from "../Components/Shop/ImageFade";
import axios from "axios";
import useFetchData from "../CustomHooks/useFetchData";
import { LocalStorageService } from "../Services/LocalStorageService";
import { Loader, ScrolltoTop } from "../Utility";
import {CartContext} from '../Contextapi/AppContext'



const TEXTS = ['Products', 'Greens'];

const Shop = () => {
  const [category, setCategory] = useState()
  const [index, setIndex] = useState(0);

  // let freshGreen = category && category[0].products;

  const [data, setData] = useState()
  const [categoryTitle, setCategoryTitle] = useState()
  const { loading, makeRequest } = useFetchData()
  // const [count, setCount ] = useState()



  useEffect(() => {
    const token = LocalStorageService.getItem('accessToken')
     if(token){
      productsData()
      ScrolltoTop()
     }
   
    
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);

    
    
  }, []);



    const { addCart, CartData, cartTotalUpdate } = useContext(CartContext)

  const productsData = async () => {

    const id = await LocalStorageService.getItem('Distribution_id')
    
    const payload = {
      "distribution_center_id": id === null ? "40586698a2a70120f52082d0495726e97b23b54cbabb226e99f336bbb893db07c565aa6292a353008e8eb9" : id
    }

    const Response = await makeRequest('/category-products', 'post', payload)

    if (Response.status) {
      const products = Response.data.categories
      const initialCategory = Response.data.categories[0].name
      setCategoryTitle(initialCategory)
      setCategory(products)
      setData(Response.data.categories[0].products)
    }

  };



  const ComponentToggler = (id, name) => {
    switch (id) {
     
      case id:
        return setData(category && category[id].products), setCategoryTitle(name)
      // case 1:
      //   return setData(category && category[1].products), setCategoryTitle(name)
      // case 2:
      //   return setData(category && category[2].products), setCategoryTitle(name)
   
      // case 3:
      //   return setData(category && category[3].products), setCategoryTitle(name)
      // case 4:
      //   return setData(category && category[4].products), setCategoryTitle(name)
      // case 5:
      //   return setData(category && category[5].products), setCategoryTitle(name)
      // case 6:
      //   return setData(category && category[6].products), setCategoryTitle(name)

      default:
        return "";
    }
  };

  return (
    <>
   
      <section className="mb-20 relative">
        <div className="flex flex-col  md:flex-row justify-evenly items-center space-between bg-white md:bg-[#EDF6EA]  w-[98%] md:mx-auto md:py-4 lg:py-1 mt-3 h-auto px-16  rounded-lg   ">
          <div className="max-md:hidden">
            <div className=" flex items-center gap-3">
              <p className="text-primary">100 % natural and healthy</p>
              <img
                src="assets/images/singleleaf.png"
                className="w-7 h-7"
                alt=""
              />
            </div>
            <img src="assets/images/greenline.png" className="h-4" alt="" />
            <div className="mt-3 space-y-2 lg:space-y-5">
              <p className="text-black font-bold md:text-2xl lg:text-3xl xl:text-4xl">
                Lorem ipsum dolor amet.
              </p>
             
             
                <TextTransition springConfig={presets.wobbly} className="text-primary font-bold md:text-6xl xl:text-7xl">{TEXTS[index % TEXTS.length]}</TextTransition>
            
              <p className="text-black font-bold md:text-2xl lg:text-3xl xl:text-4xl">
                Lorem, ipsum dolor.
              </p>
              <hr className="border-primary w-72" />
              <p className="md:text-sm lg:text-md  xl:text-lg text-black">
                Lorem ipsum dolor adipisicing elit. Alias, laborum. Natus, aliquid.
              </p>
            </div>
          </div>
          <div>
            <div className="md:hidden flex items-center justify-center">
              <p className="text-center text-black text-xl font-bold mt-4 ">
                Shop <span className="text-primary">Now</span>
              </p>
              {/* <img
                src="assets/images/shopfilter.png"
                className="absolute z-10 right-0 mt-5 "
                alt=""
              /> */}
            </div>

            <img
              src="assets/images/shop.png"
              alt=""
              className="  object-cover mt-2 "
            />
          </div>
          <div className="md:hidden mt-3 flex items-center">
            <img
              src="assets/images/shopside.png"
              className="absolute left-0 mr-2"
              alt=""
            />
            {/* <p className=" md:text-sm xl:text-md 2xl:text-lg font-semibold text-center text-black">
              Natural health boosting products at keerakadai ,will lead you a
              happy life
            </p> */}
          </div>
        </div>

        {/* items  */}
        {loading ? <Loader /> :
        <div>
        <div className="flex  md:justify-end items-center gap-3 md:mr-10 mt-6 text-[#00000099] scrollbar-hide  max-md:overflow-x-scroll  max-md:w-screen  ">

          {category && category.map((values, index) => {

            return (
              <p key={index} onClick={() => ComponentToggler(index, values.name)} className={` ${categoryTitle && categoryTitle === values.name ? 'text-white bg-primary' : 'bg-[#BAE5C82E] text-black/50'}   shrink-0 py-1 px-3 cursor-pointer rounded-sm`}>
                {values.name}
              </p>
            )

          })}

          {/* <div className="flex items-center bg-[#BAE5C82E]">
            <p className=" py-1 px-3  rounded-sm">Filters</p>
            <img
              src="assets/images/shopfiltericon.png"
              className="w-7 h-5 "
              alt=""
            />
          </div> */}
        </div>  

        {/* All products  */}

        <div className="max-md:hidden  relative flex">
          <div>
            <img
              src="assets/images/shopsidecolor.png"
              className="w-52 mb-10"
              alt=""
            />
          </div>
          <p className="absolute top-16 left-16 text-lg tracking-wider font-semibold">
            {categoryTitle}
          </p>
        </div>

        {/* Product card  */}
        <div className="grid gap-3 max-md:px-5 md:-mt-10 md:gap-8  max-md:mt-12 mb-24 grid-cols-2 md:grid-cols-3 mx-auto container  lg:grid-cols-3 xl:grid-cols-4">
          {data && data.map((values, index) => {
               
             
               return   <ProductCard key={index} product_count={CartData?.some((CartData) => CartData.id === values.id) ? (CartData.find(obj => obj.id === values.id)).count : 0} flag={CartData?.some((CartData) => CartData.id === values.id)} {...values} />
             
          })}

        </div>
        </div>
      }
        {/* image slider  */}

        {/* <div className="text-center flex justify-center items-center flex-col relative space-y-4 ">
          <div className="flex items-center ">
            <div className="space-y-4">
              <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-AVENIR font-medium">
                Get Greens at
                <span className="text-primary"> Keeraikadai.com</span>
              </h1>
              <p className=" max-md:hidden md:text-sm lg:text-md xl:text-lg">
                The Worlds no.1 green shop providing healthy products around the
                world.
              </p>
            </div>
            <div className="absolute right-0 max-md:hidden">
              <img
                src="assets/images/shopleaf.png"
                className=" h-32 w-auto"
                alt=""
              />
            </div>
          </div>

          <ImageFade />
          
        </div> */}

        {/* Hot Deals  */}
        {/* <div className="mt-5 relative">
          <div className="text-center ">
            <p className=" text-xl md:text-2xl lg:text-3xl xl:text-4xl font-AVENIR font-semibold">
              Hot <span className="text-[#F38454]"> Deals</span>{" "}
            </p>
            <p className="max-md:hidden">
              Get The products at unbelievable prices
            </p>
          </div>
          <img
            src="assets/images/bowlleaf.png"
            className="h-20 md:h-24 top-40 md:top-52 absolute left-0"
            alt=""
          />
          <div className="ml-24  mt-10" >
            <HotDealsCard />

          </div>

        </div> */}
          {/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-scroll lg:grid-cols-4 xl:grid-cols-5 justify-center items-center container mx-auto ml-24 md:ml-16 */}

        {/* Shop now  */}
        {/* <div className="flex flex-col justify-center items-center mt-8">
          <p className=" text-xl md:text-2xl lg:text-3xl xl:text-4xl font-AVENIR font-semibold">
            Shop <span className="text-primary">Now</span>{" "}
          </p>
          <p className="max-md:hidden">
            Get The products at unbelievable prices
          </p>
          <div className="flex  justify-center max-md:flex-col items-center mt-6 gap-10 w-11/12">

            <div className="max-md:w-10/12">
              <img src="assets/images/shopgroup.png" alt="" />

            </div>

            <div className="w-10/12 flex justify-center items-center flex-col space-y-3">
              <div className="max-md:hidden" >
                <img src="assets/images/singleleafdown.png" className="h-7 lg:h-9 absolute left-1/3 ml-10 md:ml-16 lg:ml-24" alt="" />

              </div>
              <div className="flex items-center justify-center gap-4 max-md:hidden relative">
                <img
                  src="assets/images/smallbowl.png"
                  className="h-7 lg:h-10"
                  alt=""
                />
                <p className="text-xl lg:text-2xl mb-5">
                  Fresh <span className="text-primary"> Greens</span>{" "}
                </p>
                <img src="assets/images/singleleaf1.png" className="h-5 lg:h-6 absolute right-10  -bottom-2" alt="" />

              </div>
              <div className="flex justify-center flex-col items-center  space-y-5">
                <p className=" text-sm md:text-md lg:text-lg font-AVENIR font-medium text-black">
                  A special assortment of Greeny Dip soups, now available as a
                  Pack of 3 variants. Perfect plant based drinks to partner with
                  your daily healthy Routine! This Pack contains – Ashwagandha
                  Drink, Guava Leaf Drink and Balloon vine Drink.
                </p>
                <p className=" text-sm md:text-md lg:text-lg font-AVENIR font-medium text-black">
                  A special assortment of Greeny Dip soups, now available as a
                  Pack of 3 variants. Perfect plant based drinks to partner with
                  your daily healthy Routine! This Pack contains – Ashwagandha
                  Drink, Guava Leaf Drink and Balloon vine Drink.
                </p>
                <p className=" text-sm md:text-md lg:text-lg font-AVENIR font-medium text-black">
                  with your daily healthy Routine! This Pack  contains – Ashwagandha Drink, Guava Leaf Drink and Balloon vine Drink.
                </p>
                <button onClick={()=>ScrolltoTop()} className="bg-[#35AB3912] mt-6 text-primary py-1 w-2/6 rounded-2xl max-md:hidden">
                  Go Green
                </button>

              </div>

            </div>
          </div>
        </div> */}


      </section>
      
    </>
  );
};

export default Shop;
