import React from "react";
import * as I from "../assets/index.js";
import "./Account.css";
import CreateAccountInput from "../components/CreateAccountInput/CreateAccountInput.js";
import { inputData } from "../utils/index.js";

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
          {inputData.map((item, index) => (
              <CreateAccountInput
                icon={item.icon}
                alt={item.alt}
                placeholder={item.placeholder}
                type={item.type}
                key={index}
              />             
          ))}
          <button className="button-form">Create Account</button>
        </div>
      </form>
    </div>
  );
}

export default Account;
