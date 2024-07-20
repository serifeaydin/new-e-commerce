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
    
    // Kullanıcı rolüne göre veri yapılandırılır
    const formattedData = isStore
      ? {
          name: data.name,
          email: data.email,
          password: data.password,
          role_id: data.role_id,
          store: {
            name: data.store.name,
            phone: data.store.phone,
            tax_no: data.store.tax_no,
            bank_account: data.store.bank_account,
          },
        }
      : {
          name: data.name,
          email: data.email,
          password: data.password,
          role_id: data.role_id,
        };
    
    try {
      await axiosInstance.post('/signup', formattedData);
      setLoading(false);
      navigate(-1, { state: { message: 'You need to click the link in the email to activate your account!' } });
    } catch (error) {
      setLoading(false);
      console.error('Signup failed:', error);
    }
  };

  const selectedRole = watch('role_id');
  
  // Seçilen rol izlenir ve mağaza rolü seçildiğinde isStore state'i true olarak ayarlanır
  useEffect(() => {
    setIsStore(selectedRole === '2');
  }, [selectedRole]);

  return (
    <div className="bg-gray-100 p-8 rounded-lg max-w-md mx-auto">
      <h1 className="text-center mb-4 text-2xl font-bold  text-[#252B42]">Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1  text-[#252B42]">Name *</label>
          <input 
            id="name"
            className="w-full p-2 border border-gray-300 rounded bg-white"
            {...register('name', { required: true, minLength: 3 })}
          />
          {errors.name && <span className="text-red-500 text-sm">Name is required (at least 3 characters)</span>}
        </div>
        
        <div >
          <label htmlFor="email" className="block mb-1  text-[#252B42]">Email address *</label>
          <input
            id="email"
            type="email"
            className="w-full p-2 border border-gray-300 rounded bg-white"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <span className="text-red-500 text-sm">Invalid email address</span>}
        </div>
        <p className='text-sm text-[#737373] mb-4'>We'll never share your email with anyone else.
        </p>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1  text-[#252B42]">Password *</label>
          <input
            id="password"
            type="password"
            className="w-full p-2 border border-gray-300 rounded bg-white"
            {...register('password', { required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/ })}
          />
          {errors.password && <span className="text-red-500 text-sm">Password must be at least 8 characters, including numbers, lowercase, uppercase, and special characters</span>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="password_confirm" className="block mb-1  text-[#252B42]">Confirm Password *</label>
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
        
        <div className="mb-4">
          <label htmlFor="role_id" className="block mb-1  text-[#252B42]">Role *</label>
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
        
        {isStore && (
          <>
            <div className="mb-4">
              <label htmlFor="store_name" className="block mb-1 font-bold">Store Name:</label>
              <input
                id="store_name"
                className="w-full p-2 border border-gray-300 rounded bg-white"
                {...register('store.name', { required: isStore, minLength: 3 })}
              />
              {errors.store?.name && <span className="text-red-500 text-sm">Store name is required (at least 3 characters)</span>}
            </div>
            
            <div className="mb-4">
              <label htmlFor="store_phone" className="block mb-1 font-bold">Store Phone:</label>
              <input
                id="store_phone"
                type="tel"
                className="w-full p-2 border border-gray-300 rounded bg-white"
                {...register('store.phone', { required: isStore, pattern: /^\+90\d{10}$/ })}
              />
              {errors.store?.phone && <span className="text-red-500 text-sm">Invalid Turkish phone number</span>}
            </div>
            
            <div className="mb-4">
              <label htmlFor="store_tax_no" className="block mb-1 font-bold">Store Tax ID:</label>
              <input
                id="store_tax_no"
                className="w-full p-2 border border-gray-300 rounded bg-white"
                {...register('store.tax_no', { required: isStore, pattern: /^T\d{4}V\d{6}$/ })}
              />
              {errors.store?.tax_no && <span className="text-red-500 text-sm">Tax ID must follow the pattern "TXXXXVXXXXXX"</span>}
            </div>
            
            <div className="mb-4">
              <label htmlFor="store_bank_account" className="block mb-1 font-bold">Store IBAN:</label>
              <input
                id="store_bank_account"
                className="w-full p-2 border border-gray-300 rounded bg-white"
                {...register('store.bank_account', { required: isStore, pattern: /^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/ })}
              />
              {errors.store?.bank_account && <span className="text-red-500 text-sm">Invalid IBAN</span>}
            </div>
          </>
        )}
        
        <button type="submit" className="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;