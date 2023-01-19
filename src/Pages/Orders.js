import React, { useEffect, Fragment } from 'react';

import useHttp from '../components/hooks/use-http';
import { getTables } from '../components/lib/api';

import OrderList from '../Orders/OrderList';

const Orders = () => {
  const { sendRequest, status, error, data: loadedTables } = useHttp(getTables);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (error) {
    return <div>{error}</div>;
  }

  if (status === 'pending') {
    return <div>wait Loading....</div>;
  }

  if (status === 'completed' && (!loadedTables || loadedTables.length < 1)) {
    return <div>NO Orders Found</div>;
  }

  return (
    <Fragment>
      {status === 'completed' && <OrderList list={loadedTables} />}
    </Fragment>
  );
};

export default Orders;
