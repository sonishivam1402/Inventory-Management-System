import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Package, Users, ShoppingCart, TrendingUp, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/products', label: 'Products', icon: Package },
    { path: '/suppliers', label: 'Suppliers', icon: Users },
    { path: '/purchases', label: 'Purchases', icon: ShoppingCart },
    { path: '/stock-movements', label: 'Stock Movements', icon: TrendingUp },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-rose-50 via-purple-50 to-indigo-50 backdrop-blur-lg border-b border-purple-200/30 shadow-lg shadow-purple-100/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Package className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                InventoryFlow
              </h1>
              <p className="text-xs text-purple-500/70 -mt-1">Management System</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`group relative px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                  isActive(path)
                    ? 'bg-gradient-to-r from-purple-400/20 to-pink-400/20 text-purple-700 shadow-lg shadow-purple-200/50'
                    : 'text-purple-600/70 hover:bg-gradient-to-r hover:from-purple-300/10 hover:to-pink-300/10 hover:text-purple-700'
                }`}
              >
                <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive(path) ? 'scale-110' : 'group-hover:scale-110'}`} />
                <span className="font-medium text-sm">{label}</span>
                {isActive(path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 hover:from-purple-200 hover:to-pink-200 transition-all duration-300"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive(path)
                      ? 'bg-gradient-to-r from-purple-400/20 to-pink-400/20 text-purple-700 shadow-lg shadow-purple-200/30'
                      : 'text-purple-600/70 hover:bg-gradient-to-r hover:from-purple-300/10 hover:to-pink-300/10 hover:text-purple-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;