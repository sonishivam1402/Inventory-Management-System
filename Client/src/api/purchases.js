const API_BASE = 'http://localhost:5000/purchases';

export async function getAllPurchases() {
  const res = await fetch(API_BASE);
  return res.json();
}

export async function getPurchaseById(id) {
  const res = await fetch(`${API_BASE}/${id}`);
  return res.json();
}

export async function createPurchase(data) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updatePurchase(id, data) {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deletePurchase(id) {
  const res = await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
  return res.json();
} 