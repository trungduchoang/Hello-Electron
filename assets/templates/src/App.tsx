// libs
import { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
// routes
import mainRoutes from "@/routers/mainRoutes";
// store
import { store } from "@/configs/redux";
// components
import AppLayout from "@/components/layout";
import RecursiveRender from "@/tools/renderer/RecursiveRender";

/**
 * App
 */
export default function App() {
  return (
    <RecursiveRender
      structure={[
        [BrowserRouter, {}],
        [Suspense, { fallback: "Suspensed" }],
        [ReduxProvider, { store }],
        [AppLayout, {}],
        [Switch, {}],
      ]}
    >
      {mainRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </RecursiveRender>
  );
}
