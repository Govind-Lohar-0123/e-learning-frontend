import { NavLink } from "react-router";
import { getCookie } from "../../assets/cookieActions";
export default function Navbar() {
    
    var isLogin=(getCookie("accessToken"))? true : false;
    

    return (
        <>
            <header className="flex-wrap">
                <div className="d-flex gap-2">
                    <h1 className="text-white text-bold">iSchool</h1>
                    <span className="text-white text-bold">Learn and Implements</span>
                </div>
                <div className="d-flex align-items-center  " >
                    <div className="" >
                        <nav>
                            <ul className="nav">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link active text-bold" aria-current="page" href="#">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/all/courses" className="nav-link text-bold" href="#">Courses</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/premium/courses" className="nav-link text-bold" href="#">Future Scope</NavLink>
                                </li>

                            </ul>
                        </nav>
                    </div>
                    <div className="">
                        <ul className="nav">

                            {(isLogin) ? <>
                                <li className="nav-item login ">
                                    <NavLink to="/login" className="nav-link active " aria-current="page" href="#">
                                        <button type="button" className="btn btn-light text-bold px-5">LOGIN</button>
                                    </NavLink>
                                </li>

                                <li className="nav-item login ">
                                    <NavLink to="/register" className="nav-link active" aria-current="page" href="#">
                                        <button type="button" className="btn btn-light text-bold px-5">REGISTER</button>
                                    </NavLink>
                                </li>
                            </>
                                :
                                <> 
                                   {(isLogin && getCookie("role")=="admin")?

                                    <li className="nav-item login ">
                                        <NavLink to="/admin" className="nav-link active " aria-current="page" href="#">
                                            <button type="button" className="btn  bg-primary text-white text-bold px-5">ADMIN </button>
                                        </NavLink>
                                    </li> :""
                                    }
                                    <li className="nav-item login ">
                                        <NavLink to="/myprofile" className="nav-link active " aria-current="page" href="#">
                                            <button type="button" className="btn  bg-primary text-white text-bold px-5">MYPROFILE </button>
                                        </NavLink>
                                    </li>

                                    <li className="nav-item login ">
                                        <NavLink className="nav-link active" aria-current="page" href="#">
                                            <button type="button" className="btn btn-light text-bold px-5">LOGOUT</button>
                                        </NavLink>
                                    </li>
                                </>

                            }

                        </ul>
                    </div>
                </div>

            </header>
        </>
    )

}