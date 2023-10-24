import { NotificationService } from "../Service/NotificationService";

export class GeoLocationService {


    /**
     * Request Permission
     * @returns 
     */
    static requestPermission() {
        return new Promise((resolve, reject) => {
            if (!navigator.permissions) {
                NotificationService('Geolocation permissions API is not supported by your browser.','error')
                reject(new Error("Geolocation permissions API is not supported by your browser."));
            }

            navigator.permissions
                .query({ name: "geolocation" })
                .then((result) => {
                    if (result.state === "granted") {
                        resolve(true);
                    } else if (result.state === "prompt") {
                        resolve(
                            new Promise((resolve, reject) => {
                                navigator.geolocation.getCurrentPosition(
                                    (position) => {
                                        resolve(true);
                                    },
                                    (error) => {
                                        reject(new Error("Geolocation permission denied."));
                                    }
                                );
                            })
                        );
                    } else {
                        reject(new Error("Geolocation permission denied."));
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    /**
     * Get Current Position
     * @returns Get Latitude and Longitude in an object
     */
    static getCurrentPosition() {
        return new Promise((resolve, reject) => {

            if (!navigator.geolocation) {
                reject(new Error("Geolocation is not supported by your browser."));
            }

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    resolve({ latitude, longitude });
                },
                (error) => {
                    reject(error);
                    console.log(error)
                }
            );
        });
    }
}

// Example usage:
// GeoLocationService.requestPermission()
//     .then((permission) => {
//         if (permission) {
//             GeoLocationService.getCurrentPosition()
//                 .then((location) => {
//                     console.log("Latitude:", location.latitude);
//                     console.log("Longitude:", location.longitude);
//                 })
//                 .catch((error) => {
//                     console.error("Error getting location:", error.message);
//                 });
//         } else {
//             console.log("Geolocation permission denied.");
//         }
//     })
//     .catch((error) => {
//         console.error("Error requesting geolocation permission:", error.message);
//     });
