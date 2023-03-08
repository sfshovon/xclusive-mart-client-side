import React from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../Shared/PageTitle';
import forgetPassword from '../../assets/images/forgetPassword.png'
import useFirebase from '../../customHooks/useFirebase';

const ForgetPassword = () => {
  const { ResetPasswordError, handleEmailBlur, handleForgetPassword, } = useFirebase();

  return (
    <section data-theme="autmn" className="h-screen">
      <div className="flex justify-center">
        <PageTitle title="Forget Password"/>
      <div className="bg-gray-100 w-4/5 md:w-1/3 flex-col rounded-2xl shadow-lg p-5 items-center my-10">
        <div className="flex justify-center items-center">
          <img src={forgetPassword} className="" alt="Forget Password" />
        </div>

        <h2 className="font-bold text-2xl text-[#002D74] text-center">Forget Password?</h2>
        <h3 className="font-bold text-[#002D74] text-center my-2">Please enter your registered email</h3>
      
        <form onSubmit={handleForgetPassword} action="" className="flex flex-col gap-4">
          <input onBlur={handleEmailBlur} className="p-2 rounded-xl border" type="email" name="email" placeholder="Email"/>
          <button type="submit" className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Reset Password</button>
        </form>
        <p className="mt-2 text-md font-semibold text-red-700">{ResetPasswordError?.message}</p>
      </div>
      
      </div>
      <ToastContainer/>
    </section>
  );
};

export default ForgetPassword;