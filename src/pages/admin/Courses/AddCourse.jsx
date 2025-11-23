import { useState } from 'react';
import { addCourse } from '../../../redux/actions/courseAction';
import { useNavigate } from 'react-router';
import validateCourse from '../../../validation/courseValidation.js';
import { removeMsg } from '../../../utils/common.js';
export default function AddCourse() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState({ status: false, message: '' });

  const [course, setCourse] = useState({
    topics: [],
    name: '',
    duration: '',
    description: '',
    link: '',
  });

  const [topic, setTopic] = useState('');
  function addCourseHandle(e) {
    e.preventDefault();
    let isValid = validateCourse(course);
    if (isValid.status == false) {
      setMessage({ status: true, message: isValid?.msg });
      removeMsg(setMessage);
      return;
    }
    const formData = new FormData();

    formData.append('name', course.name);
    formData.append('description', course.description);
    formData.append('duration', Number(course.duration));
    formData.append('link', course.link);
    course.topics.forEach((topic) => {
      formData.append('topics[]', topic);
    });
    if (file) formData.append('thumbnailImage', file);

    addCourse(formData, navigate);
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  function addTopicHandle(e) {
    if (topic) {
      setCourse({ ...course, course: course.topics.push(topic) });
    }
    setTopic('');
  }

  return (
    <div
      className="d-flex align-item-center my-5 mx-auto justify-content-center "
      style={{ height: '85vh', overflow: 'auto' }}
    >
      <div className="w-100">
        <h3 className="text-center p-2 bg-danger text-white ">ADD COURSE</h3>
        {message?.status ? (
          <div className="alert alert-primary" role="alert">
            {message.message}
          </div>
        ) : null}
        <form>
          <div className="card shadow" style={{ width: '100%' }}>
            <img
              src={preview}
              className="course-img mx-auto"
              style={{ objectFit: 'contain' }}
              alt="course"
            />
            <div className="p-5">
              <div className="form-group">
                <label for="courseName">Image URL</label>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  id="courseName"
                  onChange={handleFileChange}
                />
              </div>
              <div className="form-group">
                <label for="courseName">Course Name</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setCourse({ ...course, name: e.target.value })
                  }
                  className="form-control"
                  value={course?.name}
                  id="courseName"
                  placeholder="Add Course Name"
                />
              </div>
              <div className="form-group mt-3">
                <label for="courseDuration">Description</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setCourse({ ...course, description: e.target.value })
                  }
                  className="form-control"
                  value={course?.description}
                  id="courseDuration"
                  placeholder="Add Description"
                />
              </div>
              <div className="form-group mt-3">
                <label for="courseDuration">Duration in hour</label>
                <input
                  type="number"
                  onKeyDown={(e) => {
                    if (e.key === '.') e.preventDefault();
                  }}
                  onChange={(e) =>
                    setCourse({ ...course, duration: e.target.value })
                  }
                  className="form-control"
                  value={course?.duration}
                  id="courseDuration"
                  placeholder="Add Duration"
                />
              </div>
              <div className="form-group mt-3">
                <label for="courseDuration">Documentation Link</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setCourse({ ...course, link: e.target.value })
                  }
                  className="form-control"
                  value={course?.link}
                  id="courseDuration"
                  placeholder="Add Documentation Link"
                />
              </div>
              <div className="form-group mt-3">
                <label for="courseDuration"> Add Topic</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  id="courseDuration"
                  placeholder="Add Topics"
                />
                <button
                  type="button"
                  onClick={addTopicHandle}
                  className="bg-primary p-2 px-4 mx-auto my-4 text-white"
                >
                  Add Topic
                </button>
              </div>
              <div className="form-group mt-3 w-100">
                <div className="my-5 w-100">
                  <h3 className="text-center bg-danger w-100 m-auto text-white p-3 rounded">
                    Topic Which You Will Learn In {course?.name} Course
                  </h3>

                  <div className="w-75 border m-auto my-5">
                    {course?.topics?.length > 0 ? (
                      <table className="text-center table table-hover ">
                        <thead>
                          <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Topic Name</th>
                          </tr>
                        </thead>
                        <tbody>
                          {course.topics.map((topic, idx) => (
                            <tr key={idx}>
                              <th scope="row">{idx + 1}</th>
                              <td>{topic}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p className="text-center">No topics available</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <button
          type="submit"
          onClick={addCourseHandle}
          style={{ border: 'none' }}
          className="px-4 py-2 my-2 bg-primary mx-auto w-100 text-white text-center "
        >
          ADD
        </button>
      </div>
    </div>
  );
}
