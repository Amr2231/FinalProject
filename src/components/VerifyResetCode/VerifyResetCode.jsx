import axios from 'axios';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';



export default function VerifyResetCode() {
  const navigate = useNavigate();  
  async function verifyResetCode(code) {
    try {
      const response = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", { resetCode: code });
      toast.success("Reset code verified successfully!");
       navigate("/resetPassword") 
    } catch (error) {
      toast.error("Invalid reset code. Please try again.");
    }
  }
  const formik = useFormik({
    initialValues: {
      resetCode: '',
    },
    validationSchema: Yup.object({
      resetCode: Yup.string()
        .required("Reset code is required")
    }),
    onSubmit: (values) => {
      verifyResetCode(values.resetCode);
    },
  });

  return (
<>



<form className="mb-[23.5rem]" onSubmit={formik.handleSubmit}>
<div className="mb-5">
<label htmlFor="resetCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">resetCode</label>
<input  onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.resetCode} type="text" id="resetCode" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Your resetCode" />
</div>
{formik.errors.resetCode && formik.touched.resetCode? <div class="flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
<svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
</svg>
<span class="sr-only">Info</span>
<div>
<span class="font-medium">{formik.errors.resetCode}</span> 
</div>
</div> : null}
<div className='flex items-center gap-10'>
<button  type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Submit</button>
</div>
</form>
</>

  );
}
