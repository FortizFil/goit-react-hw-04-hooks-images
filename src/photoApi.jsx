const BASE_URL = 'https://pixabay.com/api';
const KEY = '22670946-2b796d5e22242051989a80e4c';

function fetchPhoto(name, page) {
  return fetch(
    `${BASE_URL}/?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    return response.json();
  });
}

const api = {
  fetchPhoto,
};

export default api;
