import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard.jsx';


const ProductCards = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from your API
        fetch('your-api-endpoint')
            .then(response => response.json())
            .then(data => setProducts(data.products))
           ;
    }, []);

    return (
        <section className="text-center py-10">
            <h2 className="text-2xl font-bold mb-2">Featured Products</h2>
            <h3 className="text-xl font-semibold mb-4">BESTSELLER PRODUCTS</h3>
            <p className="text-gray-600 mb-8">Problems trying to resolve the conflict between</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 mt-6 rounded hover:bg-blue-600 transition">Daha Fazla Ürün Yükle</button>
        </section>
    );
};
export default ProductCards;