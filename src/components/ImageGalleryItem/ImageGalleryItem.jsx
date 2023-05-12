import { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import styled from './imagegallery.module.css';
export class GaleryItem extends Component {
  state = {
    isModalOpened: false,
  };

  toggleModal = () => {
    this.setState(({ isModalOpened }) => ({ isModalOpened: !isModalOpened }));
  };

  render() {
    const { webImg, largeImageURL, tags } = this.props;
    return (
      <li className={styled.ImageGalleryItem}>
        <img
          className={styled.ImageGalleryItemImage}
          src={webImg}
          alt={tags}
          onClick={this.toggleModal}
        />
        {this.state.isModalOpened && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </li>
    );
  }
}

GaleryItem.propTypes = {
  webImg: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
