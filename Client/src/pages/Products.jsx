import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../api/products';

const pastelBg = 'bg-[#f8fafc]';
const pastelHeader = 'bg-[#c7d2fe] text-[#373a40]';
const pastelRow = 'bg-[#e0e7ff]';
const pastelButton = 'bg-[#a5b4fc] hover:bg-[#818cf8] text-white font-semibold py-2 px-4 rounded shadow';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllProducts()
      .then(setProducts)
      .catch(() => setError('Failed to load products'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={`min-h-screen p-8 ${pastelBg}`}>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-[#6366f1]">Products</h1>
        <button className={pastelButton}>+ Add Product</button>
      </div>
      {loading ? (
        <div className="text-lg text-[#818cf8]">Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="overflow-x-auto rounded shadow-lg">
          <table className="min-w-full">
            <thead>
              <tr className={pastelHeader}>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Category</th>
                <th className="py-3 px-4 text-left">Price</th>
                <th className="py-3 px-4 text-left">Stock</th>
                <th className="py-3 px-4 text-left">Location</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr><td colSpan={5} className="text-center py-6 text-[#818cf8]">No products found.</td></tr>
              ) : (
                products.map(product => (
                  <tr key={product.id} className={pastelRow + ' border-b border-[#c7d2fe]'}>
                    <td className="py-2 px-4">{product.name}</td>
                    <td className="py-2 px-4">{product.category}</td>
                    <td className="py-2 px-4">{product.unit_price}</td>
                    <td className="py-2 px-4">{product.quantity_in_stock}</td>
                    <td className="py-2 px-4">{product.location}</td>
                    <td className="py-2 px-4">
                      <button className="text-[#6366f1] hover:underline mr-2">Edit</button>
                      <button className="text-red-400 hover:underline">Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Products; 