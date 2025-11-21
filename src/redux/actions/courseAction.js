import axios from '../../api/apiClient';

// FOR COURSES
export const addCourse = async (course, navigate) => {
  try {
    await axios.post('/courses', course, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    navigate('/admin/courses');
  } catch (err) {}
};

export const deleteCourse = async (courseId, navigate) => {
  try {
    await axios.delete(`/courses/${courseId}`);
    navigate(0);
  } catch (err) {}
};

export const editCourse = async (courseId, course, navigate) => {
  try {
    await axios.put(`/courses/${courseId}`, course);
    navigate('/admin/courses');
  } catch (err) {}
};

export const getAllCourses = async (search, setAllCourses) => {
  try {
    const result = await axios.get(`/courses?search=${search}`);

    setAllCourses({ status: true, courses: result.data });
  } catch (err) {
    setAllCourses({ status: false, courses: [] });
  }
};

export const getCourseDetailsById = async (courseId, setCourse) => {
  try {
    const result = await axios.get(`/courses/${courseId}`);
    setCourse({ status: true, course: result.data });
  } catch (err) {
    setCourse({ status: true, course: {} });
  }
};

export const getCoursesByLimit = async (limit, search, setCourses) => {
  const params = {
    search:search || undefined
  };
  try {
    const result = await axios.get(`/courses/limit/${limit}`, {
      params,
    });

    setCourses({ status: true, courses: result.data });
  } catch (err) {
    setCourses({ status: false, courses: [] });
  }
};

export const getCoursesCount = async (setCoursesCount) => {
  try {
    const result = await axios.get('/courses/count');
    setCoursesCount(result.data);
  } catch (err) {
    setCoursesCount(0);
  }
};
