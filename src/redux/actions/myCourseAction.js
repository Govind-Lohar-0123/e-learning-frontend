import axios from '../../api/apiClient';
import { removeMsg } from '../../utils/common';

export const addToMyCourse = async (courseId, setMessage) => {
  try {
    
    const result = await axios.post(`/courses/${courseId}`);
    setMessage({ ...result.data, status: true });
    removeMsg(setMessage);
    
  } catch (err) {}
};

export const getMyAllCourses = async (search, setMyCourses) => {
   const params = {search:search};
  
  try {
    const result = await axios.get(`/users/courses`,{params});

    setMyCourses({ status: true, myCourses: result.data });
  } catch (err) {
    
    setMyCourses({ status: false, myCourses: [] });
  }
};

export const removeMyCourse = async (courseId) => {
  try {
    await axios.delete(`/courses/${courseId}`);
    window.location.reload();
  } catch (err) {
    
  }
  
};
