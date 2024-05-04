import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../store/modal/slice';

export const Modal = ({ children }) => {
  const showModal = useSelector(modalSelector);
  const dispatch = useDispatch();

  const handlerClick = useCallback(
    event => {
      if (event.code === 'Escape') dispatch(closeModal());
      if (event.currentTarget === event.target) dispatch(closeModal());
    },
    [dispatch]
  );

  useEffect(() => {
    document.addEventListener('keydown', handlerClick);

    return () => {
      document.removeEventListener('keydown', handlerClick);
    };
  }, [handlerClick]);

  return (
    <div onClick={handlerClick}>
      <div>
        <button onClick={() => dispatch(closeModal())}></button>
        {children}
      </div>
    </div>
  );
};
