import { useState } from 'react';
import auth from '../firebase.init'
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile  } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const useFirebase = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [error,setError] = useState('');
  const [signInWithEmailAndPassword,  emailUser, emailLoading, emailError] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  const [updateProfile, updateError] = useUpdateProfile(auth);
  const [sendPasswordResetEmail, ResetPasswordError] = useSendPasswordResetEmail(auth);

  const handleEmailBlur = e => {
    setEmail(e.target.value);
  }
  const handlePasswordBlur = e => {
    setPassword(e.target.value);
  }
  const handleConfirmPasswordBlur = e => {
    setConfirmPassword(e.target.value);
  }
  const handleUserSignIn = e => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }
  const handleCreateUser = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      setError("Your two passwords didn't match")
      return;
    }
    if(password.lenght > 6){
      setError("Password must contain at least 6 characters")
      return;
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({displayName: e.target.name.value })
    toast("A verification email has been sent to your account")
  }
  const handleForgetPassword = () => {
    if(email){
      sendPasswordResetEmail(email);
      toast("An email has been sent to your account")
    }
    else{
      toast("Please enter your email address")
    }
  }


  return { 
    email,setEmail,password,setPassword, confirmPassword, setConfirmPassword, error, setError,signInWithEmailAndPassword, emailUser, emailLoading, emailError, signInWithGoogle, googleUser, googleLoading, googleError, createUserWithEmailAndPassword, user, updateProfile, updateError, sendPasswordResetEmail, ResetPasswordError, handleEmailBlur, handlePasswordBlur, handleConfirmPasswordBlur, handleForgetPassword, handleUserSignIn,handleCreateUser
  }
};
export default useFirebase;