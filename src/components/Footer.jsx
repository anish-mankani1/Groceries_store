import React from 'react'
import { Link } from "react-router-dom";

import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const supportLinks = [
  { label: "FAQs", to: "/faqs" },
  { label: "Delivery Info", to: "/Delivery_info" },
  { label: "Return Policy", to: "/Return_policy" },
  { label: "Track Order", to: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#212529", color: "#adb5bd", paddingTop: "60px" }}>

      {/* Main Footer Grid */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "40px", marginBottom: "40px" }}>

          {/* Brand + Newsletter */}
          <div>
            <h5 style={{ color: "#fff", marginBottom: "12px" }}>🛒 FreshMart</h5>
            <p style={{ fontSize: "14px", lineHeight: "1.7", marginBottom: "20px" }}>
              Fresh vegetables, fruits, and groceries delivered to your door daily. Sourced locally, delivered fast.
            </p>
            <p style={{ color: "#fff", fontWeight: 500, marginBottom: "8px", fontSize: "14px" }}>
              Subscribe to our newsletter
            </p>
            <p style={{ fontSize: "13px", marginBottom: "12px" }}>
              Monthly digest of what's new and exciting from us.
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              <input
                type="email"
                placeholder="Email address"
                style={{
                  flex: 1,
                  padding: "10px 14px",
                  borderRadius: "6px",
                  border: "1px solid #495057",
                  background: "#2c3034",
                  color: "#fff",
                  fontSize: "14px",
                  outline: "none",
                }}
              />
              <button
                style={{
                  padding: "10px 18px",
                  background: "#0d6efd",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "14px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
               onClick={()=>alert("Subscribed!")}>
                Subscribe 
              </button>
            </div>
          </div>

          {/* Column 2 - Shop */}
          <div>
            <h6 style={{ color: "#fff", marginBottom: "16px", fontWeight: 600 }}>Shop</h6>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Vegetables", "Fruits", "Groceries", "Juice"].map((item) => (
                <li key={item}>
                  <Link to="/shop" style={{ color: "#adb5bd", textDecoration: "none", fontSize: "14px" }}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h6 style={{ color: "#fff", marginBottom: "16px", fontWeight: 600 }}>Company</h6>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Blog", to: "/blog" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} style={{ color: "#adb5bd", textDecoration: "none", fontSize: "14px" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Support */}
          <div>
  <h6 style={{ color: "#fff", marginBottom: "16px", fontWeight: 600 }}>Support</h6>
  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
    {supportLinks.map((item) => (
      <li key={item.label}>
        <Link
          to={item.to}
          style={{ color: "#adb5bd", textDecoration: "none", fontSize: "14px" }}
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
</div>

        </div>

        {/* Divider */}
        <hr style={{ borderColor: "#495057", margin: "0" }} />

        {/* Bottom Bar */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 0",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          <p style={{ margin: 0, fontSize: "13px" }}>
            © 2026 FreshMart. All rights reserved.
          </p>

          {/* Social Icons */}
          <div style={{ display: "flex", gap: "16px" }}>
            <a  onClick={()=>window.open("https://www.instagram.com", "_blank")} style={{ color: "#adb5bd", fontSize: "24px" }}><FaInstagram /></a>
            <a  onClick={()=>window.open("https://www.facebook.com", "_blank")} style={{ color: "#adb5bd", fontSize: "24px" }}><FaFacebook /></a>
            <a  onClick={()=>window.open("https://www.twitter.com", "_blank")} style={{ color: "#adb5bd", fontSize: "24px" }}><FaTwitter /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}