import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom'

import Layout from './containers/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            <Switch>
              <Route path="/" exact component={BurgerBuilder}></Route>
              <Route path="/checkout" exact component={Checkout}></Route>
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
