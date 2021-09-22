import { useState, useEffect } from 'react';
import SearchBar from './components/Searchbar/searchbar';
import ImageGallery from './components/ImageGallery/imageGallery';
import Button from './components/Button/button';
import photoAPI from './photoApi';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';

const App = () => {
  const [name, setName] = useState('');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [showButton, setShowButton] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleFormSubmit = name => {
    setName(name);
    setPage(1);
    setStatus('load');
    setPhotos([]);
  };

  const handleSelectImage = largeImageUrl => {
    setModalContent(largeImageUrl);
  };

  const handleCloseModal = () => {
    setModalContent(null);
  };

  // componentDidUpdate() {
  //   const nextName = this.state.name;
  //   const nextPage = this.state.page;
  //   if (this.state.status === 'load') {

  //       this.setState({
  //         photos: [...this.state.photos, ...photos.hits],
  //         status: 'resolved',
  //         showButton: true,
  //       });
  //     });
  //   }
  // }

  const onButton = () => {
    setPage(page + 1);
    setStatus('load');
  };

  useEffect(() => {
    if (status === 'load') {
      photoAPI.fetchPhoto(name, page).then(imgs => {
        if (imgs.hits.length === 0 && page === 1) {
          setStatus('idle');
          setShowButton(false);
          return;
        }
        setPhotos(prevPhotos => [...prevPhotos, ...imgs.hits]);
        setStatus('idle');
        setShowButton(true);
      });
    }
  }, [name, page, status]);

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      <ImageGallery photos={photos} onSelect={handleSelectImage} />
      {status === 'load' && <Loader />}
      {showButton && <Button onClickLoadMore={onButton} />}
      {modalContent && (
        <Modal largeImageURL={modalContent} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default App;
