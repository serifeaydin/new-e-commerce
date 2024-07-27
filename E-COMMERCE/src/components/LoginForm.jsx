import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/actions/authActions';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = async (data) => {
    try {
      const result = await dispatch(loginUser(data));
      const { token } = result.payload;
      
      // If remember me is checked, save token to localStorage
      if (data.remember) {
        localStorage.setItem('token', token);
      }

      // Redirect to previous page or home
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (error) {
      toast.error('Invalid email or password');
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
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors.password && <span className="text-red-500 text-sm">Password is required and must be at least 6 characters long</span>}
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