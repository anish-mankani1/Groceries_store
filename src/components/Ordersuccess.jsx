import { useNavigate } from "react-router-dom";

export default function Ordersuccess() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "80px 40px" }}>
      <div style={{ fontSize: "72px" }}>🎉</div>
      <h1 style={{ fontSize: "26px", color: "#173404", margin: "16px 0 8px" }}>
        Order Placed Successfully!
      </h1>
      <p style={{ color: "#666", marginBottom: "32px" }}>
        Thank you! Your fresh groceries are on the way.
      </p>
      <button
        onClick={() => navigate("/shop")}
        style={{
          padding: "12px 32px", background: "#3B6D11",
          color: "#fff", border: "none", borderRadius: "8px",
          fontSize: "15px", cursor: "pointer",
        }}
      >
        Continue Shopping
      </button>
    </div>
  );
}