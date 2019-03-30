import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Layout from './containers/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            <Switch>
              <Route path="/" exact component={BurgerBuilder}></Route>
              <Route path="/orders" exact component={Orders}></Route>
              <Route path="/checkout" component={Checkout}></Route>
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
