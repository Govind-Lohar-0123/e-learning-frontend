import { useParams } from "react-router";
import { useEffect, useState } from "react";
import {getCourseDetailsById} from "../../redux/actions/courseAction.js";
export default function CourseDetail() {
    var { course_id } = useParams();
    const [course,setCourse]=useState({status:false,course:{}});
    useEffect(() => {
        getCourseDetailsById(course_id,setCourse);
    }, [course_id])

   
    
    return (<>
        {(course.status) ?
            <div>
                <h2 className="text-center py-3">Welcome to ({course.course.name})</h2>
                <div className="w-50 m-auto">
                    <img src={`${process.env.PUBLIC_URL}/img/${course.course.image_url}`} className="w-100 h-100 card-img-top border" alt="..." />
                </div>
               
                <div className="my-5 ">
                    <h3 className="text-center bg-danger w-50 m-auto text-white p-3 rounded">Topic Which You Will Learn In {course.course.name} Course</h3>
                    <div className="w-50 border m-auto my-5">
                        <table className="text-center table table-hover ">
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Topic Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    course.course.topics.map((topic, idx) => {
                                        return (<>
                                            <tr key={idx}>
                                                <th scope="row">{idx + 1}</th>
                                                <td>{topic}</td>
                                            </tr>
                                        </>)
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            : ""
        }
    </>)
}