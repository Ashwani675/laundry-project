import React from "react";
import Homepage from "../Components/HomePage/Homepage";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import { Route, Routes } from "react-router";
import PrivateRoute from "../Components/context/PrivateRoute";

const MainRouter = () => {
  const pageData = [
    {
      pathname: "/",
      name: "Homepage",
      navbar: true,
      isPrivate: true,
      component:<Homepage/>
    },
    {
      pathname: "/login",
      name: "Login",
      navbar: true,
      isPrivate: true,
      component:<Login/>
    },
    {
      pathname: "/register",
      name: "Register",
      navbar: true,
      isPrivate: true,
      component:<Register/>
    },
  ];
  return (
    <Routes>
              {pageData.map((el, index) => {
                return el.isPrivate ? (
                  <Route
                    key={index}
                    path={el.pathname}
                    element={<PrivateRoute>{el.component}</PrivateRoute>}
                  />
                ) : (
                  <Route
                    key={index}
                    path={el.pathname}
                    element={el.component}
                  />
                );
              })}
            </Routes>
  );
};

export default MainRouter;
