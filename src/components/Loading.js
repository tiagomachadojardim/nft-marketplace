import React from 'react';
import PropTypes from 'prop-types';
import './Loading.css';

const Loading = ({ message = 'Carregando...' }) => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-message">{message}</p>
    </div>
  );
};

Loading.propTypes = {
  message: PropTypes.string
};

export default Loading;
