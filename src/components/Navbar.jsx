import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useCart } from "./Cartitems";
import { useNavigate } from "react-router-dom";



export default function Navbar() {
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("freshmart_user"));

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="container">

        {/* Logo / Brand */}
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          🛒 FreshMart
        </NavLink>

        {/* Mobile toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Shop">Shop</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About Us</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
            </li>




            {/* Cart icon */}
            <li className="nav-item">
              <NavLink className="nav-link position-relative" to="/cart">
                🛒
                {totalItems > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: "0.65rem" }}
                  >
                    {totalItems}
                    <span className="visually-hidden">items in cart</span>
                  </span>
                )}
              </NavLink>
            </li>
            
            {user ? (
              <li className="nav-item d-flex align-items-center gap-2" style={{ marginLeft: "20px" }}>
                <img src={user.avatar} width={32} style={{ borderRadius: "50%" }} />
                <span className="text-white">{user.name}</span>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => {
                    localStorage.removeItem("freshmart_user");
                    window.location.reload();
                  }}
                >
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <button
                  className="btn btn-outline-light"
                  style={{ marginLeft: "20px" }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </li>
            )}

          </ul>
        </div>

      </div>
    </nav>
  )
}