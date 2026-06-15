import { Link } from "react-router-dom";

const policies = [
  {
    icon: "🌿",
    title: "Fresh produce & perishables",
    type: "list",
    content: [
      "Report within 24 hours of delivery",
      'Attach a clear photo via "My Orders → Report Issue"',
      "Eligible for full refund or same-day replacement",
      "No need to return the item",
    ],
  },
  {
    icon: "📦",
    title: "Packaged & branded goods",
    type: "list",
    content: [
      "Return within 7 days if sealed and unopened",
      "Damaged, leaking, or tampered packaging qualifies for instant refund",
      "Expired items are refunded without return",
    ],
  },
  {
    icon: "🚫",
    title: "Non-returnable items",
    type: "text",
    content:
      "For hygiene and safety reasons, the following cannot be returned once opened: loose grains & pulses, bakery items, cut fruit, dairy products, and any item explicitly marked \"non-returnable\" on the product page.",
  },
  {
    icon: "💳",
    title: "Refund timeline",
    type: "list",
    content: [
      "UPI / Wallet: within 1 business day",
      "Debit / Credit Card: 3–5 business days",
      "Store Credits: instantly, usable on next order",
      "COD refund: transferred to your bank within 5–7 days",
    ],
  },
];

export default function Return_policy() {
  return (
    <div className="page-wrapper">
      <nav className="tab-nav">
        <Link to="/faqs" className="tab-link">FAQs</Link>
        <Link to="/delivery" className="tab-link">Delivery Info</Link>
        <Link to="/returns" className="tab-link active">Return Policy</Link>
      </nav>

      <div className="page-content">
        <div className="hero">
          <span className="eyebrow">Our Promise</span>
          <h1>Return &amp; Refund Policy</h1>
          <p>We stand behind every item we sell. If something isn't right, we'll make it right — quickly and without fuss.</p>
        </div>

        <div className="highlight-box">
          <strong>100% satisfaction guarantee:</strong> If you're unhappy with any item for any reason, report it within 24 hours of delivery and we'll refund or replace it, free of charge.
        </div>

        <div className="policies">
          {policies.map((pol) => (
            <div className="pol-card" key={pol.title}>
              <div className="pol-head">
                <span className="pol-icon">{pol.icon}</span>
                <h3>{pol.title}</h3>
              </div>
              {pol.type === "list" ? (
                <ul>
                  {pol.content.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{pol.content}</p>
              )}
            </div>
          ))}
        </div>

        <div className="cta-strip">
          <p>Need to raise a return or report a damaged item?</p>
          <Link to="/contact" className="cta-btn">Raise a Request →</Link>
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

  .highlight-box {
    background: #e8f5e2;
    border-left: 3px solid #1a4731;
    border-radius: 0 8px 8px 0;
    padding: 1rem 1.25rem;
    font-size: 14px;
    color: #1a4731;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .highlight-box strong { font-weight: 500; }

  .policies { margin-bottom: 2rem; }

  .pol-card {
    background: #fff;
    border: 0.5px solid #ddd;
    border-radius: 12px;
    padding: 1.25rem;
    margin-bottom: 1rem;
  }

  .pol-head {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 0.75rem;
  }

  .pol-icon { font-size: 22px; }

  .pol-head h3 {
    font-size: 15px;
    font-weight: 500;
    color: #222;
  }

  .pol-card ul {
    padding-left: 1.2rem;
    font-size: 14px;
    color: #555;
    line-height: 1.8;
  }

  .pol-card p {
    font-size: 14px;
    color: #555;
    line-height: 1.7;
  }

  .cta-strip {
    background: #1a4731;
    border-radius: 12px;
    padding: 1.25rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .cta-strip p { font-size: 14px; color: #c8e6d4; line-height: 1.5; }

  .cta-btn {
    background: #ff6b35;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 9px 20px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
  }

  .cta-btn:hover { background: #e55b25; }
`;