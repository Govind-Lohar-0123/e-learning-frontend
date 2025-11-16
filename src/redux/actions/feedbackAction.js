
import axios from "axios";
import { url } from "../../assets/data";
export const getAllFeedbackAction = () => async (disptach) => {
    try {
        let result = await axios.get(url + "/feedbacks",{withCredentials:true});    
         disptach({ type: "GET_ALL_FEEDBACK", payload: result.data }); }
    catch (err) {        
        return;
    }
}
export const addFeedbackAction = async (feedback) => {
    try {
        await axios.post(url +`/feedbacks/${44}`,{feedback},{withCredentials:true});}
    catch (err) { console.log(err)   }
   window.location="/"
}
