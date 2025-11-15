import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../../redux/actions/userActions";

export default function Profile() {
 
  var dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch])
    var user = useSelector((state) => state.userData);

    
    
    return (<>
        <div className=" w-100 h-100 d-flex align-items-center justify-content-center">
            <form className="shadow p-5 w-50">
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" value={user.name} readOnly className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="form-group my-3">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" readOnly value={user.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Role</label>
                    <input type="text" readOnly value={user.role} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

            </form>


        </div>
    </>)
}