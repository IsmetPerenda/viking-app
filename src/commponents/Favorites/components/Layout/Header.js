import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import img from "../../../Header/images/insuring-long-term-travel.jpg"
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Favorite packages</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
      <img src={img} alt='Photo' />
      </div>
    </Fragment>
  );
};

export default Header;
