---
inclusion: manual
contextKey: database
---

# Database Schema Reference

## Supabase Tables

### users (handled by Supabase Auth)
- `id`: UUID (primary key)
- `email`: string
- `full_name`: string (user_metadata)
- `created_at`: timestamp

### categories
- `id`: UUID (primary key)
- `name`: string
- `description`: text
- `created_at`: timestamp

### products
- `id`: UUID (primary key)
- `serpapi_id`: string (unique, from SerpAPI)
- `name`: string
- `description`: text
- `price`: decimal
- `image_url`: string
- `category_id`: UUID (foreign key to categories)
- `stock_quantity`: integer
- `rating`: decimal
- `review_count`: integer
- `brand`: string
- `created_at`: timestamp
- `updated_at`: timestamp

### cart_items
- `id`: UUID (primary key)
- `user_id`: UUID (foreign key to auth.users)
- `product_id`: UUID (foreign key to products)
- `quantity`: integer
- `created_at`: timestamp
- `updated_at`: timestamp

### orders
- `id`: UUID (primary key)
- `user_id`: UUID (foreign key to auth.users)
- `total_amount`: decimal
- `status`: string (pending, paid, shipped, delivered, cancelled)
- `created_at`: timestamp
- `updated_at`: timestamp

### order_items
- `id`: UUID (primary key)
- `order_id`: UUID (foreign key to orders)
- `product_id`: UUID (foreign key to products)
- `quantity`: integer
- `price`: decimal (price at time of order)
- `created_at`: timestamp

## Row Level Security (RLS) Policies

### cart_items
- Users can only access their own cart items
- Users can insert/update/delete their own cart items

### orders
- Users can only access their own orders
- Users can insert their own orders
- Only authenticated users can create orders

### order_items
- Users can only access order items for their own orders
- Users can insert order items for their own orders

## Database Functions and Triggers
- Auto-update `updated_at` timestamps
- Inventory management for stock quantities
- Order total calculations
- Cart item validation