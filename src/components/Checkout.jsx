import { useCart } from "./Cartitems";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



export default function CheckoutPage() {
  const { cartItems, totalItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "", phone: "", address: "", city: "", pincode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    // Basic validation
    if (!form.name || !form.phone || !form.address || !form.city || !form.pincode) {
      alert("Please fill all fields!");
      return;
    }
    // Clear cart and go to success page
    clearCart();
    navigate("/order-success");
  };

  const handlePayment = async () => {
    try {
      // Step 1: Call your backend to create an order
      const response = await fetch("https://groceries-store-backend-1jb9.onrender.com/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalPrice })
      });

      const orderData = await response.json();

      // Step 2: Open Razorpay checkout popup
      const options = {
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        order_id: orderData.orderId,
        name: "FreshMart",
        description: "Order Payment",
        handler: async function (paymentResponse) {
          // Step 3: Send payment details to backend for verification
          try {
            const verifyResponse = await fetch("https://groceries-store-backend-1jb9.onrender.com/api/payment/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: paymentResponse.razorpay_order_id,
                razorpay_payment_id: paymentResponse.razorpay_payment_id,
                razorpay_signature: paymentResponse.razorpay_signature
              })
            });

            const verifyData = await verifyResponse.json();

            if (verifyData.success) {
              alert("Payment successful! Payment ID: " + paymentResponse.razorpay_payment_id);
              clearCart();
              navigate("/");

            } else {
              alert("Payment verification failed. Please contact support.");
            }
          } catch (verifyError) {
            console.error("Verification error:", verifyError);
            alert("Payment was made, but verification failed. Please contact support.");
          }
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999"
        },
        theme: {
          color: "#3B7E0F"
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      console.error("Payment failed:", error);
      alert("Something went wrong. Please try again.");
    }
};

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Checkout</h1>

      <div style={styles.layout}>

        {/* LEFT: Delivery + Payment */}
        <div>

          {/* Delivery Address */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>📦 Delivery Address</h2>
            <input style={styles.input} placeholder="Full Name"
              name="name" value={form.name} onChange={handleChange} />
            <input style={styles.input} placeholder="Phone Number"
              name="phone" value={form.phone} onChange={handleChange} />
            <input style={styles.input} placeholder="Full Address"
              name="address" value={form.address} onChange={handleChange} />
            <div style={{ display: "flex", gap: "12px" }}>
              <input style={styles.input} placeholder="City"
                name="city" value={form.city} onChange={handleChange} />
              <input style={styles.input} placeholder="Pincode"
                name="pincode" value={form.pincode} onChange={handleChange} />
            </div>
          </div>


        </div>

        {/* RIGHT: Order Summary */}
        <div style={styles.summary}>
          <h2 style={styles.cardTitle}>🧾 Order Summary</h2>

          {cartItems.map((item) => (
            <div key={item.id} style={styles.summaryItem}>
              <span>{item.emoji} {item.name} × {item.qty}</span>
              <span>₹{item.price * item.qty}</span>
            </div>
          ))}

          <div style={styles.divider} />

          <div style={styles.summaryRow}>
            <span>Subtotal ({totalItems} items)</span>
            <span>₹{totalPrice}</span>
          </div>
          <div style={styles.summaryRow}>
            <span>Delivery</span>
            <span style={{ color: "#3B6D11" }}>FREE</span>
          </div>

          <div style={styles.divider} />

          <div style={{ ...styles.summaryRow, fontWeight: 600, fontSize: "18px" }}>
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>

          <button onClick={handlePayment}>
            Pay ₹{totalPrice}
          </button>

          <button style={styles.backBtn} onClick={() => navigate("/cart")}>
            ← Back to Cart
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

  card: {
    background: "#fff", border: "0.5px solid #e0e0e0",
    borderRadius: "12px", padding: "24px", marginBottom: "20px",
  },
  cardTitle: { fontSize: "17px", fontWeight: 500, color: "#173404", marginBottom: "16px" },

  input: {
    width: "100%", padding: "11px 14px",
    border: "1px solid #ddd", borderRadius: "8px",
    fontSize: "14px", marginBottom: "12px",
    outline: "none", boxSizing: "border-box",
  },

  radioLabel: {
    display: "flex", alignItems: "center",
    padding: "12px 14px", border: "1px solid #e0e0e0",
    borderRadius: "8px", marginBottom: "10px",
    cursor: "pointer", fontSize: "14px", color: "#333",
  },

  summary: {
    background: "#fff", border: "0.5px solid #e0e0e0",
    borderRadius: "12px", padding: "24px",
    position: "sticky", top: "20px",
  },
  summaryItem: {
    display: "flex", justifyContent: "space-between",
    fontSize: "14px", color: "#555", marginBottom: "10px",
  },
  summaryRow: {
    display: "flex", justifyContent: "space-between",
    fontSize: "15px", color: "#444", marginBottom: "10px",
  },
  divider: { borderTop: "0.5px solid #e0e0e0", margin: "12px 0" },

  placeOrderBtn: {
    width: "100%", padding: "14px",
    background: "#3B6D11", color: "#fff",
    border: "none", borderRadius: "8px",
    fontSize: "15px", cursor: "pointer",
    marginTop: "20px", marginBottom: "10px",
  },
  backBtn: {
    width: "100%", padding: "12px",
    background: "transparent", color: "#3B6D11",
    border: "1.5px solid #3B6D11", borderRadius: "8px",
    fontSize: "14px", cursor: "pointer",
  },
};