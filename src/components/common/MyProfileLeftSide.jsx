import { NavLink } from "react-router";


export default function LeftSide() {



    return (
        <>
            <div className="bg-success p-3  h-100" style={{  maxWidth: "300px" }}>
                <div className="m-2">
                    <div className="w-100  m-auto " style={{ height: "250px" }}  >
                        <img style={{ borderRadius: "100%" }} src={`${process.env.PUBLIC_URL}/img/bg1.png`} className="w-100 h-75 m-auto d-block" alt="" />

                    </div>
                    <div className="mt-5">
                        <ul className="shadow list-group d-flex flex-dir-col align-items-space-between gap-3">
                            <NavLink to="/profile"className="text-bold list-group-item bg-primary">Profile</NavLink>
                            <NavLink to="mycourses"className="text-bold list-group-item bg-primary">My Courses</NavLink>
                           
                           
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}