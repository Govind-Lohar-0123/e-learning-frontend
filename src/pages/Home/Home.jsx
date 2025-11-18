
import Background from "../../components/common/Background.jsx";
import Courses from "../course/Courses.jsx";
export default function Home() {

    return <div>
        <div className="bg-dark text-white py-2 ">
            <marquee behavior="scroll" direction="left" style={{ fontSize: "1.2rem" }}>
                🎓 Welcome to <span className="text-warning fw-bold">iSchool</span> — Learn, Build, and Grow!
            </marquee>
        </div>
        <Background img={"bg1"} />
        <Courses />
    
      
     </div>
}