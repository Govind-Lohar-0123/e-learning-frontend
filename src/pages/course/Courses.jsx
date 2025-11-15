import { NavLink } from "react-router";
import CourseCard from "../../components/cards/CourseCard"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCoursesByLimit } from "../../redux/actions/courseAction";
import { CircularProgress } from "@mui/material";
export default function Courses() {
    const [search, setSearch] = useState("");
    var dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCoursesByLimit(5,search));
    }, [dispatch,search])    
    var data = useSelector((state) => state.courseData);
   console.log(data)
    return <div className="p-5">
        {(data.status) ?
            <div>
                <div className="m-2 my-4 mb-5 w-25 m-auto">
                    <input className="form-control me-2" defaultValue={search} onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
                </div>
                <div className="d-flex align-items-center justify-content-center flex-wrap mt-2 gap-4">
                    {(data.courses.map((course, idx) => {
                        return <CourseCard key={idx} course={course} />
                    }))}
                </div>
                <div>
                    <NavLink to="all-courses" style={{ textDecoration: "none" }}><button type="button" className="btn btn-primary text-bold mx-auto d-block w-50 my-5" >View All Courses</button></NavLink>
                </div>
            </div>
            : <div>
                <CircularProgress />
            </div>
        }
    </div>
}