import { useState } from "react";
import "./StatusBox.css";
import unknown from "./unknown.png";
import meo from "./meo.png";
import { Typography } from "@mui/material";

function LoginBox({ onLogin }) {
  const handleLogin = () => {
    onLogin();
  };

  return (
    <div className="outer-box">
      <div className="inner-box">
        <div className="avatar">
          <img src={unknown} alt="Unknown Avatar" />
        </div>
        <div className="title">
          <h2>Bạn chưa đăng nhập!</h2>
          <Typography>Vui lòng đăng nhập để đồng bộ trải nghiệm!</Typography>
        </div>
      </div>
      <div className="btn-box">
        <button className="login" onClick={handleLogin}>
          Đăng nhập
        </button>
      </div>
    </div>
  );
}

function LogoutBox({ onLogout }) {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className="outer-box">
      <div className="inner-box">
        <div className="avatar">
          <img src={meo} alt="Avatar" />
        </div>
        <div className="title">
          <h2>Trần Hương</h2>
          <Typography>huongtrantt9832@gmail.com</Typography>
        </div>
        <button className="logout" onClick={handleLogout}>
          &gt;
        </button>
      </div>
    </div>
  );
}

function Box() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return isLoggedIn ? (
    <LogoutBox onLogout={handleLogout} />
  ) : (
    <LoginBox onLogin={handleLogin} />
  );
}

export default Box;
