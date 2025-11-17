
export default function FeedbackCard({feed}) {


    return <div className="m-3">
        <div className="card text-bg-danger mb-3 " style={{ borderRadius: "2%","maxWidth":"20rem" }} >
             <div className="card-body text-center bg-primary ">
                <p className="card-text">{feed.message}
                </p>
            </div>

        </div>

    </div>
}