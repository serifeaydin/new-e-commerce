import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';  
import axiosInstance from '../api/axios';
import { useNavigate } from 'react-router-dom'; // useNavigate import ediliyor

const SignupForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [roles, setRoles] = useState([]);
  const [isStore, setIsStore] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // useNavigate kullanılıyor
  
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
    <div className='bg-slate-500 py-16 my-32 mx-96 text-start justify-center'>
      <h1 className='text-center text-3xl'>Sign Up</h1>
    <form  onSubmit={handleSubmit(onSubmit)}>
      <div >
        <label htmlFor="name" className=' font-bold '>Name:</label>
        <input 
          id="name"
          {...register('name', { required: true, minLength: 3 })}
        />
        {errors.name && <span>Name is required (at least 3 characters)</span>}
      </div>
      
      <div>
        <label htmlFor="email" className='font-bold '>Email:</label>
        <input
          id="email"
          type="email"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <span>Invalid email address</span>}
      </div>
      
      <div>
        <label htmlFor="password" className='font-bold'>Password:</label>
        <input
          id="password"
          type="password"
          {...register('password', { required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/ })}
        />
        {errors.password && <span>Password must be at least 8 characters, including numbers, lowercase, uppercase, and special characters</span>}
      </div>
      
      <div>
        <label htmlFor="password_confirm" className='font-bold'>Confirm Password:</label>
        <input
          id="password_confirm"
          type="password"
          {...register('password_confirm', {
            validate: value => value === watch('password')
          })}
        />
        {errors.password_confirm && <span>Passwords do not match</span>}
      </div>
      
      <div>
        <label htmlFor="role_id" className='font-bold'>Role:</label>
        <select
          id="role_id"
          {...register('role_id', { required: true })}
        >
          {roles.map(role => (
            <option key={role.id} value={role.id}>{role.name}</option>
          ))}
        </select>
      </div>
      
      {isStore && (
        <>
          <div>
            <label htmlFor="store_name" className='font-bold '>Store Name:</label>
            <input
              id="store_name"
              {...register('store.name', { required: isStore, minLength: 3 })}
            />
            {errors.store?.name && <span>Store name is required (at least 3 characters)</span>}
          </div>
          
          <div>
            <label htmlFor="store_phone" className='font-bold '>Store Phone:</label>
            <input
              id="store_phone"
              type="tel"
              {...register('store.phone', { required: isStore, pattern: /^\+90\d{10}$/ })}
            />
            {errors.store?.phone && <span>Invalid Turkish phone number</span>}
          </div>
          
          <div>
            <label htmlFor="store_tax_no" className='font-bold '>Store Tax ID:</label>
            <input
              id="store_tax_no"
              {...register('store.tax_no', { required: isStore, pattern: /^T\d{4}V\d{6}$/ })}
            />
            {errors.store?.tax_no && <span>Tax ID must follow the pattern "TXXXXVXXXXXX"</span>}
          </div>
          
          <div>
            <label htmlFor="store_bank_account" className='font-bold '>Store IBAN:</label>
            <input
              id="store_bank_account"
              {...register('store.bank_account', { required: isStore, pattern: /^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/ })}
            />
            {errors.store?.bank_account && <span>Invalid IBAN</span>}
          </div>
        </>
      )}
      
      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
    </div>
  );
};

export default SignupForm;