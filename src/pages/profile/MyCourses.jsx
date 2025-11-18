import {  useSelector } from "react-redux";
import MyCourseCard from "../../components/cards/MyCourseCard";
import { useEffect, useState } from "react";
import { getMyAllCourses } from "../../redux/actions/myCourseAction";
export default function MyCoursesCourses() {
const [search, setSearch] = useState("");
    const userData=useSelector((state)=>state.userData);
    const [myCourses,setMyCourses]=useState({status:false,myCourses:[]})
    useEffect(() => {
        getMyAllCourses(search,userData.id,setMyCourses);
    }, [search,userData])
    
   
    return <div className="w-100 ">
                <div style={{ height: "85vh", overflow: "auto" }}>
                    <div
                        className="m-2 my-4 mb-5 w-50 m-auto p-2 shadow "
                    >
                        <input
                            className="form-control m-2 p-2"defaultValue={search} onChange={(e) => setSearch(e.target.value)} 
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </div>
                     {(myCourses?.status && myCourses?.myCourses?.length>0) ?
                    <div className="d-flex align-items-center justify-content-center flex-wrap mt-2 gap-4">
                        {myCourses?.myCourses.map((course, idx) => {
                            return <MyCourseCard key={idx} course={course} />
                        })}
                    </div>:<div className="text-center mx-auto my-5 ">
               <h3>There are no Courses</h3>
            </div>}
                    
                </div>
            </div> 
             
        
   
}