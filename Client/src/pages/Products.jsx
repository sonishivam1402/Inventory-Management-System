import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../api/products';
import { Package, Plus, Search, Filter, Edit3, Trash2, AlertCircle, Eye, MoreVertical } from 'lucide-react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showActions, setShowActions] = useState(null);

  useEffect(() => {
    getAllProducts()
      .then(setProducts)
      .catch(() => setError('Failed to load products'))
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(products.map(p => p.category))];

  const getStockStatus = (stock) => {
    if (stock === 0) return { color: 'text-red-600 bg-red-50', label: 'Out of Stock' };
    if (stock < 10) return { color: 'text-amber-600 bg-amber-50', label: 'Low Stock' };
    return { color: 'text-emerald-600 bg-emerald-50', label: 'In Stock' };
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-slate-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-slate-800 mb-2">Error Loading Products</h2>
          <p className="text-slate-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <div className="flex items-center space-x-3 mb-4 sm:mb-0">
              <div className="p-3 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-xl shadow-lg">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Products
                </h1>
                <p className="text-slate-600">Manage your inventory catalog</p>
              </div>
            </div>
            <button className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              <span>Add Product</span>
            </button>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/70 backdrop-blur-sm border border-purple-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300/50 focus:border-purple-300 transition-all duration-300 placeholder-slate-400"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 bg-white/70 backdrop-blur-sm border border-purple-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300/50 focus:border-purple-300 transition-all duration-300 appearance-none cursor-pointer min-w-[200px]"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/70 backdrop-blur-sm border border-purple-200/50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Total Products</p>
                  <p className="text-2xl font-bold text-slate-800">{products.length}</p>
                </div>
                <div className="p-2 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-lg">
                  <Package className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm border border-purple-200/50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Categories</p>
                  <p className="text-2xl font-bold text-slate-800">{categories.length}</p>
                </div>
                <div className="p-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg">
                  <Filter className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm border border-purple-200/50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Low Stock Items</p>
                  <p className="text-2xl font-bold text-slate-800">
                    {products.filter(p => p.quantity_in_stock < 10).length}
                  </p>
                </div>
                <div className="p-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white/70 backdrop-blur-sm border border-purple-200/50 rounded-2xl shadow-xl shadow-purple-100/20 overflow-hidden">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-600 mb-2">No products found</h3>
              <p className="text-slate-500">
                {searchTerm || selectedCategory ? 'Try adjusting your search or filter criteria.' : 'Start by adding your first product.'}
              </p>
              {!searchTerm && !selectedCategory && (
                <button className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Add Your First Product
                </button>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-purple-100/50 to-indigo-100/50 border-b border-purple-200/30">
                    <th className="text-left py-4 px-6 font-semibold text-slate-700">Product</th>
                    <th className="text-left py-4 px-6 font-semibold text-slate-700">Category</th>
                    <th className="text-left py-4 px-6 font-semibold text-slate-700">Price</th>
                    <th className="text-left py-4 px-6 font-semibold text-slate-700">Stock</th>
                    <th className="text-left py-4 px-6 font-semibold text-slate-700">Location</th>
                    <th className="text-left py-4 px-6 font-semibold text-slate-700">Status</th>
                    <th className="text-center py-4 px-6 font-semibold text-slate-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product, index) => {
                    const stockStatus = getStockStatus(product.quantity_in_stock);
                    return (
                      <tr
                        key={product.id}
                        className={`border-b border-purple-100/30 hover:bg-gradient-to-r hover:from-purple-50/30 hover:to-pink-50/30 transition-all duration-300 ${
                          index % 2 === 0 ? 'bg-white/30' : 'bg-purple-50/20'
                        }`}
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
                              {product.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-medium text-slate-800">{product.name}</p>
                              <p className="text-sm text-slate-500">ID: {product.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="px-3 py-1 bg-purple-100/50 text-purple-700 rounded-full text-sm font-medium">
                            {product.category}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="font-semibold text-slate-800">
                            {formatPrice(product.unit_price)}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-slate-800">{product.quantity_in_stock}</span>
                            <span className="text-sm text-slate-500">units</span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="text-slate-700">{product.location}</span>
                        </td>
                        <td className="py-4 px-6">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${stockStatus.color}`}>
                            {stockStatus.label}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center justify-center space-x-2 relative">
                            <button className="p-2 text-slate-600 hover:text-purple-600 hover:bg-purple-100/50 rounded-lg transition-all duration-300">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-100/50 rounded-lg transition-all duration-300">
                              <Edit3 className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-slate-600 hover:text-red-600 hover:bg-red-100/50 rounded-lg transition-all duration-300">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Pagination (if needed) */}
        {filteredProducts.length > 0 && (
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-slate-600">
              Showing {filteredProducts.length} of {products.length} products
            </p>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-white/70 border border-purple-200/50 rounded-lg text-slate-600 hover:bg-purple-50/50 transition-all duration-300">
                Previous
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                1
              </button>
              <button className="px-4 py-2 bg-white/70 border border-purple-200/50 rounded-lg text-slate-600 hover:bg-purple-50/50 transition-all duration-300">
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;