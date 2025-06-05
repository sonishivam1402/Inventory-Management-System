import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './pages/Products';
import Suppliers from './pages/Suppliers';
import Purchases from './pages/Purchases';
import StockMovements from './pages/StockMovements';

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/products" style={{ marginRight: 10 }}>Products</Link>
        <Link to="/suppliers" style={{ marginRight: 10 }}>Suppliers</Link>
        <Link to="/purchases" style={{ marginRight: 10 }}>Purchases</Link>
        <Link to="/stock-movements">Stock Movements</Link>
      </nav>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/stock-movements" element={<StockMovements />} />
        <Route path="/" element={<div>Welcome to Inventory Management System</div>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  )
}

export default App
