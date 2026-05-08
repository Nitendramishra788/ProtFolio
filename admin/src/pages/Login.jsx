import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/admin");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login Page</h2>
      <button onClick={handleLogin} style={{
          marginTop: "20px",
          padding: "10px",
          width: "100px",
          background: "green",
          color: "white",
          borderRadius:"1rem",
          border: "none",
          cursor: "pointer",
        }}
>Login</button>
    </div>
  );
}

export default Login;