import OnlineConnect from "./OnlineConnect";

export class ApiCall{
    
    static getApiDetails = async(url,method,payload) =>{
      

        //If Method Get 
        if(method==="get")
        {
            const ResponseData = await OnlineConnect.GetMethod(url);
        
            if(ResponseData.status !== 200){
               //alert(ResponseData.response.data.error);
            }else{

               return ResponseData;
            }
        }
        else{

            const ResponseData = await OnlineConnect.PostMothod(url,payload)
            if(!ResponseData.status ){
                alert(ResponseData.message);
            }else{
               return ResponseData;
            }
        }
      
    }

      

    
}