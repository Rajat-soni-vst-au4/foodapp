import React from 'react';
import image from "../../assets/meals.jpeg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
        <header className={classes.header}>
            <h1>Foodify</h1>
            <button>Cart</button>
        </header>
        <div className={classes["main-image"]}>
            <img src={image} alt="table of food"/>
        </div>
    </>
  )
}

export default Header