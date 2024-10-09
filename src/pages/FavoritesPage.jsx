import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/favoritesActions'; // Doğru aksiyonu import et
import ShopNavbar from '../components/ShopNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites || []);

  const handleRemoveFavorite = (id) => {
    dispatch(toggleFavorite({ id })); // Favorilerden kaldır
  };

  return (
    <div>
      <ShopNavbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">
          My Favorites ({favorites.length})
        </h1>
        {favorites.length === 0 ? (
          <p>You have no favorite items.</p>
        ) : (
          <ul>
            {favorites.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-4 p-4 border-b">
                <div className="flex items-center">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <h2 className="font-semibold">{item.title}</h2>
                    <p>Price: ${item.salePrice}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveFavorite(item.id)}
                  className="text-red-500 hover:underline"
                >
                  <FontAwesomeIcon icon={faSolidHeart} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
 export default FavoritesPage;
