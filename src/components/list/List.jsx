import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../store/modal/slice';
import { modalSelector } from '../../store/modal/selector';
import { favoritesSelector } from '../../store/favorites/selector';
import { campersSelector } from '../../store/campers/selectors';
import { getAllCampersThunk } from '../../store/campers/Thunks';
import {
  addToLocalStorage,
  removeFromLocalStorage,
} from '../../store/favorites/slice';
// import { Svg } from '../../components/Icons/Icons';
import css from './List.module.css';
import Modal from '../modal/Modal';
import ModalContent from '../modalContent/ModalContent';

const List = () => {
  const dispatch = useDispatch();
  const campers = useSelector(campersSelector);
  const favorites = useSelector(favoritesSelector);
  const showModal = useSelector(modalSelector);
  const [show, setShow] = useState(4);
  const [showModalCurrent, setShowModalCurrent] = useState(null);

  useEffect(() => {
    dispatch(getAllCampersThunk());
  }, [dispatch]);

  const showMore = () => {
    setShow(prev => prev + 4);
  };

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const handleOpenModalCurrent = id => {
    setShowModalCurrent(id);
    handleOpenModal();
  };

  const handleAddToFavorites = item => {
    const isFavorite = favorites.some(({ _id }) => _id === item._id);
    if (isFavorite) {
      dispatch(removeFromLocalStorage(item));
    } else {
      dispatch(addToLocalStorage(item));
    }
  };

  return (
    <div className={`${css.container} container`}>
      <ul className={css.list}>
        {campers
          .slice(0, show)
          .map(
            ({
              _id,
              name,
              price,
              rating,
              location,
              adults,
              engine,
              transmission,
              description,
              details,
              gallery,
              reviews,
            }) => (
              <li className={css.card} key={_id}>
                <img className={css.img} src={gallery[0]} alt="camper" />
                <div>
                  <div className={css.title_container}>
                    <h2 style={{ fontSize: '24px' }}>{name}</h2>
                    <div className={css.price}>
                      <p>&#x20AC;{price.toFixed(2)}</p>
                      <button
                        className={css.like}
                        onClick={() => handleAddToFavorites(campers[_id - 1])}
                      >
                        {/* {favorites.findIndex(item => item._id === _id) ===
                        -1 ? (
                          <Svg id={'#icon-default'} width={24} height={24} />
                        ) : (
                          <Svg id={'#icon-red'} width={24} height={24} />
                        )} */}
                      </button>
                    </div>
                  </div>
                  <div className={css.loc_container}>
                    <p className={css.gap}>
                      {/* <Svg id={'#icon-star'} width={24} height={24} /> */}
                      {`${rating}(${reviews.length} Reviews)`}
                    </p>
                    <p className={css.gap}>
                      {/* <Svg id={'#icon-map'} width={24} height={24} /> */}
                      {location}
                    </p>
                  </div>
                  <p className={css.desc}>{description}</p>
                  <div className={css.benefits}>
                    <div className={css.item}>
                      {/* <Svg id={'#icon-Users'} width={24} height={24} /> */}
                      {`${adults} adults`}
                    </div>
                    <div className={css.item}>
                      {/* <Svg id={'#icon-trans'} width={24} height={24} /> */}
                      {transmission.charAt(0).toUpperCase() +
                        transmission.slice(1)}
                    </div>
                    <div className={css.item}>
                      {/* <Svg id={'#icon-fuel'} width={24} height={24} /> */}
                      {engine.charAt(0).toUpperCase() + engine.slice(1)}
                    </div>
                    <div className={css.item}>
                      {/* <Svg id={'#icon-kitchen'} width={24} height={24} /> */}
                      {`${details.kitchen} Kitchen`}
                    </div>
                    <div className={css.item}>
                      {/* <Svg id={'#icon-bad'} width={24} height={24} /> */}
                      {`${details.beds} Beds`}
                    </div>
                    <div className={css.item}>
                      {/* <Svg id={'#icon-Vector'} width={20} height={24} /> */}
                      AC
                    </div>
                  </div>
                  <button
                    className={css.button}
                    onClick={() => handleOpenModalCurrent(_id)}
                  >
                    Show more
                  </button>
                  {showModal && showModalCurrent === _id && (
                    <Modal>
                      <ModalContent camper={campers[_id - 1]} />
                    </Modal>
                  )}
                </div>
              </li>
            )
          )}
      </ul>
      {show < campers.length && (
        <button className={`${css.button} ${css.load}`} onClick={showMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default List;
