import axios from '../../api/apiClient';
import { removeMsg } from '../../utils/common';

export const addToMyCourse = async (courseId, userId, setMessage) => {
  try {
    const result = await axios.post(`/mycourses/${courseId}/${userId}`, {});
    setMessage({ ...result.data, status: true });
    removeMsg(setMessage);
  } catch (err) {}
};

export const getMyAllCourses = async (search,userId, setMyCourses) => {
   const params = {
    search:search || undefined,
   
  };
  
  try {
    const result = await axios.get(`/courses`,{params});

    setMyCourses({ status: true, myCourses: result.data });
  } catch (err) {
    setMyCourses({ status: false, myCourses: [] });
  }
};

export const removeMyCourse = async (courseId, userId) => {
  try {
    await axios.delete(`/courses/${courseId}`);
    window.location.reload();
  } catch (err) {
    
  }
  
};
