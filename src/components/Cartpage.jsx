import { useCart } from "./Cartitems"
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  // Get everything we need from CartContext
  const { cartItems, removeFromCart, updateQty, totalItems, totalPrice } = useCart();
  const navigate = useNavigate();

  // If cart is empty, show empty state
  if (cartItems.length === 0) {
    return (
      <div style={styles.empty}>
        <div style={{ fontSize: "64px" }}>🛒</div>
        <h2 style={styles.emptyTitle}>Your cart is empty</h2>
        <p style={styles.emptyText}>Add some fresh items from the shop!</p>
        <button style={styles.shopBtn} onClick={() => navigate("/shop")}>
          Go to Shop
        </button>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Your Cart ({totalItems} items)</h1>

      <div style={styles.layout}>

        {/* LEFT: Cart Items List */}
        <div style={styles.itemsList}>
          {cartItems.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              {/* Emoji */}
              <div style={styles.itemEmoji}>{item.emoji}</div>

              {/* Name + Price */}
              <div style={styles.itemInfo}>
                <p style={styles.itemName}>{item.name}</p>
                <p style={styles.itemUnit}>{item.unit}</p>
                <p style={styles.itemPrice}>₹{item.price} each</p>
              </div>

              {/* Quantity Controls: - number + */}
              <div style={styles.qtyControl}>
                <button
                  style={styles.qtyBtn}
                  onClick={() => updateQty(item.id, item.qty - 1)}
                >−</button>
                <span style={styles.qtyNum}>{item.qty}</span>
                <button
                  style={styles.qtyBtn}
                  onClick={() => updateQty(item.id, item.qty + 1)}
                >+</button>
              </div>

              {/* Item Subtotal */}
              <div style={styles.subtotal}>₹{item.price * item.qty}</div>

              {/* Remove Button */}
              <button
                style={styles.removeBtn}
                onClick={() => removeFromCart(item.id)}
              >✕</button>
            </div>
          ))}
        </div>

        {/* RIGHT: Order Summary */}
        <div style={styles.summary}>
          <h2 style={styles.summaryTitle}>Order Summary</h2>

          <div style={styles.summaryRow}>
            <span>Subtotal ({totalItems} items)</span>
            <span>₹{totalPrice}</span>
          </div>
          <div style={styles.summaryRow}>
            <span>Delivery</span>
            <span style={{ color: "#3B6D11" }}>FREE</span>
          </div>
          <div style={styles.divider} />
          <div style={{ ...styles.summaryRow, fontWeight: 500, fontSize: "18px" }}>
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>

          <button
            style={styles.checkoutBtn}
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout →
          </button>

          <button
            style={styles.continueBtn}
            onClick={() => navigate("/shop")}
          >
            ← Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: { padding: "32px 40px", maxWidth: "1100px", margin: "0 auto" },
  heading: { fontSize: "24px", fontWeight: 500, color: "#173404", marginBottom: "32px" },

  layout: { display: "grid", gridTemplateColumns: "1fr 320px", gap: "32px", alignItems: "start" },

  itemsList: { display: "flex", flexDirection: "column", gap: "16px" },
  cartItem: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    background: "#fff",
    border: "0.5px solid #e0e0e0",
    borderRadius: "12px",
    padding: "16px",
  },
  itemEmoji: { fontSize: "36px" },
  itemInfo: { flex: 1 },
  itemName: { fontWeight: 500, fontSize: "15px", color: "#173404", margin: 0 },
  itemUnit: { fontSize: "12px", color: "#999", margin: "2px 0" },
  itemPrice: { fontSize: "13px", color: "#666", margin: 0 },

  qtyControl: { display: "flex", alignItems: "center", gap: "10px" },
  qtyBtn: {
    width: "28px", height: "28px",
    border: "1px solid #C0DD97",
    background: "#EAF3DE",
    color: "#3B6D11",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },
  qtyNum: { fontSize: "15px", fontWeight: 500, minWidth: "20px", textAlign: "center" },

  subtotal: { fontWeight: 500, fontSize: "16px", color: "#173404", minWidth: "60px", textAlign: "right" },
  removeBtn: {
    background: "none", border: "none",
    color: "#999", cursor: "pointer", fontSize: "16px",
  },

  summary: {
    background: "#fff",
    border: "0.5px solid #e0e0e0",
    borderRadius: "12px",
    padding: "24px",
    position: "sticky",
    top: "20px",
  },
  summaryTitle: { fontSize: "18px", fontWeight: 500, color: "#173404", marginBottom: "20px" },
  summaryRow: {
    display: "flex", justifyContent: "space-between",
    fontSize: "15px", color: "#444", marginBottom: "12px",
  },
  divider: { borderTop: "0.5px solid #e0e0e0", margin: "12px 0" },

  checkoutBtn: {
    width: "100%", padding: "14px",
    background: "#3B6D11", color: "#fff",
    border: "none", borderRadius: "8px",
    fontSize: "15px", cursor: "pointer",
    marginTop: "20px", marginBottom: "10px",
  },
  continueBtn: {
    width: "100%", padding: "12px",
    background: "transparent", color: "#3B6D11",
    border: "1.5px solid #3B6D11", borderRadius: "8px",
    fontSize: "14px", cursor: "pointer",
  },

  empty: { textAlign: "center", padding: "80px 40px" },
  emptyTitle: { fontSize: "22px", fontWeight: 500, color: "#173404", margin: "16px 0 8px" },
  emptyText: { color: "#666", marginBottom: "24px" },
  shopBtn: {
    padding: "12px 28px", background: "#3B6D11", color: "#fff",
    border: "none", borderRadius: "8px", fontSize: "15px", cursor: "pointer",
  },
};