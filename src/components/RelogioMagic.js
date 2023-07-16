import React, { useState, useEffect } from 'react';
import "./RelogioMagic.css";

const RelogioMagic = ({ targetTime }) => {
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const newRemainingTime = calculateRemainingTime();
      setRemainingTime(newRemainingTime);
    }, 1000);

    return () => clearInterval(interval);
  });

  function calculateRemainingTime() {
    const currentTime = new Date().getTime();
    const difference = targetTime - currentTime;

    if (difference <= 0) {
      return {
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0')
    };
  }

  return (
    <div className='div-relogio'>
    <p>Auction ends in:</p>
    <div><h3>{remainingTime.hours}</h3> <h3>{remainingTime.minutes}</h3> <h3>{remainingTime.seconds}</h3></div>
    <div><p>Horas</p> <p>Minutos</p> <p>Segundos</p></div>


      
    </div>
  );
};

export default RelogioMagic;
