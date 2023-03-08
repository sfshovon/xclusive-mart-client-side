import React from 'react';
import { useNavigate } from 'react-router-dom';

const DisplayProducts = ({product}) => {
  const {_id, item_name, item_img_url, item_price, item_disc_price, item_final_price, item_description} = product;

  const navigate = useNavigate();

  const navigateToProductDetails = id =>{
      navigate(`/productDetails/${id}`);
  }

  return (
    <div data-theme="autumn" className="card card-compact w-48 bg-green-50 shadow-2xl mb-3 lg:w-72 md:w-64">
      <figure>
        <img src={item_img_url} className="md:h-64 md:w-64 py-2 rounded-xl" alt="Product"/>
      </figure>
      <div className="card-body text-justify">
        <div className="h-16 mb-2">
          <h2 className="card-title font-bold">{item_name}</h2>
        </div>
        <div className="mt-2">
          <h3 className="text-lg font-semibold">Regular Price: {item_price}$</h3>
          <h3 className="text-lg font-semibold">Discount: {item_disc_price}$ </h3>
          <h3 className="text-lg font-semibold">Final Price: {item_final_price}$</h3>
          <h3 className="text-lg font-semibold">Description: {item_description}</h3>
          <div className="mt-2 flex justify-center items-center">
            <button onClick={() => navigateToProductDetails(_id)} className="bg-teal-800 rounded-xl text-gray-200 py-3 px-4 font-semibold hover:scale-105 duration-300 hover:text-white hover:bg-gray-800">View Details</button>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default DisplayProducts;