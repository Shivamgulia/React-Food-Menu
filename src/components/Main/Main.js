import { useContext } from 'react';
import CartContext from '../../store/CartProvider';
import Button from '../items/Button';
import Internal from './Internal';

import classes from './Main.module.css';

const Main = () => {
  const cartCtx = useContext(CartContext);
  const submit1 = () => {
    cartCtx.addItem({
      id: 1,
      name: 'roti',
      descreption:
        'Veg chapati is made from four, is cooked on tava and is delicately prepared. it is fuilled with starch',
      price: 8,
    });
    console.log(cartCtx.items);
  };
  const submit2 = () => {
    cartCtx.addItem({
      id: 2,
      name: 'Butter roti',
      description:
        'Veg chapati is made from four, is cooked on tava and is delicately prepared. it is fuilled with starch, and butter is applied to it',
      price: 10,
    });
    console.log(cartCtx.items);
  };
  const submit3 = () => {
    cartCtx.removeItem(2);
    console.log(cartCtx.items);
  };
  return (
    <div className={classes.block}>
      <Internal />
    </div>
  );
};

export default Main;
