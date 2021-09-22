import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/imageGalleryItem';

const ImageGallery = ({ photos, onSelect }) => {
  return (
    <ul className="ImageGallery">
      {photos.map(photo => (
        <ImageGalleryItem
          key={photo.webformatURL}
          name={photo.id}
          photoUrl={photo.webformatURL}
          largeImageURL={photo.largeImageURL}
          onClick={() => onSelect(photo.largeImageURL)}
        />
      ))}
    </ul>
  );
};
ImageGallery.propTypes = {
  photos: PropTypes.array,
  onSelect: PropTypes.func,
};
export default ImageGallery;
