import React from "react";
import * as I from "../assets/index.js";
import "./Account.css";

function Account() {
  return (
    <div className="div-account">
        <img
          className="image-account"
          src={I.ImageAccount}
          alt="Two persons in space"
        />
      <form className="form-create-account">
        <div className="form-text">
          <h2>Create Account</h2>
          <p>
            Welcome! Enter your details and start creating, collecting and
            selling Nfts.
          </p>
        </div>
        <div className="form-style">
          <div className="input-form">
            <img className="image-form" src={I.UserIconForm} alt="user icon" />
            <input placeholder="Username" type="text" />
          </div>
          <div className="input-form">
            <img
              className="image-form"
              src={I.EnvelopeIconForm}
              alt="envelope icon"
            />
            <input placeholder="Email Address" type="email" />
          </div>
          <div className="input-form">
            <img
              className="image-form"
              src={I.LockKeyIconForm}
              alt="lockkey icon"
            />
            <input placeholder="Password" type="password" />
          </div>
          <div className="input-form">
            <img
              className="image-form"
              src={I.LockKeyIconForm}
              alt="lockkey icon"
            />
            <input placeholder="Confirm Password" type="password" />
          </div>
          <button className="button-form">Create Account</button>
        </div>
      </form>
    </div>
  );
}

export default Account;
