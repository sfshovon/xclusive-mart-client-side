import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProduct = () => {
  const {productID} = useParams();
 
  const [itemName, setItemName] = useState("");
  const [itemRegularPrice, setItemRegularPrice] = useState("");
  const [itemDiscountPrice, setItemDiscountPrice] = useState("");
  const [itemFinalPrice, setItemFinalPrice] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPhotoURL, setItemPhotoURL] = useState("");

  useEffect( () => {
    const url = `https://xclusive-mart-server-side.vercel.app/allProducts/${productID}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setItemName(data?.item_name)
      setItemRegularPrice(data?.item_price)
      setItemDiscountPrice(data?.item_disc_price)
      setItemFinalPrice(data?.item_final_price)
      setItemDescription(data?.item_description)
      setItemPhotoURL(data?.item_img_url)
    })
  },[productID]);
  

  const handleUpdateProduct = e =>{
    e.preventDefault();
    const updatedProduct = {itemName, itemRegularPrice, itemDiscountPrice, itemFinalPrice, itemDescription, itemPhotoURL};
    // console.log(updatedProduct)
    // send data to the server
    const url = `https://xclusive-mart-server-side.vercel.app/allProducts/${productID}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedProduct)
    })
    .then(res => res.json())
    .then(data =>{
        console.log('success', data);
        toast("Product Has Been Updated", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000, 
          hideProgressBar: false, 
          closeOnClick: true, 
          pauseOnHover: true, 
          draggable: true,
          progress: undefined 
        });
        e.target.reset();
      })
      .catch(error => {
        console.log(error);
        toast.error('Failed To Update Product');
      })
    }

  return (

    <div className="bg-green-100 py-5">
    <form onSubmit={handleUpdateProduct} className="min-h-screen flex items-center">
      <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
        <div className="py-5 text-2xl font-bold text-dark bg-sky-200 text-center px-5 md:px-10">
          <h1>Update Product Information</h1>
          <h1 className="text-xl">Product: <span className="underline text-teal-600 font-semibold animate-pulse">{itemName}</span></h1>
        </div>
            
        <div className="py-12 p-10 bg-white rounded-xl">
          <div className="mb-6">
            <h1 className="text-start mr-4 text-gray-700 font-bold mb-2">Item Name</h1>
            <input type="text" name="name" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" value={itemName} onChange={(e) => setItemName(e.target.value)}/>
          </div>
          <div>
            <h1 className="text-start mr-4 text-gray-700 font-bold mb-2">Regular Price</h1>
            <input type="number" name="rPrice" step="any" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" value={itemRegularPrice} onChange={(e) => setItemRegularPrice(e.target.value)} />
          </div>
          <div>
            <h1 className="text-start mr-4 text-gray-700 font-bold mb-2">Discount</h1>
            <input type="number" name="dPrice" step="any" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" value={itemDiscountPrice} onChange={(e) => setItemDiscountPrice(e.target.value)} />
          </div>
          <div>
            <h1 className="text-start mr-4 text-gray-700 font-bold mb-2">Final Price</h1>
            <input type="number" name="fPrice" step="any" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" value={itemFinalPrice} onChange={(e) => setItemFinalPrice(e.target.value)}/>
          </div>
          <div>
            <h1 className="text-start mr-4 text-gray-700 font-bold mb-2">Description</h1>
            <input type="text" name="description" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" value={itemDescription} onChange={(e) => setItemDescription(e.target.value)}/>
          </div>
          <div>
            <h1 className="text-start mr-4 text-gray-700 font-bold mb-2">Photo URL</h1>
            <input type="text" name="pURL" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" value={itemPhotoURL} onChange={(e) => setItemPhotoURL(e.target.value)}/>
          </div>
          <button type="submit" className="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300">UPDATE PRODUCT</button>
        </div>
      </div>
    </form>
    <ToastContainer/>
    </div>
  );
};

export default UpdateProduct;