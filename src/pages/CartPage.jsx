import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItemQuantity } from '../store/actions/cartActions';
import ShopNavbar from '../components/ShopNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalSelectedPrice, setTotalSelectedPrice] = useState(0);
  const [selectedShipping, setSelectedShipping] = useState("FexEx");
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

  const handleShippingChange = (e) => {
    const selected = e.target.value;
    setSelectedShipping(selected);

    switch (selected) {
      case "FedEx":
        setShippingCost(10);
        break;
      case "UPS":
        setShippingCost(8);
        break;
      case "DHL Express":
        setShippingCost(10);
        break;
      default:
        setShippingCost(10);
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
      <div className="p-6">
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
          <div>
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

                  {/* Kargo Seçenekleri */}
                  <div className="flex items-center">
                    <label htmlFor="shipping" className="font-semibold mr-2">Shipping:</label>
                    <select id="shipping" value={selectedShipping} onChange={handleShippingChange} className="bg-gray-100 border p-2">
                      <option value="FedEx">FedEx - $10</option>
                      <option value="UPS">UPS - $8</option>
                      <option value="DHL Express">DHL Express - $10</option>
                    </select>
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

            <div className="mt-2 font-bold text-green-600">
              Selected Items Total Price: ${totalSelectedPrice.toFixed(2)}
            </div>
            <div className="mt-2 font-bold text-blue-600">
              Total Price with Shipping: ${totalWithShipping.toFixed(2)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
