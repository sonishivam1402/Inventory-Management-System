import React, { useEffect, useState } from 'react';
import { getAllPurchases } from '../api/purchases';

const pastelBg = 'bg-[#f8fafc]';
const pastelHeader = 'bg-[#bbf7d0] text-[#373a40]';
const pastelRow = 'bg-[#dcfce7]';
const pastelButton = 'bg-[#6ee7b7] hover:bg-[#34d399] text-white font-semibold py-2 px-4 rounded shadow';

const Purchases = () => {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllPurchases()
      .then(setPurchases)
      .catch(() => setError('Failed to load purchases'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={`min-h-screen p-8 ${pastelBg}`}>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-[#059669]">Purchases</h1>
        <button className={pastelButton}>+ Add Purchase</button>
      </div>
      {loading ? (
        <div className="text-lg text-[#34d399]">Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="overflow-x-auto rounded shadow-lg">
          <table className="min-w-full">
            <thead>
              <tr className={pastelHeader}>
                <th className="py-3 px-4 text-left">Supplier</th>
                <th className="py-3 px-4 text-left">Product</th>
                <th className="py-3 px-4 text-left">Quantity</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {purchases.length === 0 ? (
                <tr><td colSpan={5} className="text-center py-6 text-[#34d399]">No purchases found.</td></tr>
              ) : (
                purchases.map(purchase => (
                  <tr key={purchase.id} className={pastelRow + ' border-b border-[#bbf7d0]'}>
                    <td className="py-2 px-4">{purchase.supplierName}</td>
                    <td className="py-2 px-4">{purchase.productName}</td>
                    <td className="py-2 px-4">{purchase.quantity}</td>
                    <td className="py-2 px-4">{purchase.date}</td>
                    <td className="py-2 px-4">
                      <button className="text-[#059669] hover:underline mr-2">Edit</button>
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

export default Purchases; 