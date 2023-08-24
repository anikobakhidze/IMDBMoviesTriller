import routes from "./config/routes";
import { Routes, Route } from "react-router-dom";
import React from "react";

function AppRoutes() {
  return (
    <Routes>
      {routes.map((route) => {
        if (route.Guard) {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <route.Guard>
                  <route.Component />
                </route.Guard>
              }
            />
          );
        }
        return (
          <Route
            key={route.path}
            path={route.path}
            Component={route.Component}
          />
        );
      })}
    </Routes>
  );
}

export default AppRoutes;
