import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import myName from "../store/index";

export default () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    getMenus();
  }, []);

  const fetchMenus = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            name: "首页",
            path: "/",
            element: "/Home/index.jsx",
          },
          {
            name: "个人中心",
            path: "/center",
            element: "/Center/index.jsx",
          },
        ]);
      }, 1000);
    });
  };

  const getMenus = () => {
    fetchMenus().then((res) => {
      setRoutes(
        res.map((item) => {
          return {
            ...item,
            element: lazy(() => {
              return import(`../views${item.element}`);
            }),
          };
        })
      );
    });
  };

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        {routes.map((menu) => {
          return (
            <Route
              path={menu.path}
              key={menu.path}
              element={<menu.element myName={myName}></menu.element>}
            ></Route>
          );
        })}
      </Routes>
    </Suspense>
  );
};
