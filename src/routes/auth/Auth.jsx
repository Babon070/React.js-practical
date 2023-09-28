import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Create from "./create/Create";
import Login from "./login/Login";
import "./Auth.scss";
import { useTranslation } from "react-i18next";

const Auth = () => {
  const { t } = useTranslation();

  return (
    <section className="auth">
      <div className="animation_circle"></div>
      <div className="auth_popup">
        <ul className="auth_popup-nav">
          <li>
            <NavLink
              exact
              activeClassName="auth__link--active"
              className="auth__link"
              to="/auth/create"
            >
              {t("auth_create")}
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="auth__link--active"
              className="auth__link"
              to="/auth/login"
            >
              {t("auth_login")}
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/auth/create">
            <Create />
          </Route>
          <Route path="/auth/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </section>
  );
};

export default Auth;
