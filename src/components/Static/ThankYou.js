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
            <h2 className="mb-10 font-extrabold text-5xl dark:text-gray-600">
              <span className="sr-only"></span>Thank You
            </h2>
            <h4 className="mb-10 font-extrabold text-3xl dark:text-gray-600">
              <span className="sr-only"></span>{user.displayName}
            </h4>
            <h5 className="mb-5 font-bold text-xl dark:text-gray-600">
              <span className="sr-only"></span>Order has been placed
            </h5>
            <p className="text-2xl font-semibold md:text-2xl">Food will be delivered to you soon</p>
            <Link rel="noopener noreferrer" to="/" className="btn btn-success mt-10 px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Go Back To Shop</Link>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default ThankYou;