
import axios from "axios";
import { url } from "../../assets/data";
export const getAllFeedbackAction = async(setFeedbacks) => {
        try{
        let result = await axios.get(url + "/feedbacks",{withCredentials:true}); 
            setFeedbacks({status:true,feedbacks:result.data})
        }
        catch(err){
            setFeedbacks({status:false,feedbacks:[]})
        }

    
}
export const addFeedbackAction = async (feedback,user_id) => {
    try {
      await axios.post(url +`/feedbacks/${user_id}`,{feedback},{withCredentials:true});
    }
    catch (err) {    }
    window.location="/"
}
