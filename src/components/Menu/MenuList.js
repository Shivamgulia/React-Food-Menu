import React from 'react';
import MenuItem from './MenuItem';

import classes from './MenuList.module.css';
const MenuList = (props) => {
  // console.log(props.list);
  return (
    <div className={classes.blockml}>
      <ul>
        <li className={classes.menuitem}>
          {!!props.list &&
            props.list.map((item) => (
              <MenuItem key={item.id} item={item} minus={props.minus} />
            ))}
        </li>
      </ul>
    </div>
  );
};
export default MenuList;
