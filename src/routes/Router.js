import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "./auth/Auth";
import Basket from "./basket/Basket";
import Category from "./category/Category";
import Home from "./home/Home";
import Like from "./like/Like";
import Product from "./product/Product";
import Search from "./search/Search";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path='/like'>
        <Like/>
      </Route>
      <Route path='/basket'>
        <Basket/>
      </Route>
      <Route path="/product/:id">
        <Product price={"Kelishilgan"} />
      </Route>
      <Route path="/search/:productName">
        <Search price={"Kelishilgan"} />
      </Route>
      <Route path="/category/:id">
        <Category price={"Kelishilgan"} />
      </Route>
    </Switch>
  );
};

export default Router;
