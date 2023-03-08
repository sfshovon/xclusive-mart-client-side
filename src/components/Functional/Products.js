import React, { useEffect, useState } from 'react';
import PageTitle from '../Shared/PageTitle';
import DisplayProducts from './DisplayProducts';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect( () => {
    fetch(`https://xclusive-mart-server-side.vercel.app/allProducts?page=${page}&size=${size}`)
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [page, size]);

  useEffect( () => {
    fetch('https://xclusive-mart-server-side.vercel.app/allProductsCount')
    .then(res => res.json())
    .then(data => {
      const count = data.count;
      const pages = Math.ceil(count/10);
      setPageCount(pages);
    })
  },[]);

  return (
    <section data-theme="autumn">
      <PageTitle title="Products"/>
      <div className="flex md:justify-evenly justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 my-10 md:gap-4">
          {
            products.map(product => 
               <DisplayProducts 
                product={product} 
                key={product._id}
              />
            )
          } 
        </div>
      </div>
      <div className="flex justify-center mb-5">
            {
              [...Array(pageCount).keys()].map(number => (
                <button onClick={ () => setPage(number) } className={page===number ? "btn btn-sm btn-secondary text-black rounded-full" : "btn btn-sm btn-info text-white rounded-full"}>{number + 1}</button>
              ))
            }
            {products.length>0 &&
            <select onChange={ e => setSize(e.target.value)}>
              <option value="10" selected>10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
            }
      </div>
    </section>
  );
};

export default Products;