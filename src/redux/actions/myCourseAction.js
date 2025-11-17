import axios from "axios";
import { url } from "../../assets/data";
export const addToMyCourse = async (course_id, user_id) => {
   
    try {
         await axios.post(url + `/mycourses/${course_id}/${user_id}`,{},{withCredentials:true});
        
        window.location = "/myprofile/mycourses"
    }
    catch (err) {
    }
}
export const getMyAllCourses = async (search,user_id,setMyCourses) =>{
    console.log(user_id)
    try {
        const result = await axios.get(url + `/mycourses/${user_id}?search=${search}`,{withCredentials:true});
        console.log(result)
        setMyCourses({status:true,myCourses:result.data})
       
    }
    catch (err) {
        setMyCourses({status:false,myCourses:[]})
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
