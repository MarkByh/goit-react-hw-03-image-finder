import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Searchbar from 'components/Searchbar/Searchbar';
import { getImages } from 'servises/fetch';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    searchText: '',
    images: [],
    isLoading: false,
    page: 1,
    totalHits: 0,
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { page, searchText } = this.state;
    if (prevState.page !== page || prevState.searchText !== searchText) {
      try {
        this.setState({ isLoading: true });
        const { images, totalHits } = await getImages(searchText, page);
        if (images.length === 0) {
          Notify.failure('Nothing founded');
          return;
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          totalHits,
        }));
      } catch (error) {
        Notify.failure(error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  };

  onLoadMore = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };

  setSearch = searchValue => {
    if (searchValue === '') {
      Notify.failure('Nothing to search');
      return;
    }
    this.setState({ searchText: searchValue, images: [], page: 1 });
  };

  render() {
    const { images, totalHits, isLoading } = this.state;
    return (
      <div
        style={{
          fontSize: 40,
          color: '#010101',
          display: 'grid',
          gridtemplatecolumns: '1fr',
          gridgap: '16px',
          paddingbottom: '24px',
        }}
      >
        <Searchbar onSubmit={this.setSearch} />
        {images.length > 0 && <ImageGallery images={images} />}
        {totalHits !== images.length && !isLoading && (
          <Button onLoad={this.onLoadMore}> Load more</Button>
        )}
        {isLoading && <Loader />}
      </div>
    );
  }
}
