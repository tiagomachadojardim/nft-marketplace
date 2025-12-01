import React from "react";
import PropTypes from "prop-types";
import "./CreateAccountInput.css";

const CreateAccountInput = React.memo(({icon, alt, placeholder, type}) => {
  return (
    <div className="input-form">
      <img className="image-form" src={icon} alt={alt} />
      <input placeholder={placeholder} type={type} aria-label={placeholder} />
    </div>
  );
});

CreateAccountInput.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default CreateAccountInput;
