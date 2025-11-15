import { removeMsg } from "../../assets/data";
import axios from "axios";
import { url } from "../../assets/data";
export async function userLogin(user, setMessage) {
    try {
        const resp = await axios.post(url + "/login", user);
        console.log(resp)
        if (resp.data.status) {            
            if (resp.data.user.role_id == 0) {     // user
                window.location = "/";
            }
            else { // admin user
                window.location = "/admin";
            }
        }
        else {
            setMessage({ status: true, msg: resp.data.msg });
            removeMsg(setMessage);
            return;
        }
    }
    catch (err) {
        setMessage({ status: true, msg: "Server Error", err });
        removeMsg(setMessage);
        return;
    }
}

export const getUser= ()=>async (dispatch)=>{
    var user_id=44;
    try {
        const resp = await axios.get(url + `/users/${user_id}`);
        console.log(resp)
        dispatch({type:"GET_USER",payload:resp.data});
    }
    catch (err) {
       return;
    }
}
export async function userRegister(user, setMessage) {    try {
        const resp = await axios.post(url + "/register", user);
        console.log(resp)
        if (resp.data.status) {
            window.location = "/";
        }
        else {
            setMessage({ status: true, msg: resp.data.msg });
            removeMsg(setMessage);
            return;
        }
    }
    catch (err) {
        setMessage({ status: true, msg: "Server Error", err });
        removeMsg(setMessage);
        return;
    }
}
export const getUsersCount = async (setUsersCount) => {
    try {
        var result = await axios.get(url + `/users/count`);
        setUsersCount(result.data)
    }
    catch (err) {
        setUsersCount(0)
    }
}
