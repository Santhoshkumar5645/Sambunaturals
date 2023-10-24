import TopNavbar from './Components/TopNavbar/TopNavbar';
import './Style/style.css';
import React, { useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import About from './Pages/About';
import Shop from './Pages/Shop';
import Nutraceuticals from './Pages/Nutraceuticals';
import Media from './Pages/Media';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import PrivatePolicy from './Pages/PrivatePolicy';
import ShippingPolicy from './Pages/ShippingPolicy';
import Terms from './Pages/Terms';
import Investor from './Pages/Investor';
import RefundPolicy from './Pages/RefundPolicy';
import WhatWeDo from './Pages/WhatWeDo';
import MyAccount from './Pages/MyAccount';
import Profile from './Pages/Profile';
import Cart from './Pages/Cart';
import ProductDetail from './Pages/ProductDetail';
import toast, { Toaster, useToasterStore } from 'react-hot-toast';
import { GeoLocationService } from './Services/GeoLocationService';
import { NotificationService } from './Service/NotificationService';
import { LocalStorageService } from './Services/LocalStorageService';
import useFetchData from './CustomHooks/useFetchData';
import { CartContext } from './Contextapi/AppContext'

function App() {
  
  document.title = "Sambu Naturals"

  const { loading, makeRequest } = useFetchData();
  const { toasts } = useToasterStore();
  const TOAST_LIMIT = 1;

  useEffect(() => {
    toasts
      .filter((t) => t.visible) // Only consider visible toasts
      .filter((_, i) => i >= TOAST_LIMIT) // Is toast index over limit
      .forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) removal without animation
  }, [toasts]);


  useEffect(() => {
    // Calculate the inactivity threshold (e.g., 7 days)
    const inactivityThreshold = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

    // Check for stored timestamp on component mount
    const storedTimestamp = sessionStorage.getItem('lastActiveTimestamp');
    const currentTime = new Date().getTime();

    if (storedTimestamp) {
      // Calculate time difference
      const timeSinceLastActivity = currentTime - parseInt(storedTimestamp);

      // Check if the user is inactive for a long time
      if (timeSinceLastActivity > inactivityThreshold) {
        // Perform actions for long inactivity (e.g., log out the user)
        logout()
        // Clear any user-related data, perform logout, etc.
      }
    }

    sessionStorage.setItem('lastActiveTimestamp', currentTime.toString());
  }, []);


  const logout = async () => {
    LocalStorageService.removeItem('userType')
    LocalStorageService.removeItem('accessToken')
    LocalStorageService.removeItem('refreshToken')

  }

  // useEffect( () => {
  //   const Distribution_id =  LocalStorageService.getItem('Distribution_id');
  //   if (Distribution_id === null) {
      
  //     handleGetLocation();

  //   }



  // }, [])



  const { CartData, RemoveOneElementFromCart, CartUpdate, PlusMinusHanlder, cartTotalUpdate, addCart_update } = useContext(CartContext)

  useEffect(() => {
    var cart_data = LocalStorageService.getItem("new_cart");
    cartTotalUpdate(cart_data);
  }, [])

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        handleSuccess,
        handleError
      );
    } else {
      // console.warn('Geolocation is not supported by your browser.');
      NotificationService('Geolocation is not supported by your browser.', 'error', 'top-right')
    }
  };

  const handleSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    // TODO CALL get distribution id Api Method
    getDistributionId(position)
  };

  const handleError = (error) => {
    NotificationService(error.message, 'error')
    // console.warn(error);
  };


  const getDistributionId = async (position) => {
    const payload = {
      "latitude": position.coords.latitude,
      "longitude": position.coords.longitude
    };
    const Response = await makeRequest('/user/verify-location', 'post', payload)

    // console.log(Response, 'location')
    if (Response.status) {
      LocalStorageService.setItem('Distribution_id', Response.data.distribution_center.id)

    }
  }


  const getToken = async () => {


    if (await LocalStorageService.getItem('accessToken') === null) {

      const Response = await makeRequest('/auth/get-token', 'get', {})
      // console.log(Response)
      if (Response.status) {
        LocalStorageService.setItem('accessToken', Response.data.accessToken)
        LocalStorageService.setItem('refreshToken', Response.data.refreshToken)
        LocalStorageService.setItem('new_cart', [])
        LocalStorageService.setItem('userType', 'guest')

      }
    }

  }



  return (
    <>
      <BrowserRouter>
        {/* <TopNavbar /> */}
        <Navbar data={CartData} />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/productdetail' element={<ProductDetail />} />

          {/* <Route path='/nutraceuticals' element={<Nutraceuticals />} /> */}
          {/* <Route path='/media' element={<Media />} /> */}
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='/investor' element={<Investor />} /> */}

          <Route path='/profile' element={<Profile />} />

          <Route path='/privacypolicy' element={<PrivatePolicy />} />
          <Route path='/shippingpolicy' element={<ShippingPolicy />} />
          {/* <Route path='/refundpolicy' element={<RefundPolicy />} /> */}
          {/* <Route path='/whatwedo' element={<WhatWeDo />} /> */}
          {/* <Route path='/myaccount' element={<MyAccount />} /> */}
          <Route path='/cart' element={<Cart />} />
          <Route path='/terms' element={<Terms />} />


        </Routes>
        <Footer />
        <Toaster/>
      </BrowserRouter>

    </>
  );
}

export default App;
