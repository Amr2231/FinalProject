import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { authenticationContext } from '../Context/Authontication';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import { useFormik } from 'formik'
import * as Yup from 'yup'



export default function ForgetPassword() {
    let { forgetPasswordApi, setEmail } = useContext(authenticationContext);
    const [isResetCode, setIsResetCode] = useState(false);
    let navigate = useNavigate();
    async function handleForgetPassword(values) {
        let res = await forgetPasswordApi(values);
        if (res?.data?.statusMsg === 'success') {
            setIsResetCode(true);
            setEmail(values.email);
            navigate('/VerifyResetCode')
            toast.success(res?.data?.message);
        }
        else {
            setIsResetCode(false);
            toast.error(res?.response?.data?.message ? res?.response?.data?.message : "Failed Operation");
        }
    }
    let validationMail = Yup.object({
            email: Yup.string().required('Email is required').email("invalied email"),
    })
    let formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: handleForgetPassword,
        validationSchema: validationMail,
    });
    
    return <>
        <Helmet>
            <title>Forget Password</title>
        </Helmet>
        <form onSubmit={formik.handleSubmit}>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>
    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Your Email" />
  </div>
  {formik.errors.email && formik.touched.email? <div class="flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
  <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium">{formik.errors.email}</span> 
  </div>
</div> : null}
  <div className='flex items-center gap-10'>
  <button type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Submit</button>
  <Link to={`/ResetPassword`}></Link>
  </div>
</form>
       
    </>
}


