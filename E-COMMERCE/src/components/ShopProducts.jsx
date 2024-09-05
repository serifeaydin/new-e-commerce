import React, { useEffect, useState } from 'react';

import axios from 'axios';
import ProductCard from '../components/ProductCard';


const ProductCards = () => {
   
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      axios.get('https://workintech-fe-ecommerce.onrender.com/products')
        .then(response => {
          console.log(response.data);  // Gelen veri obje mi yoksa dizi mi?
          if (Array.isArray(response.data)) {
            setProducts(response.data);
          } else {
            setProducts(response.data.products);  // Eğer ürünler 'products' içinde olsaydı.
          }
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
      <div className="min-h-screen py-10 px-10 bg-gray-100">
        <div className="max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => {
              const salePrice = (product.price * 0.8).toFixed(2); // Yüzde 20 indirim ve iki ondalık basamak
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.images[0].url}
                  title={product.name}
                  description={product.description}
                  price={product.price}
                  rating={product.rating}
                  salePrice={salePrice}  // Hesaplanan indirimli fiyat
                />
              );
            })}
          </div>
          <div className="flex justify-center mt-12">
            <button className="bg-[#23A6F0] text-white px-4 py-2 rounded">LOAD MORE PRODUCTS</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProductCards;