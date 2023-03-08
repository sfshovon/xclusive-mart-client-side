import React from 'react';
import useProducts from '../../customHooks/useProducts';
import PageTitle from '../Shared/PageTitle';
import ManageProductDetails from './ManageProductDetails';

const ManageProducts = () => {
  const [products, setProducts] = useProducts();

  return (
    <section data-theme="autumn">
      <PageTitle title="Manage Products"/>
      <div className="flex md:justify-evenly justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 my-10 md:gap-4">
          {
            products.map(product => 
               <ManageProductDetails 
                product={product} 
                products={products}
                setProducts={setProducts}
                key={product._id}
              />
            )
          }
        </div>
      </div>
    </section>
  );
};

export default ManageProducts;