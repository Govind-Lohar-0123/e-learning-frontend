import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import FeedbackCard from "../../components/cards/FeedbackCard"
import { getAllFeedbackAction } from "../../redux/actions/feedbackAction"
export default function Feedback(){    var disptach=useDispatch();
    useEffect(()=>{
        disptach(getAllFeedbackAction());
    },[disptach])    
    var data=useSelector((state)=>state.feedbackData);   
    
     return <div>
           { (data.status && data.feedbacks.length!=0) ?
            <div>
                <h1 className="text-white text-center my-3 p-4 m-auto w-100 bg-primary ">Feedback </h1>
                <div className="d-flex flex-wrap align-itemx-center gap-4">
                    {
                        data.feedbacks.map((feed,idx)=>{
                            return (<FeedbackCard key={idx}feed={feed}/>)
                        })
                    }
                </div>
            </div>:""
                }
       </div>}