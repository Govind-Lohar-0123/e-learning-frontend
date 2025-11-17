import { NavLink } from "react-router";
import { removeMyCourse } from "../../redux/actions/myCourseAction";
import { useSelector } from "react-redux";
export default function MyCourseCard({ course }) {
    const userData=useSelector((state)=>state.userData);
    function handleRemoveCourse() {
        removeMyCourse(course.id,userData.id);
    }

    return (
        <div className="card" style={{ width: "25rem" }}>
            <img src={`${process.env.PUBLIC_URL}/img/${course.image_url}`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-bold">{course.name}</h5>
                <p className="card-text">{course.description}
                </p>
            </div>
            <ul className="list-group list-group-flush text-center align-items-center" >
                <li className="list-group-item w-100"><NavLink to={course.link} className="text-deco-none"><button type="button" style={{ width: "100%" }} className="btn btn-danger  d-block text-bold" >Documentation</button></NavLink></li>
                <li className="list-group-item w-100"> <NavLink to={`/course/details/${course.id}`} className="text-deco-none"><button type="button" style={{ width: "100%" }} className="btn btn-secondary d-block text-bold">Details </button> </NavLink></li>
                <li className="list-group-item w-100"><button type="button" onClick={handleRemoveCourse} style={{ width: "100%" }} className="btn btn-primary d-block text-bold">Remove From My Course</button></li>
            </ul>
        </div>
    )
}