import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItemQuantity } from '../store/actions/cartActions'; // Ürün miktarını güncellemek için aksiyon
import ShopNavbar from '../components/ShopNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems || []); // Redux'tan sepetteki ürünleri al

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id)); // Ürünü sepetten kaldır
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(updateCartItemQuantity(id, 1)); // Miktarı artır
  };

  const handleDecreaseQuantity = (id, quantity) => {
    if (quantity > 1) {
      dispatch(updateCartItemQuantity(id, -1)); // Miktarı azalt
    } else {
      handleRemoveFromCart(id); // Miktar 1'den az olamaz, bu yüzden ürünü kaldır
    }
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.salePrice * item.quantity, 0); // Toplam fiyat hesaplama
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0); // Toplam ürün sayısını hesapla

  return (
    <div>
      <ShopNavbar/>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Shopping Cart ({totalItems})
      </h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-4 p-4 border-b">
                <div className="flex items-center">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <h2 className="font-semibold">{item.title}</h2>
                    <p>Price: ${item.salePrice}</p>
                    <div className="flex items-center mt-2">
                      <button 
                        onClick={() => handleDecreaseQuantity(item.id, item.quantity)} 
                        className="bg-gray-200 px-2 py-1 rounded-l"
                      >
                        −
                      </button>
                      <span className="border-t border-b text-center w-12">{item.quantity}</span>
                      <button 
                        onClick={() => handleIncreaseQuantity(item.id)} 
                        className="bg-gray-200 px-2 py-1 rounded-r"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="text-red-500 hover:underline"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 font-bold">
            Total Price: ${totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default CartPage;
