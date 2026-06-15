import { Link } from "react-router-dom";

const deliveryCards = [
  {
    icon: "🕐",
    title: "Same-Day Delivery",
    desc: "Order before 6 PM for delivery the same evening (7 PM – 10 PM slot).",
    badge: "Within city limits",
    badgeType: "green",
  },
  {
    icon: "📅",
    title: "Scheduled Delivery",
    desc: "Choose a 2-hour slot up to 3 days in advance at checkout. No extra charge.",
    badge: "Free",
    badgeType: "green",
  },
  {
    icon: "⚡",
    title: "Express Delivery",
    desc: "Need it urgently? Get delivery in 90 minutes for orders above ₹499.",
    badge: "₹49 extra",
    badgeType: "orange",
  },
];

const steps = [
  { icon: "🛒", title: "Order confirmed", desc: "You'll receive an SMS and email confirmation instantly with your order ID." },
  { icon: "📦", title: "Packed at the store", desc: "Our team hand-picks your items, checking for freshness and quantity accuracy." },
  { icon: "🚚", title: "Out for delivery", desc: "Your delivery partner is on the way. Track live using the link in your SMS." },
  { icon: "🏠", title: "Delivered", desc: "Items handed over and a delivery photo is captured for your records." },
];

const zones = [
  { zone: "City Centre", order: "₹199 – ₹499", charge: "₹29", time: "2–4 hrs" },
  { zone: "City Centre", order: "Above ₹499", charge: "Free", time: "2–4 hrs" },
  { zone: "Suburbs", order: "Any", charge: "₹49", time: "4–6 hrs" },
  { zone: "Outskirts", order: "Any", charge: "₹79", time: "Next day" },
];

export default function Delivery_info() {
  return (
    <div className="page-wrapper">
      <nav className="tab-nav">
        <Link to="/faqs" className="tab-link">FAQs</Link>
        <Link to="/delivery" className="tab-link active">Delivery Info</Link>
        <Link to="/returns" className="tab-link">Return Policy</Link>
      </nav>

      <div className="page-content">
        <div className="hero">
          <span className="eyebrow">Logistics</span>
          <h1>Delivery Information</h1>
          <p>Fresh groceries at your door — here's how we get them there, fast and safe.</p>
        </div>

        <div className="delivery-grid">
          {deliveryCards.map((card) => (
            <div className="d-card" key={card.title}>
              <div className="d-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <span className={`badge badge-${card.badgeType}`}>{card.badge}</span>
            </div>
          ))}
        </div>

        <div className="section">
          <span className="category-tag">How your order travels</span>
          <div className="timeline">
            {steps.map((step, i) => (
              <div className="tl-item" key={step.title}>
                <div className="tl-left">
                  <div className="tl-dot">{step.icon}</div>
                  {i < steps.length - 1 && <div className="tl-line" />}
                </div>
                <div className="tl-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <span className="category-tag">Delivery charges by zone</span>
          <div className="table-wrap">
            <table className="zone-table">
              <thead>
                <tr>
                  <th>Zone</th>
                  <th>Order Value</th>
                  <th>Charge</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {zones.map((row, i) => (
                  <tr key={i}>
                    <td>{row.zone}</td>
                    <td>{row.order}</td>
                    <td style={{ color: row.charge === "Free" ? "#1a4731" : "inherit", fontWeight: row.charge === "Free" ? 500 : 400 }}>{row.charge}</td>
                    <td>{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="highlight-box">
          <strong>Public holidays &amp; Sundays:</strong> Deliveries run as usual but may be delayed by 1–2 hours. Express delivery is not available on Sundays.
        </div>
      </div>

      <style>{styles}</style>
    </div>
  );
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .page-wrapper {
    font-family: 'Inter', sans-serif;
    max-width: 760px;
    margin: 0 auto;
    padding-bottom: 4rem;
    background: #f7f3ec;
    min-height: 100vh;
  }

  .tab-nav {
    display: flex;
    background: #fff;
    border-bottom: 2px solid #1a4731;
  }

  .tab-link {
    flex: 1;
    padding: 14px 8px;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    color: #888;
    border-bottom: 3px solid transparent;
    margin-bottom: -2px;
    transition: all 0.2s;
  }

  .tab-link:hover { background: #f0f0f0; color: #1a4731; }
  .tab-link.active { color: #1a4731; border-bottom: 3px solid #1a4731; background: #f0faf5; }

  .page-content { padding: 0 1.5rem; }

  .hero {
    padding: 2rem 0 1.5rem;
    border-bottom: 1px solid #ddd;
    margin-bottom: 2rem;
  }

  .eyebrow {
    display: block;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #ff6b35;
    margin-bottom: 0.5rem;
  }

  .hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: 30px;
    font-weight: 700;
    color: #1a4731;
    line-height: 1.2;
    margin-bottom: 0.75rem;
  }

  .hero p { font-size: 15px; color: #666; line-height: 1.6; }

  .section { margin-bottom: 2rem; }

  .category-tag {
    display: inline-block;
    font-size: 11px;
    font-weight: 500;
    padding: 3px 10px;
    border-radius: 20px;
    background: #e8f5e2;
    color: #1a4731;
    margin-bottom: 1rem;
  }

  .delivery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 12px;
    margin-bottom: 2rem;
  }

  .d-card {
    background: #fff;
    border: 0.5px solid #ddd;
    border-radius: 12px;
    padding: 1.25rem;
  }

  .d-icon { font-size: 28px; margin-bottom: 0.75rem; }
  .d-card h3 { font-size: 14px; font-weight: 500; color: #222; margin-bottom: 0.4rem; }
  .d-card p { font-size: 13px; color: #666; line-height: 1.6; }

  .badge {
    display: inline-block;
    font-size: 11px;
    font-weight: 500;
    padding: 2px 8px;
    border-radius: 12px;
    margin-top: 0.5rem;
  }

  .badge-green { background: #e8f5e2; color: #1a4731; }
  .badge-orange { background: #fff0eb; color: #cc4400; }

  .timeline { display: flex; flex-direction: column; }

  .tl-item {
    display: flex;
    gap: 1rem;
    position: relative;
  }

  .tl-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 38px;
    flex-shrink: 0;
  }

  .tl-dot {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #e8f5e2;
    border: 2px solid #1a4731;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    flex-shrink: 0;
  }

  .tl-line {
    width: 2px;
    flex: 1;
    background: #ddd;
    min-height: 20px;
    margin: 4px 0;
  }

  .tl-content {
    padding-bottom: 1.5rem;
    padding-top: 0.5rem;
  }

  .tl-content h3 { font-size: 14px; font-weight: 500; color: #222; margin-bottom: 0.25rem; }
  .tl-content p { font-size: 13px; color: #666; line-height: 1.6; }

  .table-wrap { overflow-x: auto; }

  .zone-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    border: 0.5px solid #ddd;
  }

  .zone-table th {
    background: #1a4731;
    color: #e8f5e2;
    font-weight: 500;
    padding: 10px 14px;
    text-align: left;
  }

  .zone-table td {
    padding: 10px 14px;
    border-bottom: 0.5px solid #eee;
    color: #555;
  }

  .zone-table tr:last-child td { border-bottom: none; }
  .zone-table tr:nth-child(even) td { background: #fafafa; }

  .highlight-box {
    background: #e8f5e2;
    border-left: 3px solid #1a4731;
    border-radius: 0 8px 8px 0;
    padding: 1rem 1.25rem;
    font-size: 14px;
    color: #1a4731;
    line-height: 1.6;
    margin-top: 1rem;
  }

  .highlight-box strong { font-weight: 500; }
`;