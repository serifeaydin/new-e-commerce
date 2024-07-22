
import './App.css'

import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ContactPage from './pages/ContactPage'
import TeamPage from './pages/TeamPage';
import AboutUsPage from './pages/AboutUsPage';
import SignupForm from './components/SignUpForm';
import BlogPage from './pages/BlogPage';
import Blog from './components/Blog';






function App() {
 

  return (
    <>
      <Routes>
                <Route  path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/about" element={<AboutUsPage/>} />
                <Route path="/signup" element={<SignupForm/>} />
                <Route path="/blog" element={<BlogPage/>} />


            </Routes>
          
      </> 
 
  )
}

export default App
