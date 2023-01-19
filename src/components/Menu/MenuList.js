import React from 'react';
import MenuItem from './MenuItem';

import classes from './MenuList.module.css';
const MenuList = (props) => {
  return (
    <div className={classes.blockml}>
      <ul>
        <li className={classes.menuitem}>
          {!!props.list &&
            props.list.map((item) => <MenuItem key={item.id} item={item} />)}
        </li>
      </ul>
    </div>
  );
};
export default MenuList;
