
import { list1, list2 } from "../../assets/data.js";
import Background from "../../components/common/Background.jsx";
import Layer from "./Layer";
import Courses from "../course/Courses.jsx";
import Feedback from "../feedback/Feedback.jsx";

export default function Home() {

    return (<>
        <Background img={"bg1"} />
        <Layer list={list1} />
        <Courses />
        <Feedback/>
        <Layer list={list2} />
     </>
    )
}