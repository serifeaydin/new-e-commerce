import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutUsPage from './pages/AboutUsPage';
import SignupForm from './components/SignUpForm';
import BlogPage from './pages/BlogPage';
import { ToastContainer } from 'react-toastify';
import LoginForm from './components/LoginForm';
import { Provider, useDispatch } from 'react-redux';
import store from './store/store'; 
import { useEffect } from 'react';
import { setUserFromToken } from './store/actions/authActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(setUserFromToken(token));
    }
  }, [dispatch]);

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/women" element={<ShopPage />} />
        <Route path="/shop/men" element={<ShopPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/about" element={<AboutUsPage/>} />
        <Route path="/signup" element={<SignupForm/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/login" element={<LoginForm/>} />
      
      </Routes>
      <ToastContainer />
    </Provider>
  );
}

export default App;