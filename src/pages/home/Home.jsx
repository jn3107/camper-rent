import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'components/loader/Loader';

const Home = () => {
  const navigate = useNavigate();

  const handlerNavigate = () => {
    navigate('/catalog');
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

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
      {loading && <Loader />}
    </div>
  );
};

export default Home;
