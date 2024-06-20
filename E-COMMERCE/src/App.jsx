
import './App.css'

import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductDetailPage from './pages/ProductDetailPage'






function App() {
 

  return (
    <>
      <Routes>
                <Route  path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />

            </Routes>
          
      </> 
 
  )
}

export default App
