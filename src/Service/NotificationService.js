import { toast } from "react-hot-toast"

export const NotificationService = (msg, type, direction ,id ) => {
    toast[type](msg,{
       position: direction && direction,
       id: id ? id : '' 
    })
}
