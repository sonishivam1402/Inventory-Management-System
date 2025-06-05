import React, { useEffect, useState } from 'react';
import { getAllSuppliers } from '../api/suppliers';

const pastelBg = 'bg-[#f8fafc]';
const pastelHeader = 'bg-[#fbcfe8] text-[#373a40]';
const pastelRow = 'bg-[#fce7f3]';
const pastelButton = 'bg-[#f9a8d4] hover:bg-[#f472b6] text-white font-semibold py-2 px-4 rounded shadow';

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllSuppliers()
      .then(setSuppliers)
      .catch(() => setError('Failed to load suppliers'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={`min-h-screen p-8 ${pastelBg}`}>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-[#db2777]">Suppliers</h1>
        <button className={pastelButton}>+ Add Supplier</button>
      </div>
      {loading ? (
        <div className="text-lg text-[#f472b6]">Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="overflow-x-auto rounded shadow-lg">
          <table className="min-w-full">
            <thead>
              <tr className={pastelHeader}>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Contact</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {suppliers.length === 0 ? (
                <tr><td colSpan={4} className="text-center py-6 text-[#f472b6]">No suppliers found.</td></tr>
              ) : (
                suppliers.map(supplier => (
                  <tr key={supplier.id} className={pastelRow + ' border-b border-[#fbcfe8]'}>
                    <td className="py-2 px-4">{supplier.name}</td>
                    <td className="py-2 px-4">{supplier.phone}</td>
                    <td className="py-2 px-4">{supplier.contact_email}</td>
                    <td className="py-2 px-4">
                      <button className="text-[#db2777] hover:underline mr-2">Edit</button>
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

export default Suppliers; 