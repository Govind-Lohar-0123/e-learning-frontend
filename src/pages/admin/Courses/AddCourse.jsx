import { useState } from 'react';
import { testCourse } from '../../../assets/data';
import { addCourse } from '../../../redux/actions/courseAction';
import { useNavigate } from 'react-router';

export default function AddCourse() {
  const navigate = useNavigate();
  const [course, setCourse] = useState({
    image_url: 'ProgLang/java.png',
    topics: [],
  });
  const [topic, setTopic] = useState('');
  function addCourseHandle(e) {
    e.preventDefault();
    addCourse(testCourse, navigate);
  }

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
        <form>
          <div className="card shadow" style={{ width: '100%' }}>
            <img
              src={`${process.env.PUBLIC_URL}/img/${course.image_url}`}
              className="course-img mx-auto"
              style={{ objectFit: 'contain' }}
              alt="course"
            />
            <div className="p-5">
              <div className="form-group">
                <label for="courseName">Image URL</label>
                <input
                  type="text"
                  disabled
                  className="form-control"
                  value={course?.image_url}
                  id="courseName"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <label for="courseName">Name</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setCourse({ ...course, name: e.target.value })
                  }
                  className="form-control"
                  value={course?.name}
                  id="courseName"
                  aria-describedby="emailHelp"
                  placeholder="Name"
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
                  placeholder="Duration"
                />
              </div>
              <div className="form-group mt-3">
                <label for="courseDuration">Duration</label>
                <input
                  type="number"
                  onChange={(e) =>
                    setCourse({ ...course, duration: e.target.value })
                  }
                  className="form-control"
                  value={course?.duration}
                  id="courseDuration"
                  placeholder="Duration"
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
                  placeholder="Duration"
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
                  placeholder="Duration"
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
                    <table className="text-center table table-hover ">
                      <thead>
                        <tr>
                          <th scope="col">S.No</th>
                          <th scope="col">Topic Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        {course?.topics?.map((topic, idx) => {
                          return (
                            <tr key={idx}>
                              <th scope="row">{idx + 1}</th>
                              <td>{topic}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>{' '}
          </div>
        </form>
        <button
          type="submit"
          onClick={addCourseHandle}
          style={{ border: 'none' }}
          className="px-4 py-2 my-2 bg-primary mx-auto w-100 text-white text-center "
        >
          {' '}
          ADD
        </button>
      </div>
    </div>
  );
}
