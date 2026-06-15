
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import Blog from './components/Blog'
import Contact from './components/Contact'
import { CartProvider } from "./components/Cartitems"
import Footer from './components/Footer'
import Ordersuccess from './components/Ordersuccess'
import CheckoutPage from './components/Checkout'
import Cartpage from './components/Cartpage'
import Return_policy from './components/Return_policy'
import Delivery_info from './components/Delivery_info'
import Faqs from './components/Faqs'
import ScrollToTop from './components/Scroll_top'
import { useState } from 'react'



function App() {
  const [showChat, setShowChat] = useState(false)


  return (
    <>
     <CartProvider> 
    <Router>
      <Navbar/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-success" element={<Ordersuccess />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/Return_policy" element={<Return_policy />} />
        <Route path="/Delivery_info" element={<Delivery_info />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
      <Footer/>
      {/* Floating Chatbot Button + Window */}
          <div style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 9999 }}>

            {/* Chat window - shows when open */}
            {showChat && (
              <div style={{ marginBottom: "12px" }}>
                <Chatbot />
              </div>
            )}

            {/* Toggle Button */}
            <button
              onClick={() => setShowChat(!showChat)}
              style={{
                width: "56px", height: "56px", borderRadius: "50%",
                backgroundColor: "#1D9E75", border: "none",
                color: "white", fontSize: "24px", cursor: "pointer",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginLeft: "auto"
              }}>
              {showChat ? "✕" : "🛒"}
            </button>
          </div>
    </Router>
     </CartProvider> 
    </>
  )
}

export default App
