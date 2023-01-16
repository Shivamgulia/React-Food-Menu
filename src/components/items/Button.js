import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <div className={classes.action}>
      <button onClick={props.method} className={classes.btn}>
        {props.text}
      </button>
    </div>
  );
};

export default Button;
