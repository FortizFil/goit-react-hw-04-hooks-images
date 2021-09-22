import { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
const Modal = ({ largeImageURL, onClose }) => {
  const handleCloseModal = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEscKey = useCallback(
    e => {
      if (e.code === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [handleEscKey]);

  return (
    <div className="Overlay" onClick={handleCloseModal}>
      <div className="Modal">
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  largeImageURL: PropTypes.string,
};

export default Modal;
