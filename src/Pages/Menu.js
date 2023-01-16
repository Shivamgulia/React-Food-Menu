import React, {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import MenuList from '../components/Menu/MenuList';

import useHttp from '../components/hooks/use-http';
import { getAllFoods } from '../components/lib/api';

import CartContext from '../store/CartProvider';

const DUMMY_MENU = [
  {
    id: 1,
    name: 'Roti',
    description:
      'Veg chapati is made from four, is cooked on tava and is delicately prepared. it is fuilled with starch',
    price: 8,
  },
  {
    id: 2,
    name: 'Butter Roti',
    description:
      'Veg chapati is made from four, is cooked on tava and is delicately prepared. it is fuilled with starch, and butter is applied to it',
    price: 10,
  },
  {
    id: 3,
    name: 'Roti',
    description:
      'Veg chapati is made from four, is cooked on tava and is delicately prepared. it is fuilled with starch',
    price: 8,
  },
  {
    id: 4,
    name: 'Roti',
    description:
      'Veg chapati is made from four, is cooked on tava and is delicately prepared. it is fuilled with starch',
    price: 8,
  },
  {
    id: 5,
    name: 'Roti',
    description:
      'Veg chapati is made from four, is cooked on tava and is delicately prepared. it is fuilled with starch',
    price: 8,
  },
  {
    id: 6,
    name: 'Roti',
    description:
      'Veg chapati is made from four, is cooked on tava and is delicately prepared. it is fuilled with starch',
    price: 8,
  },
];

const Menu = () => {
  const {
    sendRequest,
    status,
    data: loadedFoods,
    error,
  } = useHttp(getAllFoods, true);
  const cartCtx = useContext(CartContext);
  const [menu, setMenu] = useState(DUMMY_MENU);

  const sort = () => {
    const cart = cartCtx.items;
    const newMenu = menu.filter((el) => {
      return cart.findIndex((e) => e.id === el.id) === -1;
    });
    setMenu([...cart, ...newMenu]);
  };

  useEffect(() => {
    sendRequest();
    if (status === 'completed') setMenu(loadedFoods);
  }, [sendRequest]);

  useEffect(() => {
    sort();
  }, [cartCtx.items, loadedFoods, status]);

  useCallback(() => {
    sendRequest();
  }, [sendRequest]);

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (status === 'pending') {
    return <div className="centered">Wait For Menu to Load</div>;
  }

  if (status === 'completed' && (!loadedFoods || loadedFoods.length === 0)) {
    return <div>No Food Items Found</div>;
  }

  return (
    <Fragment>{status === 'completed' && <MenuList list={menu} />}</Fragment>
  );
};

export default Menu;
