import Background from "../../components/common/Background"
import CourseCard from "../../components/cards/CourseCard"
import { getAllCourses } from "../../redux/actions/courseAction";
import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
export default function AllCourses() {
    const [search, setSearch] = useState("");
    const [courses,setCourses]=useState({status:false,courses:[]});
    useEffect(() => {
        getAllCourses(search,setCourses);
    }, [search,setCourses])
    
    
    return <div>
        {(courses?.status) ?
            <div className="p-5">
                <div>
                    <Background img={"bg2"} />
                </div>
                <div>
                    <div className="m-2 my-4 mb-5 w-25 m-auto">
                        <input className="form-control me-2" onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
                    </div>
                    <div className="d-flex align-items-center justify-content-center flex-wrap mt-2 gap-4">
                        {(courses?.courses.map((course, idx) => {
                            return <CourseCard key={idx} course={course} />
                        }))}
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            : <div>
                <CircularProgress />
            </div>}
    </div>
}