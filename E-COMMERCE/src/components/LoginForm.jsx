import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/actions/authActions';
import { setUser } from '../store/actions/clientActions';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = async (data) => {
    const { rememberMe, ...credentials } = data;

    try {
      const response = await dispatch(loginUser(credentials));
      const { user, token } = response.payload;

      // Kullanıcı bilgilerini clientReducer'a kaydediyoruz
      dispatch(setUser(user));

      // Token'ı localStorage'a kaydediyoruz
      if (rememberMe) {
        localStorage.setItem('token', token);
      }

      // Başarılı giriş sonrası yönlendirme
      const redirectTo = location.state?.from || '/';
      navigate(redirectTo);
    } catch (err) {
      toast.error('Login failed: ' + (err.message || 'Unknown error'));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            {...register('rememberMe')}
          />
          Remember me
        </label>
      </div>

      <button type="submit">Login</button>
    
      <Link to="/signup" className="text-[#23A6F0] border  border-white py-1 rounded">
                    Sign Up
                 </Link>
                
    </form>
  );
};

export default LoginForm;