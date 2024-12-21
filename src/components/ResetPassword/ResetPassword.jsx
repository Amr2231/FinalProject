import { useContext, useState } from "react";
import { authenticationContext } from "../Context/Authontication";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup'
import { Helmet } from 'react-helmet'
import toast from 'react-hot-toast';
import { useFormik } from "formik";

    export default function ResetPassword() {

        let { resetPasswordApi, email } = useContext(authenticationContext);
        const [isResetCode, setIsResetCode] = useState(false);
        let navigate = useNavigate();
        async function handleResetPassword(values) {
            
            let res = await resetPasswordApi(values);
            if (res?.data?.token) {
                setIsResetCode(true);
                toast.success('Password reset successfully');
                navigate('/')
            }
            else {
                setIsResetCode(false);
                toast.error(res?.response?.data?.message ? res?.response?.data?.message : "Failed Operation");
            }
            
        }
        
        let validationMail = Yup.object({
            email: Yup.string().required("email is required").email("email is invalid"),
            newPassword: Yup.string().required("password is required").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'password must have spiacl characters, capital letters, small letters, numbers, and min 8 characters'),
        });
    
        let formik1 = useFormik({
            initialValues: {
                email: email!=null? email : '',
            },
            onSubmit: handleResetPassword,
            validationSchema: validationMail,
        });
    
    
        return <>
            <Helmet>
                <title>Reset Password</title>
            </Helmet>
            <div className="w-75 mx-auto py-5 my-5">
                <h3 className='mb-4'>Forget Password : </h3>

                <form className="mb-40" onSubmit={formik1.handleSubmit}>
                <div className="mb-7">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>
    <input readOnly  onBlur={formik1.handleBlur} onChange={formik1.handleChange} value={formik1.values.email} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Your Email" />
  </div>
  {formik1.errors.email && formik1.touched.email? <div class="flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
  <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium">{formik1.errors.email}</span> 
  </div>
</div> : null}

<div className="mb-5">
    <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">newPassword</label>
    <input onBlur={formik1.handleBlur} onChange={formik1.handleChange} value={formik1.values.newPassword} type="password" id="newPassword" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Your newPassword" />
  </div>
  {formik1.errors.newPassword && formik1.touched.newPassword? <div class="flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
  <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium">{formik1.errors.newPassword}</span> 
  </div>
</div> : null}

<div className='flex items-center gap-10'>
<button  type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Submit</button>
</div>
</form>

    
            </div>
        </>
    }