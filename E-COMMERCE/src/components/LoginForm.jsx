import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/actions/authActions';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

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

        <div className='flex justify-between mb-8'>
        <div>
        <label  className=" text-[#252B42] ">
          <input type="checkbox" {...register('rememberMe')} />
          Remember Me
        </label>
      </div>
       
                 <Link to="/signup" className="  text-[#252B42]">
        Forget Password?
        </Link>
                 </div>
        <div className='flex justify-center'>
        <button type="submit" className="mb-8 w-2/5 p-2 mr-4 text-white bg-[#23A6F0] border-gray-300 border font-bold rounded">
          Login Now
        </button>
        <button type="submit" className="mb-8 w-2/5 p-2 0 font-bold text-white bg-[#23A6F0] border-gray-300 border  rounded">
        <Link to="/signup" className="text-center ">
        Create Account
                 </Link>
        </button>
        </div>

                  
        <div className=''>
         <p>Or you can join with</p>
         <div className='flex justify-around mt-4'>
        <button type="submit" className="flex mb-8 text-[#23A6F0] p-2 0 font-bold border-gray-300 border  rounded">
        <FontAwesomeIcon icon={faGoogle} size="2x" style={{color: "#23A6F0",}} className='mt-1' /> 
        <Link to="https://google.com/">Login with Google </Link>
        </button>
        <button type="submit" className="flex mb-8  p-2 0 font-bold text-[#23A6F0] border-gray-300 border  rounded">
        <FontAwesomeIcon icon={faFacebook} size="2x" style={{color: "#23A6F0",}} className='mt-1'/>
        <Link to="https://www.facebook.com">Login with Facebook</Link>
        </button>
        </div>

        </div>
      </form>
    </div>

  );
};

export default LoginForm;