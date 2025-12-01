import React, { useState } from "react";
import * as I from "../assets/index.js";
import "./Account.css";
import CreateAccountInput from "../components/CreateAccountInput/CreateAccountInput.js";
import { inputData } from "../utils/index.js";
import { VALIDATION } from "../utils/constants.js";

function Account() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username é obrigatório';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username deve ter pelo menos 3 caracteres';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!VALIDATION.emailRegex.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (formData.password.length < VALIDATION.passwordMinLength) {
      newErrors.password = `Senha deve ter pelo menos ${VALIDATION.passwordMinLength} caracteres`;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Senhas não conferem';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setSuccessMessage('Conta criada com sucesso! 🎉');
      // Aqui você faria a chamada para API
      console.log('Form submitted:', formData);
      
      // Limpar formulário
      setTimeout(() => {
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
        setSuccessMessage('');
      }, 3000);
    }
  };

  return (
    <div className="div-account">
      <img
        className="image-account"
        src={I.ImageAccount}
        alt="Two persons in space"
      />
      <form className="form-create-account" onSubmit={handleSubmit}>
        <div className="form-text">
          <h2>Create Account</h2>
          <p>
            Welcome! Enter your details and start creating, collecting and
            selling Nfts.
          </p>
        </div>
        <div className="form-style">
          {inputData.map((item, index) => (
            <div key={index}>
              <CreateAccountInput
                icon={item.icon}
                alt={item.alt}
                placeholder={item.placeholder}
                type={item.type}
              />
              {errors[item.placeholder.toLowerCase().replace(/\s+/g, '')] && (
                <p className="error-message" role="alert">
                  {errors[item.placeholder.toLowerCase().replace(/\s+/g, '')]}
                </p>
              )}
            </div>
          ))}
          {successMessage && (
            <p className="success-message" role="status">{successMessage}</p>
          )}
          <button type="submit" className="button-form">Create Account</button>
        </div>
      </form>
    </div>
  );
}

export default Account;
