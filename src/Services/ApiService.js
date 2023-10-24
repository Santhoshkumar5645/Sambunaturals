import axios from 'axios';
import { LocalStorageService } from './LocalStorageService';
import jwt_decode from "jwt-decode";
import dayjs from 'dayjs';
import { getTokenCall } from '../Utility';

class ApiService {
    static axiosInstance;

    /**
     * Initialize for Axios Instance for interceptor
     */
    static initialize() {
        // Create a new instance of Axios with default configurations
        this.axiosInstance = axios.create({
            baseURL: process.env.REACT_APP_SERVER_BASE_URL, // Set your API base URL here
            // timeout: 10000, // Set request timeout in milliseconds
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                // Add any common headers you need for your requests
            },
        });

        // Request interceptor: Runs before each request is sent
        this.axiosInstance.interceptors.request.use (
           async (config) =>  {
                var accessToken = LocalStorageService.getItem('accessToken');
                if(accessToken === null){
                    const data = await getTokenCall()
                    console.log(data.data);
                    LocalStorageService.setItem('accessToken',data.data.accessToken)
                    LocalStorageService.setItem('refreshToken',data.data.refreshToken)
                    LocalStorageService.setItem('new_cart', [])
                    LocalStorageService.setItem('userType', 'guest')

                    accessToken = data.data.accessToken;
                }
                if(accessToken){
                    const refreshToken = LocalStorageService.getItem('refreshToken');
                    const decoded = jwt_decode(accessToken);
                    const currentTime = dayjs().unix();
                    if (decoded.exp > currentTime) {
                        // console.log(' ++++++++++++++++') 
                        config.headers['Authorization'] = `Bearer ${accessToken}`;
                        return config;
    
                    } else {
                        //TODO MAKE JWT REFRESH TOKEN API HIT
                        // console.log('after expire ++++++++++++++++')
                        LocalStorageService.removeItem('accessToken');
                        const token = await this.refreshToken();
                        config.headers['Authorization'] = `Bearer ${token}`;
                        return config;
                    
                    }
                }else{

                    return config
                    
                }




                // You can modify the request config here, e.g., add headers, tokens, etc.

            },
            (error) => {
                // Handle request error here
                return Promise.reject(error);
            }
        );

        // Response interceptor: Runs after each response is received
        this.axiosInstance.interceptors.response.use(
            (response) => {
                // You can modify the response data here before it's returned to the caller

                return response.data;
            },
            (error) => {

                return Promise.reject(error);
            }
        );
    }

    /**
     * AXIOS GET METHOD
     * @param {*} endpoint 
     * @param {*} params 
     * @returns 
     */
    static async get(endpoint, params = {}) {
        try {
            const response = await this.axiosInstance.get(endpoint, { params });
            return response;
        } catch (error) {
            throw error;
        }
    }

    /**
     * AXIOS POST METHOD
     * @param {*} endpoint 
     * @param {*} data 
     * @returns 
     */
    static async post(endpoint, data = {}) {
        try {
            const response = await this.axiosInstance.post(endpoint, data);
            return response;
        } catch (error) {
            throw error;
        }
    }

    // Add other HTTP methods (PUT, DELETE, etc.) as needed...

    static refreshToken = async () => {
        try {
            // TODO GET REFRESH TOKEN
            const refreshtoke = await LocalStorageService.getItem('refreshToken');
            const payload = {
                refresh_token: refreshtoke
            }

            const Response = await this.post('/auth/refresh-token', payload)

            // TODO ONCE ALL DONE
            if (Response.status) {
                LocalStorageService.setItem('accessToken', Response.data.accessToken)
                LocalStorageService.setItem('userType', 'guest')
                LocalStorageService.setItem('refreshToken', Response.data.refreshToken)
                // window.location.reload();
            }

            return Response.data.accessToken
        }
        catch (error) {
            console.error(error)
        }
    }


}

// Initialize the Axios instance when the application starts
ApiService.initialize();

export default ApiService;
