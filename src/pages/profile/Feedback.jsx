import { useState } from "react"
import { removeMsg } from "../../assets/data";
import { addFeedbackAction } from "../../redux/actions/feedbackAction";

export default function Feedback() {
    const [feedback,setFeedback]=useState("");
   const [message, setMessage] = useState({ status: false, msg: "" });
    function handleFeedback(e){
        e.preventDefault();
        if(!feedback){
            setMessage({status:true,msg:"Please Fill Field"});
            removeMsg(setMessage);
            
        }
        else{
           addFeedbackAction(feedback);
        }
        
    }
    return (
        <>
            <div className=" w-100 h-100 d-flex align-items-center justify-content-center">
                <form className="shadow p-5 w-50">
                     {(message.status) ?
                    <div class="alert alert-primary" role="alert">
                        {message.msg}
                    </div>
                    : ""
                }
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="text-bold form-label">Feedback</label>
                        <textarea class="form-control" onChange={(e)=>setFeedback(e.target.value)}defaultChecked={feedback}id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" onClick={handleFeedback}className="btn mt-4 m-auto w-50 btn-primary">Add Feedback</button>
                </form>
             </div>
        </>
    )
}