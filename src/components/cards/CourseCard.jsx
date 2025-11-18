import { NavLink } from "react-router";
import { addToMyCourse } from "../../redux/actions/myCourseAction";
import { useSelector } from "react-redux";
import { useState } from "react";
export default function CourseCard({ course }) {
    const userData=useSelector((state)=>state.userData);
    const [message,setMessage]=useState({status:false,message:""});
    function handleAddToMyCourse() {
        addToMyCourse(course.id,userData.id ,setMessage);
    }
    return (
        <div className="card" style={{ width: "25rem" }}>
            {(message.status) ?
                    <div class="alert alert-primary" role="alert">
                        {message.msg}
                    </div>
                    : ""
                }
            <div className="">
                <img src={`${process.env.PUBLIC_URL}/img/${course.image_url}`} className="course-img mx-auto`" style={{objectFit:"contain"}} alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title text-bold">{course.name}</h5>
                <p className="card-text">{course.description}</p>
                <span>Duration : {course.duration} Hour</span>
            </div>
            <ul className="list-group list-group-flush text-center align-items-center" >
                <li className="list-group-item w-100"><NavLink to={course.link} className="text-deco-none"><button type="button" style={{ width: "100%" }} className="btn btn-danger  d-block text-bold" >Documentation</button></NavLink></li>
                <li className="list-group-item w-100"> <NavLink to={`/courses/${course.id}`} className="text-deco-none"><button type="button" style={{ width: "100%" }} className="btn btn-secondary d-block text-bold">Details </button> </NavLink></li>
                <li className="list-group-item w-100"><button type="button" onClick={handleAddToMyCourse} style={{ width: "100%" }} className="btn btn-primary d-block text-bold">Add To My Course</button></li>
            </ul>
        </div>
    )
}