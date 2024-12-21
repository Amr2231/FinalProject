import axios from "axios";
import { createContext, useState } from "react";
export let authenticationContext = createContext();

export function AuthenticationContextProvider(props) {
const [email, setEmail] = useState('');
let headers = {
    token: localStorage.getItem('userToken'),
}
async function forgetPasswordApi(values) {
    return axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`, values, { headers })
        .then((res) => res).catch((error) => error);
}
async function resetPasswordApi(values) {
    return axios.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`, values, { headers })
        .then((res) => res).catch((error) => error);
}
return <authenticationContext.Provider value={{email,setEmail,forgetPasswordApi,resetPasswordApi}} >
    {props.children}
</authenticationContext.Provider>
}