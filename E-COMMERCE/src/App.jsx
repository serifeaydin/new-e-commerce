
import './App.css'

import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage'
import ShopPage from './pages/HomePage'




function App() {
 

  return (
    <>
      <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/shop" element={<ShopPage />} />

            </Routes>
          
      </> 
 
  )
}

export default App
