import axios from "axios";
import { removeMsg, url } from "../../assets/data";
export const addToMyCourse = async (course_id, user_id,setMessage) => {
   
    try {
        const result=await axios.post(url + `/mycourses/${course_id}/${user_id}`,{},{withCredentials:true});
       
        setMessage({...result.data,status:true})
        removeMsg(setMessage)
       
    }
    catch (err) {
        
        return
    }
}
export const getMyAllCourses = async (search,user_id,setMyCourses) =>{
   
    try {
        const result = await axios.get(url + `/mycourses/${user_id}?search=${search}`,{withCredentials:true});
        
        setMyCourses({status:true,myCourses:result.data})
       
    }
    catch (err) {
        setMyCourses({status:false,myCourses:[]})
    }
}
export const removeMyCourse = async (course_id,user_id,navigate) => {
    
    try {
      await axios.delete(url + `/mycourses/${course_id}/${user_id}`,{withCredentials:true});
      navigate(0)
    }
    catch (err) {
       throw new Error(err.message)
    }
    
}
