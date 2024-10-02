import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../store/actions/favoritesActions'; 
import { addToCart } from '../store/actions/cartActions'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faChevronRight, faHeart as faSolidHeart, faShoppingCart, faEye } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, image, category_id, title, description, price, salePrice, rating }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const cartItems = useSelector((state) => state.cart.cartItems || []); 
  const isFavorite = favorites.some((fav) => fav.id === id);
  const cartItem = cartItems.find(item => item.id === id); 


  const [isInCart, setIsInCart] = useState(false);

  const handleToggleFavorite = () => {
    const product = { id, title, image, salePrice };
    dispatch(toggleFavorite(product));
  };

  const handleAddToCart = () => {
    const product = { id, title, image, salePrice };
    dispatch(addToCart(product));
    setIsInCart(true); // Sepete eklendiğinde durumu güncelle
  };

  return (
    <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg mb-8 mr-4">
      <div className="relative">
        <img className="w-full h-64 object-cover" src={image} alt="Product" />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 font-semibold">Sale</span>

        <div className='absolute top-3/4 left-1/4 flex space-x-2'>
          <button onClick={handleToggleFavorite} className="bg-white p-2 px-3 rounded-full shadow-md">
            <FontAwesomeIcon
              icon={isFavorite ? faSolidHeart : faRegularHeart}
              className={isFavorite ? "text-red-500" : "text-gray-400"}
              size="1x"
            />
          </button>

          <button onClick={handleAddToCart} className={`bg-white p-2 px-3 rounded-full shadow-md relative ${isInCart ? "text-red-500" : "text-gray-400"}`}>
            <FontAwesomeIcon icon={faShoppingCart} className="text-current" size="1x" />
            {cartItem && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">
                {cartItem.quantity}
              </span>
            )}
          </button>

          <button className="bg-white p-2 px-3 rounded-full shadow-md">
            <FontAwesomeIcon icon={faEye} className="text-gray-400" size="1x" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className='flex justify-between'>
          <h2 className="text-lg font-semibold">{title}</h2>
          <div className="bg-slate-800 rounded-xl flex items-center">
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#FFD43B", fontSize: '16px', borderRadius: '50%', padding: '5px' }}
            />
            <span className="text-white pr-2">{rating}</span>
          </div>
        </div>

        <p className="text-gray-700 text-sm mt-2">{description}</p>
        <div className="mt-4">
          <span className="text-gray-500 line-through">${price}</span>
          <span className="text-[#23856D] text-xl font-semibold ml-2">${salePrice}</span>
        </div>

        <Link
          to={`/shop/${id}/${title.replace(/\s+/g, '-').toLowerCase()}`}
          className="text-[#23A6F0]"
        >
          <button className="mt-4 text-[#23A6F0] border border-[#23A6F0] px-4 py-2 rounded-full">
            Learn More
            <FontAwesomeIcon icon={faChevronRight} className="text-[#23A6F0] px-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
