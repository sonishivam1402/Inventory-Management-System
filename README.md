# Inventory Management System (IMS)

A backend API for managing inventory, suppliers, purchases, and stock movements.

---

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <project-directory>/Server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Create a `.env` file in the `Server` directory.
   - Add your PostgreSQL connection string:
     ```
     DATABASE_URL=your_postgres_connection_string
     PORT=5000
     ```

4. **Run the server:**
   - For development (with auto-reload):
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

---

## API Documentation

### Products
- `GET /products` — List all products
- `GET /products/low-stock` — List products low in stock
- `GET /products/search` — Search products
- `GET /products/:id` — Get product by ID
- `POST /products` — Add a new product
- `PUT /products/:id` — Update a product
- `DELETE /products/:id` — Delete a product

### Suppliers
- `GET /suppliers` — List all suppliers
- `GET /suppliers/:id` — Get supplier by ID
- `POST /suppliers` — Add a new supplier
- `PUT /suppliers/:id` — Update a supplier
- `DELETE /suppliers/:id` — Delete a supplier

### Purchases
- `GET /purchases` — List all purchases
- `GET /purchases/:id` — Get purchase by ID
- `POST /purchases` — Add a new purchase
- `PUT /purchases/:id` — Update a purchase
- `DELETE /purchases/:id` — Delete a purchase

### Stock Movement
- `GET /stock-movement` — List all stock movements
- `GET /stock-movement/:id` — Get stock movement by ID
- `POST /stock-movement` — Add a new stock movement
- `PUT /stock-movement/:id` — Update a stock movement
- `DELETE /stock-movement/:id` — Delete a stock movement

---
