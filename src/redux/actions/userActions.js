import { removeMsg } from "../../assets/data";
import axios from "axios";
import { url } from "../../assets/data";
import { removeAccessToken } from "../../assets/cookieActions";


export async function userLogin(user, setMessage, navigate) {
  try {
    const resp = await axios.post(`${url}/login`, user, {
      withCredentials: true,
    });

    
    if (resp.data?.status) {
      const roleId = resp.data.roleId;

      
      if (roleId === 1) {
        window.location="/"
      } else {
        window.location="/admin"
      }
      return;
    }

   
    setMessage({ status: true, msg: resp.data?.msg || "Login failed" });
    removeMsg(setMessage);

  } catch (err) {const errorMsg ="Something went wrong. Please try again.";
    setMessage({ status: true, msg: errorMsg });
    removeMsg(setMessage);
  }
}

export const getUser= ()=> async(dispatch)=>{
    
    try {
        const resp = await axios.get(url + `/users`,{withCredentials:true});
        dispatch({type:"GET_USER",payload:resp.data});
    }
    catch (err) {
        dispatch({type:"GET_USER",payload:{}});
    
    }
}
export async function userRegister(user, setMessage) {    
    try {
        const resp = await axios.post(url + "/register", user,{withCredentials:true});
        
        if (resp.data.status)window.location = "/";
        else {
            setMessage({ status: true, msg: resp.data.msg });
            removeMsg(setMessage);
            return;
        }
    }
    catch (err) {const errorMsg ="Something went wrong. Please try again.";
    setMessage({ status: true, msg: errorMsg });
    removeMsg(setMessage);
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
export async function logout(){
    removeAccessToken();
    try{
        await axios.post(url +"/logout",{withCredentials:true});
     }
    catch(err){}
    window.location="/login"
}