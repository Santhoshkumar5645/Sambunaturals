
import axios from "axios";
// import { REACT_APP_API_URL } from "../Utility/constant";
import { NotificationService } from "../Service/NotificationService";
import { LocalStorageService } from "../Services/LocalStorageService";

const headerdata = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
}

const TokenHeader = (token) => {
    const TokenHead = {
            'Accept': 'application/json',
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Authorization': 'Bearer ' + token
    }

    return TokenHead
}


export class Api {

    
    /**
     * bestDealProducts
     * @param {*} url
     * @param {*} payload
     * @param {*} method
     */
    static onlineconnect = async (url, method, payload) => {
        try {

            //TODO Check Local Storage access token
            const token = await LocalStorageService.getItem('accessToken')
            if (token) {

                var headers = {
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'Authorization': `Bearer ${token}`
                }

            }
            else {

                var headers = {
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                }


            }
            const HEAD = await token ? TokenHeader(token) : headerdata;
            let response;

            switch (method) {
                case 'post':
                     response = await axios.post(process.env.REACT_APP_SERVER_BASE_URL + url, payload, {headers})
                    break;
                case 'get':
                     response = await axios.get(process.env.REACT_APP_SERVER_BASE_URL + url, {headers})
                    break;
            
                default:
                    response = []
                    break;
            }

            return response

        } catch (error) {
            NotificationService(error.response ? error.response.data.error.message : error.message, 'error')
            return error
        }
    };





}

