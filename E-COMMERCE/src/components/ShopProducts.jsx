import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import axios from 'axios';
import { faGrip, faListUl } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductCards = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [view, setView] = useState("grid");

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
      <section className="min-h-screen py-10 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between  items-center mb-4 mt-8">
            <p>Showing all 12 results</p>
            <div className="flex ">
              <div className="flex  mr-4">
                <button
                  onClick={() => setView("grid")}
                  className={`px-2 py-1 border ${view === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                >
                  <FontAwesomeIcon icon={faGrip} />
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`ml-2 px-2 py-1 border ${view === "list" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                >
                  <FontAwesomeIcon icon={faListUl} />
                </button>
              </div>
              <div className='pl-96'>
              <button className="px-4 py-2 bg-gray-200">Popularity</button>
              <button className="ml-2 px-4 py-2 bg-blue-500 text-white">Filter</button>
              </div>
            </div>
          </div>
          <div className={view === "grid" ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" : "grid grid-cols-1 gap-8"}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.img}
                title={product.name}
                department={product.department}
                price={product.price}
                salePrice={product.salePrice}
                view={view}
              />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <button className="bg-[#23A6F0] text-white px-4 py-2 rounded">LOAD MORE PRODUCTS</button>
          </div>
        </div>
      </section>
    );
};

export default ProductCards;