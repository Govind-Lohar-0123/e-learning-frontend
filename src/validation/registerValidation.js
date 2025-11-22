
import { isValidEmail, isValidPassword, isValidText } from "./regularEx";
import { removeMsg } from "../assets/data";


var passMsg = <>
    <p><strong>Password must contain:</strong></p>
    <ul>
        <li>At least one uppercase letter (A–Z)</li>
        <li>At least one lowercase letter (a–z)</li>
        <li>At least one number (0–9)</li>
        <li>Minimum 8 characters in length</li>
    </ul></>


export default async function registerValidation(user, setMessage) {
    
    for (let key in user) {

        if (user[key] == "") {
            setMessage({ status: true, msg: "Please Fill All Field..." });
            removeMsg(setMessage);
            return false;
        }
    }

    if (!isValidText(user.name)) {
        setMessage({ status: true, msg: "Please Enter Valid Name " });

    }
    else if (!isValidEmail(user.email)) {
        setMessage({ status: true, msg: "Please Enter Valid Email " });

    }
    else if (!isValidPassword(user.password) || !isValidPassword(user.conf_password)) {
        setMessage({ status: true, msg: passMsg });

    }
    else if (user.conf_password != user.password) {
        setMessage({ status: true, msg: "Password MisMatch... " });
    }
    else return true;
    removeMsg(setMessage);
    return false;
}
