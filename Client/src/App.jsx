import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';

// Pages
import Products from './pages/Products';
import Suppliers from './pages/Suppliers';
import Purchases from './pages/Purchases';
import StockMovements from './pages/StockMovements';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20">
        <Navbar />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/stock-movements" element={<StockMovements />} />
            <Route 
              path="*" 
              element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                      <span className="text-3xl text-white font-bold">404</span>
                    </div>
                    <h1 className="text-2xl font-bold text-slate-800 mb-2">Page Not Found</h1>
                    <p className="text-slate-600 mb-6">The page you're looking for doesn't exist.</p>
                    <a 
                      href="/" 
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Go back home
                    </a>
                  </div>
                </div>
              } 
            />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;