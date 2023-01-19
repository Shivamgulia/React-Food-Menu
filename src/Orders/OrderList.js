import { useState } from 'react';
import Order from './Order';
import classes from './OrderList.module.css';

const OrderList = (props) => {
  const [list, setList] = useState(props.list);

  const sort = () => {
    const newMenu = props.list.filter((el) => {
      return props.list.findIndex((e) => e.id === el.id) === -1;
    });
    setList([...newMenu]);
  };

  return (
    <div className={classes.orderList}>
      {!!props.list &&
        props.list.map((item) => <Order key={item.id} item={item} />)}
    </div>
  );
};

export default OrderList;
