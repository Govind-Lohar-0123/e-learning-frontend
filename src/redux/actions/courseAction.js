import axios from "axios";
import {  removeMsg, url } from "../../assets/data";
// FOR COURSES 



export const addCourse = async (course,navigate) => {
    try {
       await axios.post(url + "/courses", course,{withCredentials:true});
       navigate("/admin/courses");
    }
    catch (err) {
        throw new Error("Failed to Add Course")
    }
}
export const deleteCourse = async (course_id,navigate) => {
    try {
        await axios.delete(url + `/courses/${course_id}`, { withCredentials: true });
        navigate(0)
    }
    catch (err) {
         throw new Error("Failed to delete course");
    }
}

export const editCourse = async (course_id, course,navigate) => {

    try {
        await axios.put(url + `/courses/${course_id}`, course,{withCredentials:true});
        navigate("/admin/courses");
        
    }
    catch (err) {
        
    }
}
export const getAllCourses = async (search,setAllCourses) => {
    try {
        
        var result = await axios.get(url + `/courses?search=${search}`,{withCredentials:true});
        
        setAllCourses({status:true,courses:result.data});
        
    }
    catch (err) {
       setAllCourses({status:false,courses:[]});
    }
}
export const getCourseDetailsById = (course_id) => async (disptach) => {
    try {
        var result = await axios.get(url + `/courses/${course_id}`,{withCredentials:true});  
      
        disptach({ type: "GET_COURSE_DETAIL_BY_ID", payload: result.data })
    }
    catch (err) {
        disptach({ type: "GET_COURSE_DETAIL_BY_ID", payload: {} })
    }
}
export const getCoursesByLimit = async(limit,search,setCourses) =>{
    
     try {
        var result = await axios.get(url + `/courses/limit/${limit}?search=${search}`,{withCredentials:true});       
       
        setCourses({status:true,courses:result.data});
    }
    catch (err) {
        
        setCourses({status:false,courses:[]})
    }
}
export const getCoursesCount = async (setCoursesCount) => {
    try {
        var result = await axios.get(url + `/courses/count`,{withCredentials:true});    
        setCoursesCount(result.data);
    }
    catch (err) {
        setCoursesCount(0)
    }
}