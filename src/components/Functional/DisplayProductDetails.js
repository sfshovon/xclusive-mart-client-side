import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DisplayProductDetails = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState({});

  useEffect( () => {
    const url = `https://xclusive-mart-server-side.vercel.app/allProducts/${productID}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setProduct(data))
  },[productID]);

  const navigate = useNavigate();

  const navigateToProductPage = ( )=>{
      navigate("/products");
  }


  return (
      <section data-theme="autumn" className="bg-base-200 h-screen pt-12">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-gradient-to-r from-purple-200 to-green-200">
          <div className="mr-auto place-self-center lg:col-span-7 rounded-3xl px-6 py-4 mt-10">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Item Name: {product.item_name}</h1>
            <p className="max-w-2xl mb-2 font-semibold text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Description: {product.item_description}</p>
            <p className="max-w-2xl mb-2 font-semibold text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Regular Price: {product.item_price}$</p>
            <p className="max-w-2xl mb-2 font-semibold text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Discount: {product.item_disc_price}$</p>
            <p className="max-w-2xl mb-2 font-semibold text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Final Price: {product.item_final_price}$</p>
            <button onClick={navigateToProductPage}className="w-1/2 mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300"> Back </button>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-3xl px-6 py-4 mt-10 shadow-2xl">
            <img src={product.item_img_url} alt="item" className="rounded-lg"/>
          </div>                
        </div>
      </section>
  );
};

export default DisplayProductDetails;