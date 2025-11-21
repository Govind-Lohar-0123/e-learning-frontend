import axios from '../../api/apiClient';
import { removeMsg } from '../../assets/data';

export const addToMyCourse = async (courseId, userId, setMessage) => {
  try {
    const result = await axios.post(`/mycourses/${courseId}/${userId}`, {});
    setMessage({ ...result.data, status: true });
    removeMsg(setMessage);
  } catch (err) {}
};

export const getMyAllCourses = async (search, userId, setMyCourses) => {
  const params = { search: search || undefined };
  try {
    const result = await axios.get(`/mycourses/${userId}`, {
      params,
    });

    setMyCourses({ status: true, myCourses: result.data });
  } catch (err) {
    setMyCourses({ status: false, myCourses: [] });
  }
};

export const removeMyCourse = async (courseId, userId, navigate) => {
  try {
    await axios.delete(`/mycourses/${courseId}/${userId}`);
    navigate(0);
  } catch (err) {
    navigate(0);
  }
};
