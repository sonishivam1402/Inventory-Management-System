import React, { useEffect, useState } from 'react';
import { getAllStockMovements } from '../api/stockMovements';

const pastelBg = 'bg-[#f8fafc]';
const pastelHeader = 'bg-[#fef9c3] text-[#373a40]';
const pastelRow = 'bg-[#fefcbf]';
const pastelButton = 'bg-[#fde68a] hover:bg-[#fbbf24] text-[#78350f] font-semibold py-2 px-4 rounded shadow';

const StockMovements = () => {
  const [movements, setMovements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllStockMovements()
      .then(setMovements)
      .catch(() => setError('Failed to load stock movements'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={`min-h-screen p-8 ${pastelBg}`}>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-[#f59e42]">Stock Movements</h1>
        <button className={pastelButton}>+ Add Movement</button>
      </div>
      {loading ? (
        <div className="text-lg text-[#fbbf24]">Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="overflow-x-auto rounded shadow-lg">
          <table className="min-w-full">
            <thead>
              <tr className={pastelHeader}>
                <th className="py-3 px-4 text-left">Product</th>
                <th className="py-3 px-4 text-left">Type</th>
                <th className="py-3 px-4 text-left">Quantity</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {movements.length === 0 ? (
                <tr><td colSpan={5} className="text-center py-6 text-[#fbbf24]">No stock movements found.</td></tr>
              ) : (
                movements.map(movement => (
                  <tr key={movement.id} className={pastelRow + ' border-b border-[#fef9c3]'}>
                    <td className="py-2 px-4">{movement.productName}</td>
                    <td className="py-2 px-4">{movement.type}</td>
                    <td className="py-2 px-4">{movement.quantity}</td>
                    <td className="py-2 px-4">{movement.date}</td>
                    <td className="py-2 px-4">
                      <button className="text-[#f59e42] hover:underline mr-2">Edit</button>
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

export default StockMovements; 