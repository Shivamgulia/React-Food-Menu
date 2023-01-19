import React, { useEffect, useContext, useState } from 'react';
import MenuItem from './MenuItem';
import CartContext from '../../store/CartProvider';

import classes from './MenuList.module.css';
const List = (props) => {
  const [list, setList] = useState(props.list);
  const cartCtx = useContext(CartContext);

  const sort = () => {
    const cart = cartCtx.items;
    const newMenu = props.list.filter((el) => {
      return cart.findIndex((e) => e.id === el.id) === -1;
    });
    setList([...cart, ...newMenu]);
  };
  useEffect(() => {
    sort();
  }, [cartCtx]);

  return (
    <div className={classes.blockml}>
      <ul>
        <li className={classes.menuitem}>
          {!!props.list &&
            list.map((item) => <MenuItem key={item.id} item={item} />)}
        </li>
      </ul>
    </div>
  );
};
export default List;
