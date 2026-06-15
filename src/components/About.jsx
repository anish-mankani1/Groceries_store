export default function About() {
  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: "900px", margin: "0 auto", padding: "2rem 1rem" }}>

      {/* Hero */}
      <div style={{ background: "#EAF3DE", borderRadius: "12px", padding: "2.5rem 2rem", textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "600", color: "#27500A", marginBottom: "0.5rem" }}>🛒 FreshMart Grocery</h1>
        <p style={{ color: "#3B6D11", fontSize: "15px", lineHeight: "1.7" }}>
          Your neighbourhood store for fresh produce, everyday essentials,<br />
          and quality groceries — delivered with care since 2010.
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "2rem" }}>
        {[["14+", "Years in business"], ["5,000+", "Happy customers"], ["2,000+", "Products stocked"], ["50+", "Local suppliers"]].map(([num, lbl]) => (
          <div key={lbl} style={{ background: "#f5f5f0", borderRadius: "8px", padding: "1rem", textAlign: "center" }}>
            <div style={{ fontSize: "20px", fontWeight: "600", color: "#3B6D11" }}>{num}</div>
            <div style={{ fontSize: "11px", color: "#888", marginTop: "4px" }}>{lbl}</div>
          </div>
        ))}
      </div>

      {/* Our Story */}
      <h2 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "1rem" }}>Our story</h2>
      <div style={{ background: "#fff", border: "0.5px solid #ddd", borderRadius: "12px", padding: "1.25rem", marginBottom: "1.5rem" }}>
        <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.8", marginBottom: "12px" }}>
          FreshMart began in 2010 as a humble corner shop in Andheri West, started by Rajesh Kumar with a single belief — that every family deserves access to fresh, healthy, and affordable groceries. What started with a small vegetable stall and a handful of daily customers has grown into one of Mumbai's most trusted neighbourhood grocery stores.
        </p>
        <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.8" }}>
          Over the past 14 years, we have served thousands of families across the city, expanded our product range to over 2,000 items, and built long-lasting relationships with more than 50 local farmers and suppliers. Despite our growth, we've never lost sight of what makes us different — the personal touch, the warm smile at the counter, and the genuine care we put into every order.
        </p>
      </div>

      {/* Founder Quote */}
      <div style={{ borderLeft: "3px solid #C0DD97", background: "#EAF3DE", padding: "1rem 1.25rem", borderRadius: "0 8px 8px 0", marginBottom: "1.5rem" }}>
        <p style={{ fontSize: "14px", color: "#27500A", lineHeight: "1.8", fontStyle: "italic" }}>
          "I started FreshMart because I wanted my own family to eat well. That same care goes into every product we stock and every order we deliver."
        </p>
        <span style={{ fontSize: "12px", color: "#3B6D11", marginTop: "6px", display: "block", fontWeight: "600" }}>
          — Anish Mankani, Founder
        </span>
      </div>

      {/* Timeline */}
      <h2 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "1rem" }}>Our journey</h2>
      <div style={{ background: "#fff", border: "0.5px solid #ddd", borderRadius: "12px", padding: "1.25rem", marginBottom: "1.5rem" }}>
        <div style={{ position: "relative", paddingLeft: "1.5rem" }}>
          <div style={{ position: "absolute", left: "6px", top: "4px", bottom: "4px", width: "1px", background: "#C0DD97" }} />
          {[
            ["2010", "FreshMart opens its doors", "A small vegetable and grocery stall in Andheri West with 200 products and 3 staff members."],
            ["2013", "Store expansion", "Doubled our floor space and added dairy, bakery, and packaged goods sections."],
            ["2016", "Local sourcing programme launched", "Partnered directly with 20+ farmers in Maharashtra for farm-fresh produce."],
            ["2019", "Home delivery launched", "Started same-day delivery across Andheri, Goregaon, and Jogeshwari."],
            ["2022", "Online store launched", "Brought FreshMart online so customers can order anytime, from anywhere."],
            ["2024", "5,000+ happy customers", "Now serving multiple neighbourhoods with 2,000+ products and 50+ supplier partnerships."],
          ].map(([year, title, desc]) => (
            <div key={year} style={{ position: "relative", marginBottom: "1.25rem" }}>
              <div style={{ position: "absolute", left: "-1.5rem", top: "4px", width: "12px", height: "12px", borderRadius: "50%", background: "#3B6D11", border: "2px solid #EAF3DE" }} />
              <div style={{ fontSize: "11px", fontWeight: "600", color: "#3B6D11", marginBottom: "2px" }}>{year}</div>
              <div style={{ fontSize: "13px", color: "#333", lineHeight: "1.6" }}><strong>{title}</strong> — {desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Shop With Us */}
      <h2 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "1rem" }}>Why shop with us</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "12px", marginBottom: "1.5rem" }}>
        {[
          ["🌿", "Always fresh", "Daily restocks of fruits, vegetables, dairy & bakery items"],
          ["🚚", "Same-day delivery", "Order by 2 PM and get it delivered the same evening"],
          ["🏷️", "Fair prices", "Weekly deals, loyalty rewards, and no hidden charges"],
          ["🌱", "Local sourcing", "50+ farmer and supplier tie-ups across Maharashtra"],
          ["✅", "Quality checked", "Every product goes through our freshness check before stocking"],
          ["❤️", "Community first", "Rooted in the neighbourhood, giving back to local communities"],
        ].map(([icon, title, desc]) => (
          <div key={title} style={{ background: "#f5f5f0", borderRadius: "8px", padding: "1rem", textAlign: "center" }}>
            <div style={{ fontSize: "22px", marginBottom: "8px" }}>{icon}</div>
            <h3 style={{ fontSize: "13px", fontWeight: "600", marginBottom: "4px" }}>{title}</h3>
            <p style={{ fontSize: "12px", color: "#666", lineHeight: "1.5" }}>{desc}</p>
          </div>
        ))}
      </div>

      {/* Our Promises */}
      <h2 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "1rem" }}>Our promises to you</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "1.5rem" }}>
        {[
          ["🕐", "On-time delivery", "We respect your time. Orders are always delivered within the committed window."],
          ["🔄", "Easy returns", "Not happy with a product? We'll replace it or refund you, no questions asked."],
          ["💰", "Best price guarantee", "Found it cheaper elsewhere? Tell us — we'll match or beat the price."],
          ["🎧", "Always reachable", "Call, WhatsApp, or email us — we respond within 30 minutes during store hours."],
        ].map(([icon, title, desc]) => (
          <div key={title} style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "1rem", background: "#f5f5f0", borderRadius: "8px" }}>
            <div style={{ fontSize: "20px", flexShrink: 0 }}>{icon}</div>
            <div>
              <h4 style={{ fontSize: "13px", fontWeight: "600", marginBottom: "3px" }}>{title}</h4>
              <p style={{ fontSize: "12px", color: "#666", lineHeight: "1.5" }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Team */}
      <h2 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "1rem" }}>Meet the team</h2>
      <div style={{ background: "#fff", border: "0.5px solid #ddd", borderRadius: "12px", padding: "1.25rem", marginBottom: "1.5rem" }}>
        {[
          ["RK", "Anish Mankani", "Founder & Owner — 2 years of passion for fresh groceries"],
          
        ].map(([init, name, role]) => (
          <div key={name} style={{ display: "flex", gap: "12px", alignItems: "center", padding: "12px 0", borderBottom: "0.5px solid #eee" }}>
            <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#C0DD97", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "600", color: "#27500A", flexShrink: 0 }}>{init}</div>
            <div>
              <div style={{ fontSize: "14px", fontWeight: "600" }}>{name}</div>
              <div style={{ fontSize: "12px", color: "#666" }}>{role}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Community */}
      <h2 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "1rem" }}>We care about our community</h2>
      <div style={{ background: "#fff", border: "0.5px solid #ddd", borderRadius: "12px", padding: "1.25rem", marginBottom: "1.5rem" }}>
        <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.8" }}>
          FreshMart is more than a store — it's part of the neighbourhood. We regularly donate surplus fresh produce to local food banks, support small-scale farmers by paying them fairly, and participate in community events across Andheri. We believe a thriving neighbourhood makes for a better store, and a better store makes for a thriving neighbourhood.
        </p>
      </div>

      {/* CTA */}
      <div style={{ background: "#EAF3DE", borderRadius: "12px", padding: "1.5rem 2rem", textAlign: "center" }}>
        <p style={{ color: "#3B6D11", fontSize: "14px", marginBottom: "12px" }}>Ready to experience the FreshMart difference? Start shopping today.</p>
        <a href="/contact" style={{ background: "#3B6D11", color: "#EAF3DE", textDecoration: "none", borderRadius: "8px", padding: "10px 24px", fontSize: "14px", fontWeight: "600", display: "inline-block" }}>
          Get in touch with us →
        </a>
      </div>

    </div>
  );
}