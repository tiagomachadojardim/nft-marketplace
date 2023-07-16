import React from "react";
import "./CreateAccountInput.css";

function CreateAccountInput({icon, alt, placeholder, type}) {
  return (
    <div className="input-form">
      <img className="image-form" src={icon} alt={alt} />
      <input placeholder={placeholder} type={type} />
    </div>
  );
}

export default CreateAccountInput;
