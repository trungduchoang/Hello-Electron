// libs
import { Suspense } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { SnackbarProvider as AlertUIProvider } from "notistack";
import { ConfirmProvider as ConfirmUIProvider } from "material-ui-confirm";
import { CssBaseline } from "@material-ui/core";
// routes
import mainRoutes from "@/routers/mainRoutes";
// components
import AppLayout from "@/components/layout";
import RecursiveRender from "@/utils/renderer/RecursiveRender";
// dataSources
import { confirmDefaultOptions } from "./dataSources/app";

/**
 * App
 */
export default function App() {
  const a = 1;

  return (
    <RecursiveRender
      structure={[
        [HashRouter, {}],
        [Suspense, { fallback: "Suspensed" }],
        [AlertUIProvider, {}],
        [ConfirmUIProvider, { defaultOptions: confirmDefaultOptions }],
        [AppLayout, {}],
        [Switch, {}],
      ]}
    >
      <CssBaseline />
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
