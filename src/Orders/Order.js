import MenuList from '../components/Menu/MenuList';
import classes from './Order.module.css';

const Order = (props) => {
  return (
    <div className={classes.order}>
      <h1>Table Number : {props.item.id}</h1>
      <MenuList list={props.item.order} />
    </div>
  );
};

export default Order;
