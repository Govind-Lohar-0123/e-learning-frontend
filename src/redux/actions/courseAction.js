import axios from '../../api/apiClient';

// FOR COURSES
export const addCourse = async (course, navigate) => {
  try {
    await axios.post('/courses', course, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    window.location.href='/admin/courses';
  } catch (err) {
     throw new Error("Add new course failed...")
  }
};

export const deleteCourse = async (courseId) => {
  try {
    await axios.delete(`/courses/${courseId}`);
      window.location.reload();
  } catch (err) {
    throw new Error("Delete course failed...")
  }
};

export const editCourse = async (courseId, course, navigate) => {
  try {
    await axios.put(`/courses/${courseId}`, course);
     window.location.href="/admin/courses"
    
  } catch (err) {
     throw new Error("Edit course failed...")
  }
};

export const getAllCourses = async (search, setAllCourses) => {

   const params = {
    search:search || undefined,
    
  };
  try {
    const result = await axios.get(`/courses`,{params});
   
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
    search:search || undefined,
    limit:limit ||0
  };
  try {
    const result = await axios.get(`/courses/limit`, {
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
