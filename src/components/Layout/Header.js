import React from 'react';
import image from "../../assets/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
        <header className={classes.header}>
            <h1>Foody-Fy</h1>
            <HeaderCartButton />
        </header>
        <div className={classes["main-image"]}>
            <img src={image} alt="table of food"/>
        </div>
    </>
  )
}

export default Header