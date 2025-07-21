import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Myapp from './myapp.jsx';
import Welcome from './assets/Welcome.jsx'; // correct path
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='app' element={<App />} />
      <Route path='myapp' element={<Myapp />} />
    </Routes>
  </BrowserRouter>
);
