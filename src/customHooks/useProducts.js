import { useEffect, useState } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect( () => {
    fetch('https://xclusive-mart-server-side.vercel.app/allProducts')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])
  return [products, setProducts];
};

export default useProducts;