import React, { Fragment, useEffect } from 'react';
import List from '../components/Menu/List';

import useHttp from '../components/hooks/use-http';
import { getAllFoods } from '../components/lib/api';

const Menu = () => {
  const {
    sendRequest,
    status,
    data: loadedFoods,
    error,
  } = useHttp(getAllFoods, true);
  // const [menu, setMenu] = useState(loadedFoods);

  // const sort = () => {
  //   const cart = cartCtx.items;
  //   const newMenu = menu.filter((el) => {
  //     return cart.findIndex((e) => e.id === el.id) === -1;
  //   });
  //   setMenu([...cart, ...newMenu]);
  // };

  useEffect(() => {
    sendRequest();
    // setMenu(loadedFoods);
  }, [sendRequest]);

  // useEffect(() => {
  //   setMenu(loadedFoods);
  //   sort();
  // }, [cartCtx.items]);

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
    <Fragment>{status === 'completed' && <List list={loadedFoods} />}</Fragment>
  );
};

export default Menu;
