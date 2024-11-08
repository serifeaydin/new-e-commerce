import './App.css';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutUsPage from './pages/AboutUsPage';
import SignupForm from './components/SignUpForm';
import BlogPage from './pages/BlogPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import { ToastContainer } from 'react-toastify';
import LoginForm from './components/LoginForm';
import { Provider, useDispatch } from 'react-redux';
import store from './store/store';
import { useEffect } from 'react';
import { setUser } from './store/actions/clientActions';
import FavoritesPage from './pages/FavoritesPage';
import 'react-toastify/dist/ReactToastify.css';

  const App = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      const token = localStorage.getItem('token');
  
      if (token) {
        axios.defaults.headers.common['Authorization'] = token; // Set the authorization header
  
        const verifyToken = async () => {
          try {
            const response = await axios.get('/verify'); // Make a GET request to /verify
            const user = response.data;
  
            // If the response is valid, dispatch action to set user in the store
            dispatch(setUser(user));
  
            // Optionally renew the token in localStorage (if needed)
            localStorage.setItem('token', token); // Assuming your backend handles token renewal
          } catch (error) {
            console.error("Token verification failed:", error);
  
            // Clear the token if not authorized
            localStorage.removeItem('token');
            delete axios.defaults.headers.common['Authorization'];
          }
        };
  
        verifyToken();
      }
    }, [dispatch]); // Add dispatch to the dependency array
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:women" element={<ShopPage />} />
        <Route path="/shop/:men" element={<ShopPage />} />
        <Route path="/shop/:men/:category" element={<ShopPage />} />
        <Route path="/product/:title/:id" element={<ProductDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/about" element={<AboutUsPage/>} />
        <Route path="/signup" element={<SignupForm/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/favorites" element={<FavoritesPage/>} />
        <Route path ="/orderpage" element={<OrderPage/>}/>
       
  

      </Routes>
      <ToastContainer />
    </Provider>
  );
}

export default App;