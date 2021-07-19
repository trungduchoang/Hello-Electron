// libs
import { Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// routes
import mainRoutes from '@/routers/mainRoutes';
// components
import AppLayout from '@/components/layout';
import RecursiveRender from '@/tools/renderer/RecursiveRender';

/**
 * App
 */
export default function App() {
  return (
    <RecursiveRender
      structure={[
        [HashRouter, {}],
        [Suspense, { fallback: 'Suspensed' }],
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
