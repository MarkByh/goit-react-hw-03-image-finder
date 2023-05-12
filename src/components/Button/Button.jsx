import PropTypes from 'prop-types';
import style from './button.module.css';
export const Button = ({ onLoad, children }) => {
  return (
    <button className={style.Button} onClick={onLoad} type="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  onLoad: PropTypes.func.isRequired,
};
