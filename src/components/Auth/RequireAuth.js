import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle';
import verifyEmail from '../../assets/images/verifyEmail.jpg'

const RequireAuth = ({children}) => {
  const [user] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification] = useSendEmailVerification(
    auth
  );

  if(!user){
    return <Navigate to="/login" state={{ from: location }} replace> </Navigate>
  }
  
  if(user.providerData[0]?.providerId === 'password' && !user.emailVerified){
    return <div data-theme="autumn" className="h-screen bg-teal-900">
      <PageTitle title="Authentication Required"/>
      <div className="flex justify-center items-center m-0">
        <h3 className="text-3xl text-white font-semibold mt-5">Your Email Has Not Been Verified Yet</h3>
      </div>
      <div className="flex justify-center items-center mt-3">
        <img src={verifyEmail} alt="Verify Email" />
      </div>
      <div className="flex justify-center items-center">
      <button
          className="btn btn-primary my-5 font-bold"
          onClick={async () => {
            const success = await sendEmailVerification();
            if (success) {
              toast('Email verification sent');
            }
          }}
        > Resend Verification Email
        </button>
      </div>
      <ToastContainer/>
    </div>
  }

  return children;
};

export default RequireAuth;