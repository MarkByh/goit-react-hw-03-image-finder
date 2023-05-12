import { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Searchbar.module.css';
export default class Searchbar extends Component {
  state = {
    searchText: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = el => {
    el.preventDefault();
    this.props.onSubmit(this.state.searchText);
    this.setState({ searchText: '' });
  };

  render() {
    return (
      <header className={style.searchbar}>
        <form onSubmit={this.handleSubmit} className={style.searchForm}>
          <button type="submit" className={style.searchFormbutton}>
            <span className={style.searchFormButtonlabel}></span>
          </button>
          <input
            name="searchText"
            value={this.state.searchText}
            onChange={this.handleChange}
            className={style.SearchForminput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
