import { useEffect, useState } from "react"
import FeedbackCard from "../../components/cards/FeedbackCard"
import { getAllFeedbackAction } from "../../redux/actions/feedbackAction"
export default function Feedback(){    
   const [feedbacks,setFeedbacks]=useState({status:true,feedbacks:[]})
    useEffect(()=>{
        getAllFeedbackAction(setFeedbacks);
    },[])    
      
    
    
     return <div>
           { (feedbacks?.status && feedbacks?.feedbacks?.length>0) ?
            <div>
                <h1 className="text-white text-center my-3 p-4 m-auto w-100 bg-primary ">Feedback </h1>
                <div className="d-flex flex-wrap align-itemx-center gap-4">
                    {
                        feedbacks.feedbacks.map((feed,idx)=>{
                            return (<FeedbackCard key={idx}feed={feed}/>)
                        })
                    }
                </div>
            </div>:""
                }
       </div>}