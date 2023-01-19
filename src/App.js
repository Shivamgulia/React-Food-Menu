import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import classes from './App.module.css';
import Layout from './components/navigation/Layout';
import MainNavigation from './components/navigation/MainNavigation';

import MainPage from './Pages/MainPage';
import Menu from './Pages/Menu';
import Cart from './Pages/Cart';
import Orders from './Pages/Orders';

function App() {
  return (
    <div className={classes.app}>
      <MainNavigation />
      <Suspense fallback={<div className="centered">Loading ...... </div>}>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <MainPage />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/orders">
              <Orders />
            </Route>
          </Switch>
        </Layout>
      </Suspense>
    </div>
  );
}

export default App;
