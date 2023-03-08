import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleLogo from '../../assets/images/google.png'
import useFirebase from '../../customHooks/useFirebase';
import PageTitle from '../Shared/PageTitle';

const Login = () => {
  const { emailUser, emailLoading, emailError, signInWithGoogle, googleUser, googleLoading, googleError, handleEmailBlur, handlePasswordBlur, handleUserSignIn } = useFirebase();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  if(emailUser || googleUser){
    navigate(from, {replace: true});
  }

  return (
    <section data-theme="autumn" className="h-screen">
      <div className="flex justify-center">
        <PageTitle title="Login"/>
      <div className="bg-gray-100 w-4/5 md:w-1/4 flex-col rounded-2xl shadow-lg p-5 items-center mt-10">
        <h2 className="font-bold text-2xl text-[#002D74] text-center">Login</h2>

        <form onSubmit={handleUserSignIn} action="" className="flex flex-col gap-4">
          <input onBlur={handleEmailBlur} className="p-2 mt-8 rounded-xl border" type="email" name="email" placeholder="Email" required/>
          <div className="relative">
            <input onBlur={handlePasswordBlur} className="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password" required/>
          </div>
          <button type="submit" className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Login <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon></button>
        </form>
    
        <div className="my-5 grid grid-cols-3 items-center text-gray-400">
          <hr className="border-gray-400"/>
          <p className="text-center text-sm">OR</p>
          <hr className="border-gray-400"/>
        </div>
      
        <button onClick={() => signInWithGoogle()} className="bg-white border py-2 w-full rounded-xl flex justify-center items-center text-md hover:scale-105 duration-300 text-[#002D74]">
          <img src={googleLogo} className="h-6 w-6 mt-1 mr-1" alt="Google Logo" />
          Sign In with Google
        </button>
        <p className="mt-2 text-md font-semibold text-red-700">{emailError?.message || googleError?.message}</p>
        {
          (emailLoading || googleLoading) && <p className="mt-2 text-2xl font-semibold text-green-500">Loading</p>
        }
    
        <div className="mt-5 text-md border-b border-[#002D74] py-1 text-[#002D74]">
          <Link to="/forgetPassword" className="btn btn-ghost text-sm text-inherit font-semibold p-0 hover:text-zinc-900 hover:bg-gray-100">Forgot your password?</Link>
        </div>
    
        <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
          <p className="text-lg font-semibold ">Don't have an account?</p>
          <button onClick={() => navigate('/register')}  className="btn btn-sm border rounded-xl hover:scale-110 duration-300">Sign Up</button>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Login;