import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';  
import axiosInstance from '../api/axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../layout/Footer';
import ShopNavbar from './ShopNavbar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import clsx from 'clsx';

const SignupForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [roles, setRoles] = useState([]);
  const [isStore, setIsStore] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [userRoleId, setUserRoleId] = useState('1'); // Varsayılan bir rol ID'si

  // Rolları almak için API çağrısı
  const fetchRoles = async () => {
    try {
      const response = await axiosInstance.get('/roles');
      setRoles(response.data);
    } catch (error) {
      console.error('Failed to fetch roles:', error);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  // Form gönderim işlemi
  const onSubmit = async (data) => {
    const formattedData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: userRoleId,
    };

    // Veri kontrolü
    console.log(formattedData); // Gönderilecek veriyi kontrol etme

    const requiredFields = ['name', 'email', 'password', 'role_id'];
    const missingFields = requiredFields.filter(field => !formattedData[field]);

    if (missingFields.length > 0) {
      console.error('Eksik alanlar:', missingFields);
      return; // Eksik alan varsa gönderimi durdur
    }

    try {
      setLoading(true); // Başlangıçta yükleme durumunu ayarla
      const response = await axiosInstance.post('/signup', formattedData);
      console.log('Kayıt işlemi başarılı:', response.data);
      toast.success('Signup successful!'); // Başarılı mesaj
      navigate('/'); // Girişten sonra anasayfaya yönlendir
    } catch (error) {
      console.error('Kayıt işlemi başarısız:', error.response.data);
      toast.error('Signup failed!'); // Hata mesajı
    } finally {
      setLoading(false); // Yükleme tamamlandı
    }
  };

  return (
    <section>
      <ToastContainer />
      <ShopNavbar />
      <div className="bg-gray-100 p-8 rounded-lg max-w-md mx-auto">
        <h1 className="text-center mb-4 text-2xl font-bold text-[#252B42]">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* İsim Alanı */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 text-[#252B42]">Name *</label>
            <input 
              id="name"
              className="w-full p-2 border border-gray-300 rounded bg-white"
              {...register('name', { required: true, minLength: 3 })}
            />
            {errors.name && <span className="text-red-500 text-sm">Name is required (at least 3 characters)</span>}
          </div>

          {/* E-posta Alanı */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-[#252B42]">Email address *</label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border border-gray-300 rounded bg-white"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <span className="text-red-500 text-sm">Invalid email address</span>}
          </div>

          {/* Şifre Alanı */}
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 text-[#252B42]">Password *</label>
            <input
              id="password"
              type="password"
              className="w-full p-2 border border-gray-300 rounded bg-white"
              {...register('password', { required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/ })}
            />
            {errors.password && <span className="text-red-500 text-sm">Password must be at least 8 characters, including numbers, lowercase, uppercase, and special characters</span>}
          </div>

          {/* Şifre Onay Alanı */}
          <div className="mb-4">
            <label htmlFor="password_confirm" className="block mb-1 text-[#252B42]">Confirm Password *</label>
            <input
              id="password_confirm"
              type="password"
              className="w-full p-2 border border-gray-300 rounded bg-white"
              {...register('password_confirm', {
                validate: value => value === watch('password')
              })}
            />
            {errors.password_confirm && <span className="text-red-500 text-sm">Passwords do not match</span>}
          </div>

          {/* Rol Seçimi */}
          <div className="mb-4">
            <label htmlFor="role_id" className="block mb-1 text-[#252B42]">Role *</label>
            <select
              id="role_id"
              className="w-full p-2 border border-gray-300 rounded bg-white"
              {...register('role_id', { required: true })}
            >
              <option value="">Select a role</option>
              {roles.map(role => (
                <option key={role.id} value={role.id}>{role.name}</option>
              ))}
            </select>
            {errors.role_id && <span className="text-red-500 text-sm">Role is required</span>}
          </div>

          {/* Mağaza Alanları (varsa) */}
          {isStore && (
            <>
              <div className="mb-4">
                <label htmlFor="store_name" className="block mb-1 font-bold">Store Name:</label>
                <input
                  id="store_name"
                  className="w-full p-2 border border-gray-300 rounded bg-white"
                  {...register('store.name', { required: true, minLength: 3 })}
                />
                {errors.store?.name && <span className="text-red-500 text-sm">Store name is required (at least 3 characters)</span>}
              </div>

              <div className="mb-4">
                <label htmlFor="store_phone" className="block mb-1 font-bold">Store Phone:</label>
                <input
                  id="store_phone"
                  className="w-full p-2 border border-gray-300 rounded bg-white"
                  {...register('store.phone', { required: true })}
                />
                {errors.store?.phone && <span className="text-red-500 text-sm">Store phone is required</span>}
              </div>

              <div className="mb-4">
                <label htmlFor="store_tax_no" className="block mb-1 font-bold">Tax No:</label>
                <input
                  id="store_tax_no"
                  className="w-full p-2 border border-gray-300 rounded bg-white"
                  {...register('store.tax_no', { required: true })}
                />
                {errors.store?.tax_no && <span className="text-red-500 text-sm">Tax number is required</span>}
              </div>

              <div className="mb-4">
                <label htmlFor="store_bank_account" className="block mb-1 font-bold">Bank Account:</label>
                <input
                  id="store_bank_account"
                  className="w-full p-2 border border-gray-300 rounded bg-white"
                  {...register('store.bank_account', { required: true })}
                />
                {errors.store?.bank_account && <span className="text-red-500 text-sm">Bank account is required</span>}
              </div>
            </>
          )}

          {/* Gönder Butonu */}
          <button
            type="submit"
            className={`w-full p-2 text-white rounded bg-blue-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default SignupForm;
