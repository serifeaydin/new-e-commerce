import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-t-lg"/>
            <h4 className="text-lg font-medium mb-2">{product.name}</h4>
            <p className="text-gray-600 mb-2">{product.department}</p>
            <p className="text-gray-800 mb-2">
                <span className="line-through text-gray-500">${product.originalPrice}</span> <span className="text-green-500 font-bold">${product.discountedPrice}</span>
            </p>
        </div>
    );
};

export default ProductCard;