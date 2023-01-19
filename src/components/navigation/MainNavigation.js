import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <div className={classes.set}>
      <div className={classes.nav}>
        <ul className={classes.aist}>
          <li className={classes.logo}>
            <section className={classes.link}>
              <NavLink to="/">Order</NavLink>
            </section>
          </li>
        </ul>
        <div className={classes.links}>
          <ul className={classes.bist}>
            <li className={classes.items}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={classes.items}>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li className={classes.items}>
              <NavLink to="/orders">Orders</NavLink>
            </li>
            <li className={classes.items}>
              <NavLink to="/cart">Cart</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
