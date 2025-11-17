import { removeMsg } from "../../assets/data";
import axios from "axios";
import { url } from "../../assets/data";
import { removeAccessToken } from "../../assets/cookieActions";
export async function userLogin(user, setMessage) {
    try {
        const resp = await axios.post(url + "/login", user,{withCredentials:true});
       
        if (resp.data.status) {            
            if (resp.data.roleId== 1) { 
                window.location ="/";
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
        setMessage({ status: true, msg: err?.message });
        removeMsg(setMessage);
        return;
    }
}export const getUser= ()=> async(dispatch)=>{
    
    try {
        const resp = await axios.get(url + `/users`,{withCredentials:true});
        dispatch({type:"GET_USER",payload:resp.data});
    }
    catch (err) {
        if(err?.response.data.msg=="Access Token Expired"){
            refreshToAccessToken()
        }
       return;
    }
}
export async function userRegister(user, setMessage) {    
    try {
        const resp = await axios.post(url + "/register", user,{withCredentials:true});
        
        if (resp.data.status) {
            await getUser();
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
        var result = await axios.get(url + `/users/count`,{withCredentials:true});
        setUsersCount(result.data)
    }
    catch (err) {
        setUsersCount(0)
    }
}






export async function refreshToAccessToken() {
    
    try {
        const result=await axios.get("http://localhost:8000/refresh",{withCredentials:true});
        
    }
    catch (err) {
        if(err?.response.status==401){
            console.log(err)
            // logout();
        }
    }
}

export async function logout(){
    removeAccessToken();
    try{
        await axios.post(url +"/logout",{withCredentials:true});
     }
    catch(err){}
    window.location="/login"
}