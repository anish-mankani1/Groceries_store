import React from 'react'
import { useNavigate } from "react-router-dom";


const styles = {
  hero: {
    background: "#EAF3DE",
    padding: "80px 40px",
    textAlign: "center",
    borderBottom: "0.5px solid #C0DD97",
  },
  heroBadge: {
    display: "inline-block",
    background: "#C0DD97",
    color: "#27500A",
    fontSize: "12px",
    padding: "4px 14px",
    borderRadius: "20px",
    marginBottom: "16px",
    letterSpacing: "0.5px",
  },
  heroH1: {
    fontSize: "42px",
    fontWeight: 500,
    color: "#173404",
    lineHeight: 1.2,
    marginBottom: "14px",
  },
  heroSpan: { color: "#3B6D11" },
  heroP: {
    fontSize: "16px",
    color: "#3B6D11",
    marginBottom: "32px",
    maxWidth: "480px",
    marginLeft: "auto",
    marginRight: "auto",
    lineHeight: 1.7,
  },
  heroBtns: { display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" },
  btnPrimary: {
    background: "#3B6D11",
    color: "#EAF3DE",
    border: "none",
    padding: "12px 28px",
    borderRadius: "8px",
    fontSize: "15px",
    cursor: "pointer",
  },
  btnSecondary: {
    background: "transparent",
    color: "#3B6D11",
    border: "1.5px solid #3B6D11",
    padding: "12px 28px",
    borderRadius: "8px",
    fontSize: "15px",
    cursor: "pointer",
  },
  section: { padding: "56px 40px" },
  sectionTitle: { fontSize: "22px", fontWeight: 500, marginBottom: "8px" },
  sectionSub: { fontSize: "14px", color: "#666", marginBottom: "32px" },
  categoriesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
    gap: "16px",
  },
  catCard: {
    background: "#f9f9f9",
    border: "0.5px solid #e0e0e0",
    borderRadius: "12px",
    padding: "24px 16px",
    textAlign: "center",
    cursor: "pointer",
  },
  catIcon: { fontSize: "28px", marginBottom: "10px" },
  catName: { fontSize: "14px", fontWeight: 500 },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "16px",
  },
  featCard: {
    border: "0.5px solid #e0e0e0",
    borderRadius: "12px",
    padding: "20px",
    background: "#fff",
  },
  featIcon: {
    width: "40px",
    height: "40px",
    background: "#EAF3DE",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "12px",
    fontSize: "20px",
  },
  featTitle: { fontSize: "14px", fontWeight: 500, marginBottom: "4px" },
  featDesc: { fontSize: "13px", color: "#666", lineHeight: 1.5 },
  banner: {
    margin: "0 40px 56px",
    background: "#173404",
    borderRadius: "16px",
    padding: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "20px",
  },
  bannerH2: { fontSize: "22px", fontWeight: 500, color: "#C0DD97", marginBottom: "8px" },
  bannerP: { fontSize: "14px", color: "#97C459", lineHeight: 1.6 },
  btnLight: {
    background: "#EAF3DE",
    color: "#173404",
    border: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    fontSize: "14px",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  footer: {
    borderTop: "0.5px solid #e0e0e0",
    padding: "32px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "12px",
  },
  footerBrand: { fontSize: "16px", fontWeight: 500 },
  footerLinks: { display: "flex", gap: "24px" },
  footerLink: { fontSize: "13px", color: "#666", textDecoration: "none" },
  footerCopy: { fontSize: "12px", color: "#999" },
};

const categories = [
  { icon: "🥦", name: "Vegetables" },
  { icon: "🍎", name: "Fruits" },
  { icon: "🌾", name: "Groceries" },
  { icon: "🧴", name: "Juice" },
];

const features = [
  { icon: "🚚", title: "Fast delivery", desc: "Same-day delivery available in your area" },
  { icon: "🌱", title: "Farm fresh", desc: "Sourced directly from local farms daily" },
  { icon: "💳", title: "Easy payments", desc: "UPI, cards, COD — all accepted" },
  { icon: "🔄", title: "Easy returns", desc: "Not satisfied? We'll replace it, no questions" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroBadge}>🌿 Fresh · Local · Daily</div>
        <h1 style={styles.heroH1}>
          Your daily <span style={styles.heroSpan}>fresh groceries</span>,<br />delivered fast
        </h1>
        <p style={styles.heroP}>
          Shop fresh vegetables, fruits, dairy, and more — all sourced locally and delivered to your door.
        </p>
        <div style={styles.heroBtns}>
          <button onClick={() => (navigate("/shop"))} style={styles.btnPrimary}>Shop Now</button>
          <button onClick={() => (navigate("/shop"))} style={styles.btnSecondary}>Browse Categories</button>
        </div>
      </section>

      {/* Categories */}
      <section style={styles.section}>
        <div style={styles.sectionTitle}>Shop by category</div>
        <div style={styles.sectionSub}></div>
        <div style={styles.categoriesGrid}>
          {categories.map((cat) => (
            <div key={cat.name} style={styles.catCard}>
              <div style={styles.catIcon}>{cat.icon}</div>
              <div style={styles.catName}>{cat.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <div style={styles.banner}>
        <div>
          <h2 style={styles.bannerH2}>First order? Get 10% off 🎉</h2>
          <p style={styles.bannerP}>Use code FRESH10 at checkout. Valid on orders above ₹299.</p>
        </div>
        <button style={styles.btnLight}>Claim Offer</button>
      </div>

      {/* Features */}
      <section style={{ ...styles.section, paddingTop: 0 }}>
        <div style={styles.sectionTitle}>Why shop with us?</div>
        <div style={styles.sectionSub}>Simple, fresh, and reliable</div>
        <div style={styles.featuresGrid}>
          {features.map((f) => (
            <div key={f.title} style={styles.featCard}>
              <div style={styles.featIcon}>{f.icon}</div>
              <div style={styles.featTitle}>{f.title}</div>
              <div style={styles.featDesc}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

    
    </div>
  );
}
