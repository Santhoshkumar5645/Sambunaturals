import { useState, useEffect } from "react";

import { NotificationService } from "../Service/NotificationService";
import { Api } from "../api/Apicall";
import ApiService from "../Services/ApiService";


function useFetchData(url, method, payload, id, flag, MakeaCall) {
  const [data, setData] = useState(null); //For Data setting
  const [loading, setLoading] = useState(false); //For Loading Purpose
  const [error, setError] = useState(null); //For Error Setting

  const baseUrl = url;
   //base url
   
  useEffect((url) => {
    // console.log('fetch - method')
  }, [url, id]);


  //Refetch used For Onclick or Triger Event Call Function
  const makeRequest = async (url, method, dataGive, flag) => {
    try {
      let Responsedata;

      setLoading(true)
      // const dataGet = await Api.onlineconnect(url, method, dataGive)

      switch (method) {
        case 'get':
          Responsedata = await ApiService.get(url, {})
          break;

        case 'post':
          Responsedata = await ApiService.post(url, dataGive)
          break;

        default:
          Responsedata = { data: {}, message: "Invalid AXIOS Method", status: 'true' }
          break;
      }


      setLoading(false)
      if (Responsedata.data) {
        return Responsedata

      } else {
        return [];

      }

    } catch (err) {
      NotificationService(err.response ? err.response.data.error.message : err.message, 'error')
      setLoading(false)
      throw err

    }

  };

  return { data, loading, error, makeRequest };
}

export default useFetchData;
