import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';  
import axiosInstance from '../api/axios';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [roles, setRoles] = useState([]);
  const [isStore, setIsStore] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
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

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axiosInstance.post('/signup', data);
      setLoading(false);
      navigate('/', { state: { message: 'You need to click the link in the email to activate your account!' } });
    } catch (error) {
      setLoading(false);
      console.error('Signup failed:', error);
    }
  };

  const selectedRole = watch('role_id');
  useEffect(() => {
    setIsStore(selectedRole === '2');
  }, [selectedRole]);

  return (
    <div className="signup-form-container bg-gray-100 p-8 rounded-lg max-w-md mx-auto">
      <h1 className="signup-title text-center mb-4 text-2xl font-bold">Sign Up</h1>
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-4">
          <label htmlFor="name" className="form-label">Name:</label>
          <input 
            id="name"
            className="form-input"
            {...register('name', { required: true, minLength: 3 })}
          />
          {errors.name && <span className="error-message text-sm text-red-500">Name is required (at least 3 characters)</span>}
        </div>
        
        <div className="form-group mb-4">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            id="email"
            type="email"
            className="form-input"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <span className="error-message text-sm text-red-500">Invalid email address</span>}
        </div>
        
        <div className="form-group mb-4">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            id="password"
            type="password"
            className="form-input"
            {...register('password', { required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/ })}
          />
          {errors.password && <span className="error-message text-sm text-red-500">Password must be at least 8 characters, including numbers, lowercase, uppercase, and special characters</span>}
        </div>
        
        <div className="form-group mb-4">
          <label htmlFor="password_confirm" className="form-label">Confirm Password:</label>
          <input
            id="password_confirm"
            type="password"
            className="form-input"
            {...register('password_confirm', {
              validate: value => value === watch('password')
            })}
          />
          {errors.password_confirm && <span className="error-message text-sm text-red-500">Passwords do not match</span>}
        </div>
        
        <div className="form-group mb-4">
          <label htmlFor="role_id" className="form-label">Role:</label>
          <select
            id="role_id"
            className="form-select"
            {...register('role_id', { required: true })}
          >
            {roles.map(role => (
              <option key={role.id} value={role.id}>{role.name}</option>
            ))}
          </select>
        </div>
        
        {isStore && (
          <>
            <div className="form-group mb-4">
              <label htmlFor="store_name" className="form-label">Store Name:</label>
              <input
                id="store_name"
                className="form-input"
                {...register('store.name', { required: isStore, minLength: 3 })}
              />
              {errors.store?.name && <span className="error-message text-sm text-red-500">Store name is required (at least 3 characters)</span>}
            </div>
            
            <div className="form-group mb-4">
              <label htmlFor="store_phone" className="form-label">Store Phone:</label>
              <input
                id="store_phone"
                type="tel"
                className="form-input"
                {...register('store.phone', { required: isStore, pattern: /^\+90\d{10}$/ })}
              />
              {errors.store?.phone && <span className="error-message text-sm text-red-500">Invalid Turkish phone number</span>}
            </div>
            
            <div className="form-group mb-4">
              <label htmlFor="store_tax_no" className="form-label">Store Tax ID:</label>
              <input
                id="store_tax_no"
                className="form-input"
                {...register('store.tax_no', { required: isStore, pattern: /^T\d{4}V\d{6}$/ })}
              />
              {errors.store?.tax_no && <span className="error-message text-sm text-red-500">Tax ID must follow the pattern "TXXXXVXXXXXX"</span>}
            </div>
            
            <div className="form-group mb-4">
              <label htmlFor="store_bank_account" className="form-label">Store IBAN:</label>
              <input
                id="store_bank_account"
                className="form-input"
                {...register('store.bank_account', { required: isStore, pattern: /^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/ })}
              />
              {errors.store?.bank_account && <span className="error-message text-sm text-red-500">Invalid IBAN</span>}
            </div>
          </>
        )}
        
        <button type="submit" className="form-submit-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;