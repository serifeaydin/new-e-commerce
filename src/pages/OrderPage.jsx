import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addresses, setAddresses] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    // Redirect to login if not logged in
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  // Fetch addresses if logged in
  useEffect(() => {
    const fetchAddresses = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const response = await axios.get('/user/address', {
          headers: { Authorization: token } // No 'Bearer' prefix
        });

        const addressList = response.data;
        if (Array.isArray(addressList)) {
          setAddresses(addressList);
        } else {
          setError("Invalid address data received.");
        }

        setAddresses(addressList);
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
  }, [isLoggedIn]);

  if (loading) {
    return <div>Loading addresses...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 p-6 bg-gray-100 min-h-screen">
      {/* Left Section - Address and Payment Information */}
      <div className="flex-1 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-4">Adres Bilgileri</h2>

        {/* Delivery Address Selection */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-md font-medium">Teslimat Adresi</h3>
            <button className="text-blue-500 text-sm">Yeni Adres Ekle</button>
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
              </div>
            ))}
          </div>
        </div>

        {/* Payment Options */}
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

      {/* Right Section - Order Summary */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-4">Sipariş Özeti</h2>
        <div className="text-sm text-gray-700 mb-2">
          <p>Ürünlerin Toplamı: 4,449.99 TL</p>
          <p>Kargo Toplamı: 29.99 TL</p>
          <p className="font-semibold">Toplam: 4,479.98 TL</p>
        </div>

        <button className="w-full mt-4 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600">
          Kaydet ve Devam Et
        </button>
      </div>
    </div>
  );
};

export default OrderPage;
