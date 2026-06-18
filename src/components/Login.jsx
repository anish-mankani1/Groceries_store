import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Replace these with your real backend URLs

const GOOGLE_AUTH_URL = "https://groceries-store-backend-8enm.onrender.com/oauth2/authorization/google";
const GITHUB_AUTH_URL = "https://groceries-store-backend-8enm.onrender.com/oauth2/authorization/github";

function Login({ onClose }) {
    const navigate = useNavigate();
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  // Support both controlled (parent passes onClose) and uncontrolled usage
  const handleClose = () => {
    setIsOpen(false);
    if (typeof onClose === "function") onClose();
    navigate("/"); // Navigate to home after closing


  };

  const handleGoogleLogin = () => {
    window.location.href = GOOGLE_AUTH_URL;
  };

  const handleGithubLogin = () => {
    window.location.href = GITHUB_AUTH_URL;
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleClose}
      
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 50,
        backdropFilter: "blur(4px)",
        
      }
    }
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "32px",
          width: "100%",
          maxWidth: "340px",
          position: "relative",
          boxShadow: "0 24px 64px rgba(0,0,0,0.12)",
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "#f4f4f5",
            border: "none",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#71717a",
            fontSize: "16px",
            lineHeight: 1,
          }}
       
       >
          ✕
        </button>

        {/* Icon */}
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "14px",
            background: "#f4f4f5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#52525b"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>

        {/* Heading */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: 600,
            color: "#18181b",
            margin: "0 0 4px",
          }}
        >
          Welcome back
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "13px",
            color: "#71717a",
            margin: "0 0 24px",
          }}
        >
          Sign in to continue to your account
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {/* Google */}
          <button
            onClick={handleGoogleLogin}
            onMouseEnter={() => setHoveredBtn("google")}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "11px 14px",
              border: "1px solid #e4e4e7",
              borderRadius: "10px",
              background: hoveredBtn === "google" ? "#fafafa" : "#fff",
              cursor: "pointer",
              width: "100%",
              fontSize: "14px",
              fontWeight: 500,
              color: "#18181b",
              transition: "background 0.15s",
            }}
          >
            <GoogleIcon />
            <span style={{ flex: 1, textAlign: "left" }}>
              Continue with Google
            </span>
            <ChevronRight />
          </button>

          {/* GitHub */}
          <button
            onClick={handleGithubLogin}
            onMouseEnter={() => setHoveredBtn("github")}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "11px 14px",
              border: "1px solid #e4e4e7",
              borderRadius: "10px",
              background: hoveredBtn === "github" ? "#fafafa" : "#fff",
              cursor: "pointer",
              width: "100%",
              fontSize: "14px",
              fontWeight: 500,
              color: "#18181b",
              transition: "background 0.15s",
            }}
          >
            <GitHubIcon />
            <span style={{ flex: 1, textAlign: "left" }}>
              Continue with GitHub
            </span>
            <ChevronRight />
          </button>
        </div>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            margin: "20px 0",
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "#f4f4f5" }} />
          <span style={{ fontSize: "12px", color: "#a1a1aa" }}>
            secure sign-in
          </span>
          <div style={{ flex: 1, height: "1px", background: "#f4f4f5" }} />
        </div>

        {/* Footer */}
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "#a1a1aa",
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          By continuing, you agree to our{" "}
          <a href="#" style={{ color: "#71717a", textDecoration: "none" }}>
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" style={{ color: "#71717a", textDecoration: "none" }}>
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908C16.658 14.013 17.64 11.705 17.64 9.2z"
        fill="#4285F4"
      />
      <path
        d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
        fill="#34A853"
      />
      <path
        d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
        fill="#FBBC05"
      />
      <path
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
        fill="#EA4335"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#18181b">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#a1a1aa"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export default Login;