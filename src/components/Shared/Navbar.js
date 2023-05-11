import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../assets/images/logo.png';
import auth from '../../firebase.init';
import CustomLink from '../Shared/CustomLink';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  const [menu, setMenu] = useState(false);

  return (
    <nav data-theme="wireframe" className="w-full bg-teal-700 text-white shadow-lg sticky top-0 z-50">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="flex items-center justify-between gap-3">
              <img src={logo} className="h-12 w-12" alt="Logo" />
              <h2 className="text-lg font-bold uppercase">Xclusive Mart</h2>
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setMenu(!menu)}
              >
                {
                  menu
                  ? (<i className="fa-solid fa-xmark text-white h-6 w-6 flex justify-center items-center"></i>) 
                  : (<i className="fa-solid fa-bars text-white h-6 w-6 flex justify-center items-center"></i>)
                }
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${menu ? "block" : "hidden"}`}> {/* Menu For Mobile Devices */}
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="md:ml-4">
                <CustomLink to="/" className="no-underline font-bold md:border-none md:mx-5 md:p-0 md:text-l p-2"> 
                <span className="hover:text-green-300"> Home </span> 
                </CustomLink>
              </li>
              <li className="md:ml-4">
                <CustomLink to="/products" className="no-underline font-bold md:border-none md:mx-5 md:p-0 md:text-lg p-2"> 
                  <span className="hover:text-green-300"> Products </span> 
                </CustomLink>
              </li>
              {
                user ?
                <>
                  <li className="md:ml-4">
                  <CustomLink to="/addProduct" className="no-underline font-bold md:border-none md:mx-5 md:p-0 md:text-lg p-2"> 
                    <span className="hover:text-green-300"> Add Product </span> 
                  </CustomLink>
                  </li>
                  <li className="md:ml-4">
                  <CustomLink to="/manageProducts" className="no-underline font-bold md:border-none md:mx-5 md:p-0 md:text-lg p-2"> 
                    <span className="hover:text-green-300"> Manage Products </span> 
                  </CustomLink>
                </li>
                </>
                :
                ""
              }
              { 
                user && user.emailVerified
                ?
                <span className="group relative inline-block">
                  <button className="inline-flex items-center rounded py-2 px-4 font-semibold">{user.displayName}</button>
                  <ul className="absolute hidden pt-1 group-hover:block bg-teal-700 text-white w-full text-center shadow-2xl shadow-gray-800">
                    <li className="md:ml-4 mb-2">
                      <CustomLink onClick={handleSignOut} className="no-underline font-bold md:border-none md:mx-5 md:p-0 md:text-l p-2"> 
                        <span className="hover:text-gray-200 hover:border-b-2 hover:border-teal-500 hover:animation-ease-in-out hover:animatoin-pulse hover:duration-500 hover:text-xl"> Logout </span> 
                      </CustomLink>
                    </li>
                  </ul>
                </span>
                : 
                <li className="md:ml-4">
                  <CustomLink to="/login" className="no-underline font-bold md:border-none md:mx-5 md:p-0 md:text-l p-2"> 
                  <span className="hover:text-teal-900 hover:border-b-2 hover:border-teal-500 hover:animation-ease-in-out hover:animatoin-pulse hover:duration-500 hover:text-xl"> Sign In </span> 
                  </CustomLink>
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;