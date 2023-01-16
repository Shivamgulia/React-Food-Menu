import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Layout from './components/navigation/Layout';
import MainNavigation from './components/navigation/MainNavigation';
import Button from './components/items/Button';
import MainPage from './Pages/MainPage';
import Menu from './Pages/Menu';
import Cart from './Pages/Cart';

function App() {
  return (
    <div className="App">
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
          </Switch>
        </Layout>
      </Suspense>
    </div>
  );
}

export default App;
