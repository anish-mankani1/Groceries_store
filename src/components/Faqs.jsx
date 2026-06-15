import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    category: "Orders & Shopping",
    items: [
      {
        q: "How do I place an order?",
        a: "Browse our store, add items to your cart, and proceed to checkout. You can pay using UPI, debit/credit card, or cash on delivery. Orders placed before 6 PM are eligible for same-day delivery in select areas.",
      },
      {
        q: "Can I edit or cancel my order after placing it?",
        a: "You can edit or cancel your order within 30 minutes of placing it by going to \"My Orders.\" After that window, our packing process has already begun and changes may not be possible.",
      },
      {
        q: "Is there a minimum order value?",
        a: "Yes, a minimum order value of ₹199 applies for all deliveries. Orders below this amount can be picked up in-store free of charge.",
      },
    ],
  },
  {
    category: "Freshness & Quality",
    items: [
      {
        q: "How do you ensure produce is fresh?",
        a: "We source fruits and vegetables directly from local farms every morning. All perishable items are stored in temperature-controlled facilities and checked by our quality team before dispatch.",
      },
      {
        q: "What if I receive a damaged or expired item?",
        a: 'We\'re sorry if this happens! Take a photo of the item and raise a complaint within 24 hours of delivery through "My Orders → Report an Issue." We\'ll issue a full refund or free replacement, no questions asked.',
      },
    ],
  },
  {
    category: "Payments & Offers",
    items: [
      {
        q: "What payment methods do you accept?",
        a: "We accept UPI (GPay, PhonePe, Paytm), net banking, all major debit and credit cards, and cash on delivery. EMI options are available on orders above ₹2,000.",
      },
      {
        q: "How do I apply a coupon code?",
        a: 'On the checkout page, look for the "Apply Coupon" field just above the order summary. Enter your code and click "Apply." The discount will be reflected immediately in your total.',
      },
    ],
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className={`faq-question ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", flexShrink: 0 }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && <div className="faq-answer"><p>{a}</p></div>}
    </div>
  );
}

export default function Faqs() {
  return (
    <div className="page-wrapper">
   

      <div className="page-content">
        <div className="hero">
          <span className="eyebrow">Help Centre</span>
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about shopping with FreshMart. Can't find an answer? We're happy to help.</p>
        </div>

        {faqs.map((group) => (
          <div className="faq-group" key={group.category}>
            <span className="category-tag">{group.category}</span>
            {group.items.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        ))}

        <div className="cta-strip">
          <p>Still have a question? Our support team is available Mon–Sat, 9 AM – 7 PM.</p>
          <Link to="/contact" className="cta-btn">Contact Support →</Link>
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

  .hero p {
    font-size: 15px;
    color: #666;
    line-height: 1.6;
  }

  .faq-group { margin-bottom: 2rem; }

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

  .faq-item {
    border: 0.5px solid #ddd;
    border-radius: 12px;
    margin-bottom: 0.75rem;
    overflow: hidden;
    background: #fff;
  }

  .faq-question {
    width: 100%;
    text-align: left;
    padding: 1rem 1.25rem;
    background: transparent;
    border: none;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: #222;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }

  .faq-question:hover { background: #f9f9f9; }
  .faq-question.open { color: #1a4731; }

  .faq-answer {
    border-top: 0.5px solid #eee;
    padding: 0.75rem 1.25rem 1rem;
  }

  .faq-answer p {
    font-size: 14px;
    line-height: 1.7;
    color: #555;
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
    margin-top: 1rem;
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