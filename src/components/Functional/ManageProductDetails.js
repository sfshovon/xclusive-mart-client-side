import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageProductDetails = ({product, products, setProducts}) => {
  const {_id, item_name, item_img_url} = product;
  const handleDelete = id => {
    const proceed = window.confirm(`Are you sure you want to delete ${item_name}?`);
    if(proceed){
      const url = `https://xclusive-mart-server-side.vercel.app/allProducts/${id}`;
      fetch(url, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(data => {
        const remainingProducts = products.filter(p => p._id !== id);
        setProducts(remainingProducts);
        toast("Product Has Been Deleted", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000, 
          hideProgressBar: false, 
          closeOnClick: true, 
          pauseOnHover: true, 
          draggable: true,
          progress: undefined 
        });
      })
      .catch(error => {
        console.log(error);
        toast.error('Failed To Delete Product');
      })
    }
  }

  const navigate = useNavigate();

  const navigateToProductUpdate = id =>{
      navigate(`/updateProduct/${id}`);
  }

  return (
    <div data-theme="autumn" className="card card-compact w-48 bg-green-50 shadow-2xl mb-3 lg:w-72 md:w-64">
      <figure>
        <img src={item_img_url} className="md:h-64 md:w-64 py-2 rounded-lg" alt="Product"/>
      </figure>
      <div className="card-body text-justify">
        <div className="h-6">
          <h2 className="card-title font-bold">{item_name}</h2>
        </div>
        <div className="mt-2">
          <div className="mt-2 flex justify-center items-center gap-5">
            <button onClick={ () => handleDelete(_id)} className="bg-red-800 rounded-xl text-gray-200 py-3 px-4 hover:scale-105 duration-300 hover:text-white hover:bg-gray-800">Remove Item</button>
            <button onClick={() => navigateToProductUpdate(_id)} className="bg-teal-800 rounded-xl text-gray-200 py-3 px-4 hover:scale-105 duration-300 hover:text-white hover:bg-gray-800">Update Item</button>
          </div>  
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ManageProductDetails;