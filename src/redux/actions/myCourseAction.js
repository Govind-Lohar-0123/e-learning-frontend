import axios from "axios";
import { url } from "../../assets/data";
export const addToMyCourse = async (course_id, user_id) => {
    try {
         await axios.post(url + `/mycourses/${course_id}/${user_id}`,{withCredentials:true});
        
        window.location = "/myprofile/mycourses"
    }
    catch (err) {
    }
}
export const getMyAllCourses = (search) => async (disptach) => {
    var user_id = 44;
    try {
        var result = await axios.get(url + `/mycourses/${user_id}?search=${search}`,{withCredentials:true});
       
        disptach({ type: "GET_MY_ALL_COURSES", payload: result.data })
    }
    catch (err) {
       
        disptach({ type: "GET_MY_ALL_COURSES", payload: [] })
    }
}
export const removeMyCourse = async (course_id,user_id) => {
    
    try {
      await axios.delete(url + `/mycourses/${course_id}/${user_id}`,{withCredentials:true});
    }
    catch (err) {
    }
    window.location = "/myprofile/mycourses"
}
