import React from 'react';
import { Link } from 'react-router-dom';


const ProductCard = ({ id, image, title, department, price, salePrice }) => {
  return (
    <Link to={`/product/${id}`}>
    <div className="bg-white ">
      <img src={image} alt={title} className="w-full h-96 object-cover  " />
      <div className="mt-4">
        
       <p className="text-[#23A6F0]">{department}</p>
        <h3 className=" font-bold text-lg">{title}</h3>
       
        <div className="flex items-baseline mt-2">
          <span className="text-[#BDBDBD] line-through">${price}</span>
          <span className="text-[#23856D] text-xl font-semibold ml-2">${salePrice}</span>
        </div>
      </div>
    </div>
    </Link>
  );
}
export default ProductCard;