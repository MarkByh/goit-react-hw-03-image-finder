// import { Component } from 'react';
// import Searchbar from 'components/Searchbar/Searchbar';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { getImages } from 'Api/api';
// import { Button } from 'components/Button/Button';
// import { Loader } from 'components/Loader/Loader';
import { GaleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import style from './ImageGallery.module.css';
export const ImageGallery = ({ images }) => {
  //   state = {};
  return (
    <ul className={style.ImageGallery}>
      {images.map(image => (
        <GaleryItem
          key={image.id}
          webImg={image.webformatURL}
          tags={image.tags}
          largeImageURL={image.largeImageURL}
        />
      ))}
    </ul>
  );
};
