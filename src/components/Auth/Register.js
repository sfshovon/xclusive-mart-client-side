import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import googleLogo from '../../assets/images/google.png'
import useFirebase from '../../customHooks/useFirebase';
import PageTitle from '../Shared/PageTitle';

const Register = () => {

  const { error, user, updateError, handleEmailBlur, handlePasswordBlur, handleConfirmPasswordBlur,handleCreateUser } = useFirebase();
  
  const navigate = useNavigate();
  
  if(user){
    navigate('/');
  }

  return (
    <section data-theme="autumn" className="h-screen">
      <div className="flex justify-center">
        <PageTitle title="Sign Up"/>
        <div className="bg-gray-100 w-4/5 md:w-1/4 flex-col rounded-2xl shadow-lg p-5 items-center my-10">
          <h2 className="font-bold text-2xl text-[#002D74] text-center">Sign Up</h2>
      
          <form onSubmit={handleCreateUser} action="" className="flex flex-col gap-4">
            <input className="p-2 mt-5 rounded-xl border" type="text" name="name" placeholder="Name"/>
            <input onBlur={handleEmailBlur} className="p-2 rounded-xl border" type="email" name="email" placeholder="Email" required />
            <div className="relative">
              <input onBlur={handlePasswordBlur} className="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password" required/>
              <input onBlur={handleConfirmPasswordBlur} className="p-2 rounded-xl border w-full mt-3" type="password" name="confirm-password" placeholder="Confirm Password" required/>
            </div>
            <button type="submit" className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Create Account</button>
          </form>
          <p className="mt-2 text-md font-semibold text-red-700">{error || updateError}</p>
          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400"/>
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400"/>
          </div>
      
          <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
            <img src={googleLogo} className="h-6 w-6 mt-1 mr-1" alt="Google Logo" />
            Sign Up with Google
          </button>
      
          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74] py-1">
            <p className="text-lg font-semibold">Already have an account?</p>
            <button onClick={() => navigate('/login')}  className="btn btn-sm border rounded-xl hover:scale-110 duration-300">Sign In</button>
          </div>
        </div>
        <ToastContainer/>
      </div>
    </section>
  );
};

export default Register;