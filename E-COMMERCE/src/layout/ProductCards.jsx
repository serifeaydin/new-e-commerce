import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import axios from 'axios';

const ProductCards = () => {
   
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      axios.get('https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products')
        .then(response => {
          setProducts(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching the products', error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <div className="text-center mt-20">Loading...</div>;
    }
  
    return (
      <div className=" min-h-screen py-10">
        <div className="max-w-7xl ">
          <h1 className="text-2xl text-[#737373] font-bold text-center mb-2">Featured Products</h1>
          <h2 className="text-4xl text-center  mb-8">BESTSELLER PRODUCTS</h2>
          <p className="text-center text-[#737373] mb-12">Problems trying to resolve the conflict between</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                department={product.department}
                price={product.price}
                salePrice={product.salePrice}
              />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <button className="bg-[#23A6F0] text-white px-4 py-2 rounded">LOAD MORE PRODUCTS</button>
          </div>
        </div>
      </div>
    );
  }
    

export default ProductCards;