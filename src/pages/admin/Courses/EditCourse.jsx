import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { editCourse,getCourseDetailsById } from "../../../redux/actions/courseAction";

export default function EditCourse() {
    const { course_id } = useParams();
    const [course, setCourse] = useState({status:false,course:{}});
    var [message, setMessage] = useState({ status: false, message: "" });
    const navigate=useNavigate();
    useEffect(() => {
        getCourseDetailsById(course_id,setCourse);
    }, [course_id]);
    

    function handleEditCourse(e) {
       e.preventDefault();
      
        if (course.name=="" || course.duration=="" ) {
            setMessage({ status: true, message: "Please fill all fields..." })
            return
        }
        if(course.duration <=0){
            setMessage({ status: true, message: "Duration must be positive" })
            return
        }
        editCourse(course_id, course,navigate);
    }
    return (
        <>
            {course?.status ? (
                <div className="d-flex align-item-center my-5 justify-content-center w-100 h-50">
                    <div>
                        {(message?.status) ?
                            <div className="alert alert-primary" role="alert">
                                {message.message}
                            </div>
                            : ""
                        }
                        <h3 className="text-center p-2 bg-danger text-white">UPDATE COURSE</h3>
                        <form>
                            <div className="card shadow" style={{ width: "25rem" }}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/img/${course?.course?.image_url}`}
                                    className="course-img mx-auto" style={{objectFit:"contain"}}
                                    alt="course"
                                />
                                <div className="p-5">
                                <div className="form-group">
                                    <label for="courseName">Name</label>
                                    <input type="text" className="form-control"                                         
                                    onChange={(e) => setCourse({ status:true,course:{...course.course, name: e.target.value }})}
                                    value={course.course.name} id="courseName" aria-describedby="emailHelp" placeholder="Name"/>
                                    
                                </div>
                                <div className="form-group mt-3">
                                    <label for="courseDuration">Duration</label>
                                    <input type="number" className="form-control" value={Number(course.course.duration)}
                                        onChange={(e) => setCourse({ status:true,course:{...course.course, duration: e.target.value} })} id="courseDuration" placeholder="Duration"/>
                                </div>
                               </div>
                            </div>
                            <button type="submit" onClick={handleEditCourse} style={{ border: "none" }} className="px-4 py-2 my-2 bg-primary mx-auto w-100 text-white text-center "> SUBMIT</button>
                        </form>
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
}
