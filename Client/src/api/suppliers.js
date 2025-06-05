const API_BASE = 'http://localhost:5000/suppliers';

export async function getAllSuppliers() {
  const res = await fetch(API_BASE);
  return res.json();
}

export async function getSupplierById(id) {
  const res = await fetch(`${API_BASE}/${id}`);
  return res.json();
}

export async function createSupplier(data) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateSupplier(id, data) {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteSupplier(id) {
  const res = await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
  return res.json();
} 