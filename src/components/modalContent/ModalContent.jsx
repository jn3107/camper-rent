import React, { useState } from 'react';
// import { Svg } from '../../components/Icons/Icons';
// import Features from '../features/Features';
import Reviews from '../reviews/Reviews';
import css from './ModalContent.module.css';

const ModalContent = ({ camper }) => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  const handleFeatures = () => {
    setShowFeatures(!showFeatures);
    if (showReviews) setShowReviews(!showReviews);
  };

  const handleReviews = () => {
    setShowReviews(!showReviews);
    if (showFeatures) setShowFeatures(!showFeatures);
  };

  return (
    <div>
      <div className={css.title}>{camper.name}</div>
      <div className={css.loc_container}>
        <p className={css.gap}>
          {/* <Svg id={'#icon-star'} width={24} height={24} /> */}
          {`${camper.rating}(${camper.reviews.length} Reviews)`}
        </p>
        <p className={css.gap}>
          {/* <Svg id={'#icon-map'} width={24} height={24} /> */}
          {camper.location}
        </p>
      </div>
      <div className={css.price}>&#x20AC;{camper.price.toFixed(2)}</div>
      <div className={css.img_container}>
        <img
          className={css.img}
          src={camper.gallery[0]}
          width={290}
          alt="camper"
        />
        <img
          className={css.img}
          src={camper.gallery[1]}
          width={290}
          alt="camper"
        />
        <img
          className={css.img}
          src={camper.gallery[2]}
          width={290}
          alt="camper"
        />
      </div>
      <p className={css.desc}>{camper.description}</p>
      <div className={css.options}>
        <div className={css.option} onClick={handleFeatures}>
          Features
        </div>
        <div className={css.option} onClick={handleReviews}>
          Reviews
        </div>
      </div>
      {/* {showFeatures && <Features camper={camper} />} */}
      {showReviews && <Reviews camper={camper} />}
    </div>
  );
};

export default ModalContent;
