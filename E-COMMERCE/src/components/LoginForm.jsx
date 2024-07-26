import React from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../api/axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  
  const onSubmit = async (data) => {
    try {
      // Login işlemi için API çağrısı
      const response = await axiosInstance.post('/login', data);
      const { user, token } = response.data;
      
      // Kullanıcı bilgilerini ve token'ı sakla
      localStorage.setItem('token', token);

      // Kullanıcıyı yönlendir
      navigate(-1, { state: { message: 'You are logged in successfully!' } });

      // Kullanıcı bilgilerini Redux store'a kaydet
      // dispatch(setUser(user));

      // Gravatar resmi için
      const gravatarUrl = `https://www.gravatar.com/avatar/${md5(user.email.trim().toLowerCase())}`;
      console.log('Gravatar URL:', gravatarUrl);

    } catch (error) {
      // Hata durumunda kullanıcıyı bilgilendir
      toast.error('Login failed! Please check your email and password.');
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg max-w-md mx-auto">
      <h1 className="text-center mb-4 text-2xl font-bold text-[#252B42]">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 text-[#252B42]">Password *</label>
          <input
            id="password"
            type="password"
            className="w-full p-2 border border-gray-300 rounded bg-white"
            {...register('password', { required: true, minLength: 8 })}
          />
          {errors.password && <span className="text-red-500 text-sm">Password is required and must be at least 8 characters long</span>}
        </div>
        
        <button type="submit" className="mb-8 w-full p-2 px-40 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
          Login
        </button>

        <Link to="/signup" className="  w-full py-2 px-40 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
                     Sign Up
                 </Link>
      </form>
    </div>
  );
};

export default LoginForm;