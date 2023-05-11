import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Footer from '../Shared/Footer';
import PageTitle from '../Shared/PageTitle';

const ThankYou = () => {
  const [user] = useAuthState(auth);
  return (
    <section>
      <PageTitle title="Thank You"/>
      <div data-theme="retro" className="flex h-screen">
        <div className="container flex-col justify-center px-5 mx-auto mt-10">
          <div className="text-center">
            <h2 className="mb-10 font-extrabold text-5xl">
              <span className="sr-only"></span>Thank You
            </h2>
            <h4 className="mb-10 font-extrabold text-3xl">
              <span className="sr-only"></span>{user.displayName}
            </h4>
            <Link rel="noopener noreferrer" to="/" className="btn btn-success mt-10 px-8 py-3 font-semibold rounded">Go Back To Shop</Link>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default ThankYou;