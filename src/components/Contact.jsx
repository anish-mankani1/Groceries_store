import React from 'react'
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";


const supabase = createClient(
  "https://gnpvdaifagpoxbczvohh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImducHZkYWlmYWdwb3hiY3p2b2hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5MDU1NzAsImV4cCI6MjA5NjQ4MTU3MH0.RiYGDt_H8xSDa6TVkYslkJF4n6SEZfBysQFJJgXicHw"
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ handleSubmit inside component
  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.message) {
      alert("Please fill all fields!");
      return;
    }

    setLoading(true);
    const { error } = await supabase
      .from("Groceries")   // ✅ your actual table name
      .insert([{
        name: form.name,         // match your column names exactly
        "phone_or_email": form.phone,
        message: form.message,
      }]);
    setLoading(false);

    if (error) {
      console.error(error);
      alert("Something went wrong!");
    } else {
      alert("Message sent successfully! ✅");
      setForm({ name: "", phone: "", message: "" }); // clear form
    }
  };

  return (
     


  



    <div style={{ fontFamily: "sans-serif", maxWidth: "900px", margin: "0 auto", padding: "2rem 1rem" }}>

      {/* Hero */}
      <div style={{ background: "#EAF3DE", borderRadius: "12px", padding: "2.5rem 2rem", textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "600", color: "#27500A", marginBottom: "0.5rem" }}>Get in touch</h1>
        <p style={{ color: "#3B6D11", fontSize: "15px", lineHeight: "1.7" }}>
          Have a question, feedback, or want to place a bulk order?<br />
          We'd love to hear from you.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px", marginBottom: "2rem" }}>
        {[
          ["📍", "Store address", "12, Market Road, Andheri West, Mumbai – 400053"],
          ["📞", "Phone", "+918378853372"],
          ["✉️", "Email", "mankanianeesh@Gmail.com"],
          ["💬", "WhatsApp orders", "+918378853372"],
        ].map(([icon, label, value]) => (
          <div key={label} style={{ background: "#f5f5f0", borderRadius: "8px", padding: "1rem" }}>
            <div style={{ fontSize: "20px", marginBottom: "6px" }}>{icon}</div>
            <div style={{ fontSize: "12px", color: "#888" }}>{label}</div>
            <div style={{ fontSize: "14px", fontWeight: "600", marginTop: "2px" }}>{value}</div>
          </div>
        ))}
      </div>

      {/* Hours + Form */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "2rem" }}>
        
        {/* Hours */}
        <div>
          <h2 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "12px" }}>Store hours</h2>
          <div style={{ background: "#fff", border: "0.5px solid #ddd", borderRadius: "12px", padding: "1.25rem" }}>
            {[
              ["Monday – Friday", "7:00 AM – 9:00 PM"],
              ["Saturday", "7:00 AM – 10:00 PM"],
              ["Sunday", "8:00 AM – 8:00 PM"],
              ["Public holidays", "9:00 AM – 6:00 PM"],
            ].map(([day, time]) => (
              <div key={day} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "0.5px solid #eee", fontSize: "13px" }}>
                <span style={{ color: "#888" }}>{day}</span>
                <span style={{ fontWeight: "600" }}>{time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
      {/* Form */}
<div>
  <h2 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "12px" }}>Send us a message</h2>
  <div style={{ background: "#fff", border: "0.5px solid #ddd", borderRadius: "12px", padding: "1.25rem" }}>
    
    <div style={{ marginBottom: "12px" }}>
      <label style={{ fontSize: "13px", color: "#888", display: "block", marginBottom: "4px" }}>Your name</label>
      <input
        type="text"
        name="name"              // ✅ ADD THIS
        value={form.name}        // ✅ ADD THIS
        onChange={handleChange}  // ✅ ADD THIS
        placeholder="Rahul Sharma"
        style={{ width: "100%", padding: "8px 12px", borderRadius: "8px", border: "0.5px solid #ccc", fontSize: "14px", boxSizing: "border-box" }}
      />
    </div>

    <div style={{ marginBottom: "12px" }}>
      <label style={{ fontSize: "13px", color: "#888", display: "block", marginBottom: "4px" }}>Phone / Email</label>
      <input
        type="text"
        name="phone"             // ✅ ADD THIS
        value={form.phone}       // ✅ ADD THIS
        onChange={handleChange}  // ✅ ADD THIS
        placeholder="+91 99999 00000"
        style={{ width: "100%", padding: "8px 12px", borderRadius: "8px", border: "0.5px solid #ccc", fontSize: "14px", boxSizing: "border-box" }}
      />
    </div>

    <div style={{ marginBottom: "12px" }}>
      <label style={{ fontSize: "13px", color: "#888", display: "block", marginBottom: "4px" }}>Message</label>
      <textarea
        name="message"           // ✅ ADD THIS
        value={form.message}     // ✅ ADD THIS
        onChange={handleChange}  // ✅ ADD THIS
        placeholder="I'd like to place a bulk order for..."
        style={{ width: "100%", padding: "8px 12px", borderRadius: "8px", border: "0.5px solid #ccc", fontSize: "14px", height: "90px", resize: "vertical", boxSizing: "border-box" }}
      />
    </div>

    <button
      onClick={handleSubmit}
      disabled={loading}
      style={{ background: loading ? "#aaa" : "#3B6D11", color: "#EAF3DE", border: "none", borderRadius: "8px", padding: "10px 24px", fontSize: "14px", fontWeight: "600", cursor: "pointer", width: "100%" }}
    >
      {loading ? "Sending..." : "Send message"}
    </button>
  </div>
</div>
      </div>

      {/* Map placeholder */}
      <div style={{ borderRadius: "8px", overflow: "hidden", width: "100%" }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14881.01473826303!2d79.09401793505899!3d21.182079031850044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1780758324615!5m2!1sen!2sin"
    width="100%"
    height="400"
    style={{ border: 0, display: "block" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
    </div>
  );
}
