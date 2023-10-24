import React, { useEffect } from 'react'
import { GeoLocationService } from '../Services/GeoLocationService';
import { NotificationService } from '../Service/NotificationService';

function AuthComponent({ children }) {


    const getCorrdinates_with_api_call = () => {
        GeoLocationService.requestPermission()
            .then((permission) => {
                if (permission) {
                    GeoLocationService.getCurrentPosition()
                        .then((location) => {
                            console.log("Latitude:", location.latitude);
                            console.log("Longitude:", location.longitude);
                        })
                        .catch((error) => {
                            console.error("Error getting location:", error.message);
                        });
                } else {
                    console.log("Geolocation permission denied.");
                }
            })
            .catch((error) => {
                NotificationService(error.message,'error')
                console.error("Error requesting geolocation permission:", error.message);
            });
    }


    useEffect(() => {
        console.log('hai')
       getCorrdinates_with_api_call();
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default AuthComponent