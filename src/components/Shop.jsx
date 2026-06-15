import React from 'react'

import { useState } from "react";
import { useCart } from "./Cartitems";
import { Products, categories } from "./Products";

export default function ShopPage() {
  // LOCAL STATE: which category tab is active
  // "All" means show everything
  const [activeCategory, setActiveCategory] = useState("All");

  // Get addToCart function from our global CartContext
  const { addToCart } = useCart();

  // FILTER LOGIC:
  // If "All" is selected → show all products
  // Otherwise → show only products matching the category
  const filtered =
    activeCategory === "All"
      ? Products
      : Products.filter((p) => p.category === activeCategory);

  return (
    <div style={styles.page}>

      {/* PAGE HEADER */}
      <div style={styles.header}>
        <h1 style={styles.heading}>Our Shop</h1>
        <p style={styles.subheading}>Fresh products delivered to your door</p>
      </div>

      {/* CATEGORY FILTER TABS */}
      {/* When user clicks a tab, setActiveCategory updates the state */}
      {/* This triggers a re-render and filtered array changes */}
      <div style={styles.tabs}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              ...styles.tab,
              ...(activeCategory === cat ? styles.tabActive : {}),
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      {/* .map() loops through filtered products and renders a card for each */}
      <div style={styles.grid}>
        {filtered.map((product) => (
          <ProductCard
            key={product.id}       // React needs unique key for each item in list
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product, onAddToCart }) {
  const { cartItems, updateQty, removeFromCart } = useCart();
  
  // Check if this product is already in cart
  const cartItem = cartItems.find((item) => item.id === product.id);
  const qty = cartItem ? cartItem.qty : 0;

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.productImage} />
      <div style={{ padding: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
        <span style={styles.badge}>{product.category}</span>
        <h3 style={styles.name}>{product.name}</h3>
        <p style={styles.unit}>{product.unit}</p>
        <p style={styles.price}>₹{product.price}</p>

        {/* Show Add button OR +/- controls */}
        {qty === 0 ? (
          <button style={styles.btn} onClick={() => onAddToCart(product)}>
            + Add to Cart
          </button>
        ) : (
          <div style={styles.qtyControl}>
            <button
              style={styles.qtyBtn}
              onClick={() => qty === 1 ? removeFromCart(product.id) : updateQty(product.id, qty - 1)}
            >−</button>
            <span style={styles.qtyNum}>{qty}</span>
            <button
              style={styles.qtyBtn}
              onClick={() => updateQty(product.id, qty + 1)}
            >+</button>
          </div>
        )}
      </div>
    </div>
  );
}

// STYLES
const styles = {
  page: { padding: "32px 40px", maxWidth: "1200px", margin: "0 auto" },
  header: { marginBottom: "32px" },
  heading: { fontSize: "28px", fontWeight: 500, color: "#173404", marginBottom: "6px" },
  subheading: { fontSize: "15px", color: "#666" },

  tabs: { display: "flex", gap: "10px", marginBottom: "32px", flexWrap: "wrap" },
  tab: {
    padding: "8px 20px",
    borderRadius: "20px",
    border: "1.5px solid #C0DD97",
    background: "transparent",
    color: "#3B6D11",
    fontSize: "14px",
    cursor: "pointer",
  },
  tabActive: {
    background: "#3B6D11",
    color: "#fff",
    border: "1.5px solid #3B6D11",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
  background: "#fff",
  border: "0.5px solid #e0e0e0",
  borderRadius: "12px",
  padding: "0",          // ← change from "20px" to "0"
  overflow: "hidden",    // ← add this
  display: "flex",
  flexDirection: "column",
},
  productImage: {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  display: "block",
},
  badge: {
    fontSize: "11px",
    background: "#EAF3DE",
    color: "#3B6D11",
    padding: "2px 10px",
    borderRadius: "20px",
    alignSelf: "flex-start",
  },
  name: { fontSize: "16px", fontWeight: 500, color: "#173404" },
  unit: { fontSize: "12px", color: "#999" },
  price: { fontSize: "18px", fontWeight: 500, color: "#3B6D11", margin: "4px 0" },
  btn: {
    marginTop: "auto",
    padding: "10px",
    background: "#3B6D11",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    cursor: "pointer",
  },
 btnAdded: { background: "#639922" },

  qtyControl: {
    display: "flex", alignItems: "center",
    justifyContent: "center", gap: "12px",
    marginTop: "auto",
  },
  qtyBtn: {
    width: "32px", height: "32px",
    border: "1px solid #C0DD97",
    background: "#EAF3DE", color: "#3B6D11",
    borderRadius: "6px", cursor: "pointer", fontSize: "18px",
  },
  qtyNum: { fontSize: "16px", fontWeight: 500, minWidth: "24px", textAlign: "center" },

};
