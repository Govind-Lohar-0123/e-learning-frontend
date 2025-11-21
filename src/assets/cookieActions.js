export function removeRole() {
    document.cookie = `role=; expires=${new Date(0).toUTCString()}; path=/`;
}
export function setAccessToken(accessToken){
    document.cookie=`accessToken=${accessToken}`;
}
export function removeAccessToken() {
    document.cookie = `accessToken=; expires=${new Date(0).toUTCString()}; path=/`;
}export function getCookie(key) {
    const nameEQ = key + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            if (key == "user") return JSON.parse(cookie.substring(nameEQ.length));
            return cookie.substring(nameEQ.length);
        }
    }
    return null;
}
