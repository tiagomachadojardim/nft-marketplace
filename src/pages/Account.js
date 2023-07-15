import React from "react";
import ImageAccount from "../assets/ImageCreateAccount.png";

import "./Account.css";

function Account() {
  return (
    <div className="div-account">
      <div className="image-wrapper">
        <img
          className="image-account"
          src={ImageAccount}
          alt="Two persons in space"
        />
      </div>
      <form className="form-create-account">
        <div className="form-text">
          <h2>Create Account</h2>
          <p>
            Welcome! Enter your details and start creating, collecting and
            selling Nfts.
          </p>
        </div>
        <div className="form-style">
          <input placeholder="Username" type="text" />
          <input placeholder="Email Address" type="email" />
          <input placeholder="Password" type="password" />
          <input placeholder="Confirm Password" type="password" />
          <button>Create Account</button>
        </div>
      </form>
    </div>
  );
}

export default Account;
