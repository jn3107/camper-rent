import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handlerNavigate = () => {
    navigate('/catalog');
  };

  return (
    <div>
      <h1>Camper Rent</h1>
      <p>
        We will help you make your travels interesting and exciting. Our
        services include camper van rentals for any style of trip for any
        company. We are chosen by regular customers and those who like to try
        something new. Hurry up, click the button below, and choose an
        unforgettable experience.
      </p>
      <button type="button" onClick={handlerNavigate}>
        Click me!
      </button>
    </div>
  );
};

export default Home;
