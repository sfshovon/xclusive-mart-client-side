import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../Shared/PageTitle';

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    const url = `https://xclusive-mart-server-side.vercel.app/allProducts`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
      console.log(result);
      toast("Product Has Been Added", {
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
      toast.error('Failed To Add Product');
    })
  }
  

  return (
    <section data-theme="autumn" className="h-screen">
      <div className="flex justify-center">
        <PageTitle title="Add Product"/>
      <div className="bg-gray-100 w-4/5 md:w-1/4 flex-col rounded-2xl shadow-lg p-5 items-center mt-10">
        <h2 className="font-bold text-2xl text-[#002D74] text-center">Add A Product</h2>

        {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          {/* include validation with required or other standard HTML validation rules */}
          <input className="p-2 mt-8 rounded-xl border" placeholder="Item Name" {...register("item_name", { required: true, maxLength:20 })} required/>

          <input className="p-2 rounded-xl border w-full" placeholder="Regular Price" type="number" step="any" {...register("item_price")} required/>
          <input className="p-2 rounded-xl border w-full" placeholder="Discount" type="number" step="any" {...register("item_disc_price")} required/>
          <input className="p-2 rounded-xl border w-full" placeholder="Final Price" type="number" step="any" {...register("item_final_price")} required/>
          <textarea rows="4" cols="" className="p-2 rounded-xl border w-full" placeholder="Description" {...register("item_description")} required></textarea>
          <input className="p-2 rounded-xl border w-full" placeholder="Photo URL" type="text" {...register("item_img_url")} required/>

          <button type="submit" className="bg-teal-800 rounded-xl text-gray-200 py-2 hover:scale-105 duration-300 hover:text-white hover:bg-gray-800"> Add <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon></button>
          {/* errors will return when field validation fails  */}
          {/* {errors.exampleRequired && <span>This field is required</span>} */}
        </form>

        
      </div>
      </div>
      <ToastContainer/>
    </section>
  );
};

export default AddProduct;