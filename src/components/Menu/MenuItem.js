import React, { useContext } from 'react';

import CartContext from '../../store/CartProvider';
import SmallButton from '../items/SmallButton';
import classes from './MenuItem.module.css';

const MenuItem = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <div className={classes.blockmi}>
      <div className={classes.images}>
        <img
          src={props.item.image}
          align="right"
          alt="Dish Image"
          height="200"
        />
      </div>
      <h1 className={classes.nm}>{props.item.name}</h1>
      <p>{props.item.descreption}</p>
      <div>
        <section className={classes.sec}>
          {!!props.item.amount && !props.minus && (
            <SmallButton
              text="-"
              method={() => {
                cartCtx.removeItem(props.item.id);
              }}
            />
          )}
          {!!props.item.amount && (
            <SmallButton text={props.item.amount}></SmallButton>
          )}
          {!props.minus && (
            <SmallButton
              text="+"
              method={() => {
                cartCtx.addItem(props.item);
              }}
            />
          )}
        </section>
        <h3>Price : Rs{props.item.price}</h3>
      </div>
    </div>
  );
};

export default MenuItem;
