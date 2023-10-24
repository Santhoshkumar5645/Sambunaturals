import React from "react";
import GoogleMapReact from "google-map-react";

// import {GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

//   const coordinates = { lat: 0, lng: 0 };
  return (
    <>
         <div style={{ height: "100vh", width: "100%" }}>
       <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCta901X1NnuPcvi6lBMVbbLpj4rF4O75M" }}
          defaultCenter={defaultProps.center}
          center={defaultProps.zoom}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={""}
        >
    </GoogleMapReact>
      </div>
    </>
    
  
   
  );
};

export default Map;
