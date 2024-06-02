
import './App.css'

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage'
import Footer from './layout/Footer';



function App() {
 

  return (
    <>
      <Routes>
                <Route exact path="/" element={<HomePage />} />
            </Routes>
          
      </> 
 
  )
}

export default App
