import PropTypes from 'prop-types';
const ImageGalleryItem = ({ name, photoUrl, largeImageURL, onClick }) => {
  const handleOnClick = () => {
    onClick(largeImageURL);
  };

  return (
    <li className="ImageGalleryItem" onClick={handleOnClick}>
      <img src={photoUrl} alt={name} className="ImageGalleryItem-image" />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  photoUrl: PropTypes.string,
  name: PropTypes.number,
  onClick: PropTypes.func,
  largeImageURL: PropTypes.string,
};

export default ImageGalleryItem;
