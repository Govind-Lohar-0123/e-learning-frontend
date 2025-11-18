import { NavLink, useNavigate } from "react-router";
import { deleteCourse } from "../../redux/actions/courseAction";
export default function AdminCourseCard({ course }) 
{    
    const navigate=useNavigate();
   function handleDeleteCourse() {
    deleteCourse(course.id,navigate);
   
}

    return (
        <div className="card shadow" style={{ width: "25rem" }}>
             
            <img src={`${process.env.PUBLIC_URL}/img/${course.image_url}`} className="course-img mx-auto`" style={{objectFit:"contain"}} lt="..." />
            <div className="card-body">
                <h5 className="card-title text-bold">{course.name}</h5>
                <p className="card-text">{course.description} </p>
                <span className="card-text">Duration : {course.duration} Hour</span>
            </div>
            <ul className="list-group list-group-flush text-center align-items-center" >
                <li className="list-group-item w-100"><NavLink to={`/admin/courses/edit/${course.id}`} className="text-deco-none"><button type="button" style={{ width: "100%" }} className="btn btn-danger  d-block text-bold" >Edit</button></NavLink></li>
                <li className="list-group-item w-100"> <button type="button" onClick={handleDeleteCourse} style={{ width: "100%" }} className="btn btn-secondary d-block text-bold">Delete </button> </li>
            </ul>        </div>
    )
}