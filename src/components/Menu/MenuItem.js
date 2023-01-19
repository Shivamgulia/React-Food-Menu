import React, { useContext } from 'react';

import CartContext from '../../store/CartProvider';
import SmallButton from '../items/SmallButton';
import classes from './MenuItem.module.css';

const MenuItem = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <div className={classes.blockmi}>
      <h1 className={classes.nm}>{props.item.name}</h1>
      <p>
        {props.item.description}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,
        quaerat. Explicabo sequi dolorem, autem sed{' '}
      </p>
      <div>
        <section className={classes.sec}>
          {!!props.item.amount && (
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
          <SmallButton
            text="+"
            method={() => {
              cartCtx.addItem(props.item);
            }}
          />
        </section>
        <h3>Price : Rs{props.item.price}</h3>
      </div>
    </div>
  );
};

export default MenuItem;
