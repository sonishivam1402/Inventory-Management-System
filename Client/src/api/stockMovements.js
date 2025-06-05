const API_BASE = 'http://localhost:5000/stock-movement';

export async function getAllStockMovements() {
  const res = await fetch(API_BASE);
  return res.json();
}

export async function getStockMovementById(id) {
  const res = await fetch(`${API_BASE}/${id}`);
  return res.json();
}

export async function createStockMovement(data) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateStockMovement(id, data) {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteStockMovement(id) {
  const res = await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
  return res.json();
} 