import { Outlet } from "react-router";
import Header from "../common/Header";
import MyProfileLeftSide from "../common/MyProfileLeftSide";


export default function MyProfileLayout() {

    return (
        <>
            <Header />
            <div >
                <div className="d-flex w-100 " style={{ height: "85vh" }}>
                    <MyProfileLeftSide />
                    <Outlet />
                </div>

            </div>
        </>
    )

}