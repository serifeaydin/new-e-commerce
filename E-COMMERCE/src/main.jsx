import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter, Router } from 'react-router-dom';
import Blog from './components/Blog.jsx';
import BlogCard from './components/BlogCard.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
     <BrowserRouter>
    <App />

    </BrowserRouter>
  </React.StrictMode>
  
)