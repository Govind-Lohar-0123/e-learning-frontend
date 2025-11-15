import FeedbackCard from "../../components/cards/FeedbackCard"
export default function Feedback(){
    return (
        <>
            <div>
                <h1 className="text-white text-center my-3 p-4 m-auto w-100 bg-primary ">Feedback </h1>
                <div className="d-flex flex-wrap align-itemx-center gap-4">
                    {
                        [1,2,3,4,5].map((feed,idx)=>{
                            return (<FeedbackCard key={idx}feed={feed}/>)
                        })
                    }
                </div>
            </div>
        </>
    )
}