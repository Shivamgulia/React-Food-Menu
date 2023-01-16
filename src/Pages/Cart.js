import React, { useContext, useRef } from 'react';
import MenuList from '../components/Menu/MenuList';
import CartContext from '../store/CartProvider';

import Button from '../components/items/Button';
import useHttp from '../components/hooks/use-http';
import { addOrder } from '../components/lib/api';

import classes from './Cart.module.css';

const Cart = () => {
  const { sendRequest, status, error } = useHttp(addOrder, true);
  const cartCtx = useContext(CartContext);
  const tableRef = useRef();
  const order = (props) => {
    sendRequest({
      id: tableRef.current.value,
      order: cartCtx.items,
    });
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (status === '') {
  }

  return (
    <div className={classes.cart}>
      <MenuList list={cartCtx.items} />
      <h1 className={classes.price}>Rs. {cartCtx.totalAmount}</h1>
      <div className={classes.input}>
        <label htmlFor="table">Table Number</label>
      </div>
      {status !== 'completed' && (
        <input id="table" type="number" ref={tableRef} />
      )}
      {status !== 'completed' && <Button text="Order" method={order} />}
      {status === 'completed' && <h1 className={classes.text}>Order Placed</h1>}
    </div>
  );
};

export default Cart;
