 const validateCourse = (course) => {
  const nameRegex = /^[A-Za-z0-9 ]{3,50}$/;
  const descRegex = /^.{10,500}$/;
  const durationRegex = /^[1-9][0-9]*$/;
  const urlRegex = /^(https?:\/\/)[\w.-]+\.[a-z]{2,}(\/\S*)?$/i;

  if (!nameRegex.test(course.name)) {
    return {status:false, msg:'Course name must contain only letters and spaces (min 3 chars)'};
  }

  if (!descRegex.test(course.description)) {
    return {status:false,msg:'Description must be at least 10 characters.'};
  }

  if (!durationRegex.test(course.duration)) {
    return {status:false, msg:'Duration must be a valid number (min 1).'};
  }

  if (course.link && !urlRegex.test(course.link)) {
    return {status:false,msg:'Invalid URL format.'};
  }

  if (!Array.isArray(course.topics) || course.topics.length === 0) {
    return {status:false, msg:'Please add at least one topic.'};
  }

  return {status:true};
};

export default validateCourse;