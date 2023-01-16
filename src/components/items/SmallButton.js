import React from 'react';

import classes from './SmallButton.module.css';

const SmallButton = (props) => {
  return (
    <div className={classes.block}>
      <button className={classes.btn} onClick={props.method}>
        {props.text}
      </button>
    </div>
  );
};

export default SmallButton;
