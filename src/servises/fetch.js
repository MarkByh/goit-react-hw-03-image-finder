import axios from 'axios';
const API_KEY = '33729115-d56bf7c23f3553b8bb6b6e42d';

export const getImages = async (query, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  if (response.status !== 200) {
    throw new Error(`Bad response, ${response.status}`);
  }
  return {
    images: response.data.hits.map(formatImage),
    totalImages: response.data.totalHits,
  };
};

const formatImage = image => ({
  tags: image.tags,
  webformatURL: image.webformatURL,
  largeImageURL: image.largeImageURL,
  id: image.id,
});
