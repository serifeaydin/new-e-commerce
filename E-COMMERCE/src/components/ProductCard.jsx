import React from 'react';

const ProductCard = ({ image, title, department, price, salePrice }) => (
    <div className="bg-white ">
      <img src={image} alt={title} className="w-full h-64 object-cover " />
      <div className="mt-4">
        
       <p className="text-[#23A6F0]">{department}</p>
        <h3 className=" font-bold text-lg">{title}</h3>
       
        <div className="flex items-baseline mt-2">
          <span className="text-[#BDBDBD] line-through">${price}</span>
          <span className="text-[#23856D] text-xl font-semibold ml-2">${salePrice}</span>
        </div>
      </div>
    </div>
  );

export default ProductCard;