import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItemQuantity } from '../store/actions/cartActions';
import ShopNavbar from '../components/ShopNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalSelectedPrice, setTotalSelectedPrice] = useState(0);
  
  const [shippingCost, setShippingCost] = useState(10);
  const [totalWithShipping, setTotalWithShipping] = useState(0);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(updateCartItemQuantity(id, 1));
  };

  const handleDecreaseQuantity = (id, quantity) => {
    if (quantity > 1) {
      dispatch(updateCartItemQuantity(id, -1));
    } else {
      handleRemoveFromCart(id);
    }
  };

  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

 
  useEffect(() => {
    const selectedTotal = cartItems
      .filter((item) => selectedItems.includes(item.id))
      .reduce((total, item) => total + item.salePrice * item.quantity, 0);
    setTotalSelectedPrice(selectedTotal);

    if (selectedTotal > 100) {
      setTotalWithShipping(selectedTotal);
      setShippingCost(0);
    } else {
      setTotalWithShipping(selectedTotal + shippingCost);
    }
  }, [selectedItems, cartItems, shippingCost]);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <ShopNavbar />
      <div className="p-6 flex flex-col md:flex-row md:justify-between">
        <div className="w-full md:w-2/3">
          <h1 className="text-2xl font-bold mb-4">
            Shopping Cart ({totalItems})
          </h1>
          <div className='flex'>
            <FontAwesomeIcon icon={faSquareCheck} style={{color: "#34c62a",}} className='pt-1' />
            <p className='ml-2 '>You can purchase the products in your cart with individual or corporate invoice options.</p>
          </div>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center mb-4 p-4 border-b">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-4"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleSelectItem(item.id)}
                    />
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
          )}
        </div>

        {/* Sipariş Özeti */}
        <div className="w-full md:w-1/3 bg-white p-6 shadow-md rounded-lg mt-6 md:mt-0">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <p>Selected Items:</p>
            <p>${totalSelectedPrice.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Shipping:</p>
            {shippingCost === 0 ? (
              <p className="text-green-600">Free (Seller covers shipping)</p>
            ) : (
              <p>${shippingCost.toFixed(2)}</p>
            )}
          </div>
          <div className="flex justify-between font-bold text-lg mb-6">
            <p>Total with Shipping:</p>
            <p>${totalWithShipping.toFixed(2)}</p>
          </div>
        
            
          <div className="relative w-full mb-4">
  <input 
    type="text"
    id="discount"
    className="w-full p-2 border rounded text-center pr-10" // Sağ boşluk
    placeholder="Enter discount code"
  />
  <FontAwesomeIcon 
    icon={faPlus} 
    style={{color: "#e04300",}} 
    className="absolute left-20 top-1/2 transform -translate-y-1/2 cursor-pointer" 
  />
</div>


          <button className="w-full bg-blue-500 text-white py-3 rounded-lg">
            Confirm Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
