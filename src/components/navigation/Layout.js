import React, { Fragment } from 'react';

import classes from './Layout.module.css';

const Layout = (props) => {
  return <div className={classes.blockl}>{props.children}</div>;
};

export default Layout;
