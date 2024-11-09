import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import ShopNavbar from '../components/ShopNavbar';
import { useSelector } from 'react-redux';
import AddressModal from '../components/AddressForm';

const OrderPage = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal durumunu kontrol eden state
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems || []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchAddresses = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const response = await axios.get('/user/address', {
          headers: { Authorization: token }
        });
        const addressList = response.data;
        if (Array.isArray(addressList)) {
          setAddresses(addressList);
        } else if (addressList.length === 0 && addresses.length === 0) {
          setError("Invalid address data received.");
        }
      } catch (error) {
        console.error("Error fetching addresses:", error);
        setError("Failed to fetch addresses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (isLoggedIn) {
      fetchAddresses();
    }
  }, [isLoggedIn, addresses.length]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSaveAddress = (newAddress) => {
    setAddresses([...addresses, newAddress]);
  };

  if (loading) {
    return <div>Loading addresses...</div>;
  }

  if (error && addresses.length === 0) {
    return <div>{error}</div>;
  }
  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };
  return (
    <section>
      <ShopNavbar/>
      <div className="flex flex-col md:flex-row gap-4 p-6 bg-gray-100 min-h-screen">
        <div className="flex-1 bg-white p-6 rounded-md shadow-md">
          <div className="flex flex-col md:flex-row gap-4">
            
          <div className="w-full md:w-1/2">
  <h2 className="text-lg font-semibold mb-4">Adres Bilgileri</h2>
  <div className="mb-4">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-md font-medium">Teslimat Adresi</h3>
      <button onClick={openModal} className="text-blue-500 text-sm">Yeni Adres Ekle</button>
    </div>
    <div className="grid grid-cols-1 gap-4">
      {addresses.map((address) => (
        <div
          key={address.id}
          className={`p-4 border rounded-md cursor-pointer ${
            selectedAddress === address.id ? 'border-orange-500' : 'border-gray-300'
          }`}
          onClick={() => setSelectedAddress(address.id)}
        >
          <h4 className="text-md font-semibold">{address.title}</h4>
          <p className="text-sm text-gray-600">{address.details}</p>
          <button
            onClick={(e) => {
              e.stopPropagation(); // Butona tıklanınca adres seçimini engeller
              handleDeleteAddress(address.id); // Silme fonksiyonu
            }}
            className="text-red-500 text-sm ml-4"
          >
            Sil
          </button>
        </div>
      ))}
    </div>
  </div>
</div>

            <div className="w-full md:w-1/2">
              <h2 className="text-lg font-semibold mb-4">Ödeme Seçenekleri</h2>
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
                  Banka/Kredi Kartı
                </button>
                <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
                  Kapıda Ödeme
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 bg-white p-6 shadow-md rounded-lg mt-6 md:mt-0">
          <button className="w-full bg-orange-500 text-white py-3 rounded-lg">
            Save & Confirm Cart
            <FontAwesomeIcon icon={faChevronRight} className='ml-4' />
          </button>
        </div>
      </div>

      <AddressModal
  isOpen={isModalOpen}
  onClose={closeModal}
  onSave={handleSaveAddress}
  onDelete={handleDeleteAddress} // Pass delete function
  address={selectedAddress} // Specify the address to delete
/>
    </section>
  );
};

export default OrderPage;
